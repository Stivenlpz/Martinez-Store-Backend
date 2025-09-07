import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'nestjs-prisma';
import { PaymentsService } from 'src/payments/payments.service';
import { Items } from 'mercadopago/dist/clients/commonTypes';

@Injectable()
export class OrdersService {
  constructor(
    private prisma: PrismaService,
    private paymentsService: PaymentsService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    return await this.prisma.$transaction(async (tx) => {
      const order = await tx.order.create({
        data: {
          ...createOrderDto,
          items: {
            create: createOrderDto.items.map((item) => item),
          },
          history: [
            {
              date: new Date().toLocaleString(),
              by: 'system',
              from: null,
              to: 'PENDING',
              reason: 'Order created, waiting for payment',
            },
          ],
        },
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      });

      // creamos la lista de items para mercadopago
      const items: Items[] = order.items.map((item) => ({
        id: item.id,
        title: item.product.name,
        description: item.product.description || 'no description provided.',
        picture_url: item.product.images[0],
        quantity: item.quantity,
        unit_price: item.product.price,
      }));

      // creamos la preferencia de pago y obtenemos el init_point
      const data = await this.paymentsService.createPreference(items, order.id);

      await tx.order.update({
        where: {
          id: order.id,
        },
        data: {
          init_point: data.init_point,
        },
      });

      return {
        order,
        ...data,
      };
    });
  }

  async findAll() {
    return await this.prisma.order.findMany({
      include: {
        items: true,
        user: true,
      },
    });
  }

  async findOne(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            product: true,
          },
        },
        user: true,
      },
    });

    if (!order) {
      throw new NotFoundException(`Order with ${id} not found.`);
    }

    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    return await this.prisma.order.update({
      where: { id },
      data: updateOrderDto,
      include: {
        items: true,
        user: true,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.order.delete({ where: { id } });
  }
}
