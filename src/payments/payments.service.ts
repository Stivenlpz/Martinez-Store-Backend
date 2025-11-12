/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable, NotFoundException } from '@nestjs/common';
import {
  MercadoPagoConfig,
  Payment,
  Preference,
  Order,
  PaymentRefund,
} from 'mercadopago';
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

  async createPreference(items: Items[], externalReference: string) {
    const data: PreferenceCreateData = {
      body: {
        items,
        external_reference: externalReference,
        back_urls: {
          success: `${process.env.FRONTEND_URL}/payment/success`,
          failure: `${process.env.FRONTEND_URL}/payment/failure`,
          pending: `${process.env.FRONTEND_URL}/payment/pending`,
        },
        auto_return: 'approved',
        notification_url: `${process.env.BACKEND_URL}/payment/webhook`,
      },
    };
    const preference = new Preference(this.client);
    const response = await preference.create(data);
    console.log({
      a: response.init_point,
      b: response.sandbox_init_point,
    });
    return {
      init_point: response.init_point,
      message: 'Preference created successfully',
    };
  }

  async refund(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
    });
    if (!order) throw new NotFoundException('Order not found');
    try {
      console.log(order);
      const paymentId = order.paymentId;

      const refund = new PaymentRefund(this.client);
      const data = await refund.create({
        payment_id: paymentId,
      });
    } catch (error) {
      console.error('refund error with mercadopago', error);
    }

    return this.ordersHelperService.markAsRefund(order.id);
  }

  // todo: refound
  async handleWebhook(response: any) {
    if (response.type !== 'payment') return;

    const payment = await new Payment(this.client).get({
      id: response.data.id,
    });

    if (payment.status === 'approved') {
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
      await this.mailService.paymentRejectedEmail(order.id);
    } else if (payment.status === 'refunded') {
      this.ordersHelperService.markAsRefund(payment.external_reference!);
    } else {
      console.log('Pago en estado:', response.status);
    }
  }
}
