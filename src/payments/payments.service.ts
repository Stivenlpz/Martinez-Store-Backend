/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { MercadoPagoConfig, Payment, Preference } from 'mercadopago';
import { Items } from 'mercadopago/dist/clients/commonTypes';
import { PreferenceCreateData } from 'mercadopago/dist/clients/preference/create/types';
import { PrismaService } from 'nestjs-prisma';
import { MailService } from 'src/mail/mail.service';
import { OrdersHelperService } from 'src/orders-helper/order-helper.service';

@Injectable()
export class PaymentsService {
  private client: MercadoPagoConfig;
  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
    private ordersHelperService: OrdersHelperService,
  ) {
    this.client = new MercadoPagoConfig({
      accessToken: process.env.MP_ACCESS_TOKEN!,
    });
  }

  // Aquí se crea la preferencia de pago y se retorna el link de pago de mercadopago (init_point)
  async createPreference(items: Items[], externalReference: string) {
    const data: PreferenceCreateData = {
      body: {
        items,
        external_reference: externalReference,
        back_urls: {
          success: `${process.env.BACKEND_URL}/payment/success`,
          failure: `${process.env.BACKEND_URL}/payment/failure`,
          pending: `${process.env.BACKEND_URL}/payment/pending`,
        },
        auto_return: 'approved',
        notification_url: `${process.env.BACKEND_URL}/payment/webhook`,
      },
    };
    const preference = new Preference(this.client);
    const response = await preference.create(data);
    return {
      init_point: response.init_point,
      message: 'Preference created successfully',
    };
  }

  // Aquí se valida el pago y se actualiza la orden en la DB.
  async handleWebhook(response: any) {
    // console.log('Webhook recibido:', response);
    if (response.type !== 'payment') return;
    console.log('entro al pago', response);

    const payment = await new Payment(this.client).get({
      id: response.data.id,
    });
    console.log('pago', payment);

    if (payment.status === 'approved') {
      console.log('aprobado !!!!');
      const order = await this.ordersHelperService.markAsPaid(
        payment.external_reference!,
        payment,
      );
      await this.mailService.paymentAprovedEmail(order.id);
    } else if (payment.status === 'rejected') {
      const order = await this.ordersHelperService.markAsRejected(
        payment.external_reference!,
        payment,
      );
      await this.mailService.paymentAprovedEmail(order.id);
    } else if (payment.status === 'refunded') {
      this.ordersHelperService.markAsRefund(payment.external_reference!);
    } else {
      console.log('Pago en estado:', response.status);
    }
  }
}
