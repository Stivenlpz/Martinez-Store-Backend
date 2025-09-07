import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { PaymentResponse } from 'mercadopago/dist/clients/payment/commonTypes';

@Injectable()
export class OrdersHelperService {
  constructor(private readonly prisma: PrismaService) {}

  async markAsPaid(orderId: string, payment: PaymentResponse) {
    return await this.prisma.$transaction(async (tx) => {
      const order = await tx.order.findUnique({
        where: { id: orderId },
        include: { items: true },
      });
      if (!order) throw new NotFoundException(`Order ${orderId} not found`);

      for (const item of order.items) {
        await tx.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } },
        });
      }

      return await tx.order.update({
        where: { id: orderId },
        data: {
          status: 'PAID',
          paymentStatus: 'COMPLETED',
          history: {
            push: {
              date: new Date(),
              from: order.status,
              by: 'system',
              to: 'PAID',
              reason: 'Payment approved by Mercadopago webhook.',
              meta: {
                paymentId: payment.id,
                statusDetail: payment.status_detail,
              },
            },
          },
        },
        include: { items: true },
      });
    });
  }

  async markAsRejected(orderId: string, payment: PaymentResponse) {
    return await this.prisma.order.update({
      where: { id: orderId },
      data: {
        status: 'PENDING',
        paymentStatus: 'FAILED',
        history: {
          push: {
            date: new Date(),
            from: 'PENDING',
            to: 'FAILED',
            reason: 'Payment rejected',
            meta: {
              paymentId: payment.id,
              statusDetail: payment.status_detail,
            },
          },
        },
      },
      include: { items: true },
    });
  }

  async markAsCancelled(orderId: string, payment: PaymentResponse) {
    return await this.prisma.$transaction(async (tx) => {
      const order = await tx.order.findUnique({
        where: { id: orderId },
        include: { items: true },
      });
      if (!order) throw new NotFoundException(`Order ${orderId} not found`);

      if (order.status === 'PAID') {
        for (const item of order.items) {
          await tx.product.update({
            where: { id: item.productId },
            data: { stock: { increment: item.quantity } },
          });
        }
      }

      return await tx.order.update({
        where: { id: orderId },
        data: {
          status: 'CANCELLED',
          paymentStatus: 'CANCELLED',
          canceledAt: new Date(),
          history: {
            push: {
              date: new Date(),
              from: order.status,
              to: 'CANCELLED',
              reason: 'Order cancelled',
              meta: {
                paymentId: payment.id,
                statusDetail: payment.status_detail,
              },
            },
          },
        },
        include: { items: true },
      });
    });
  }

  markAsRefund(orderId: string) {
    console.log('refunded', orderId);
  }
}
