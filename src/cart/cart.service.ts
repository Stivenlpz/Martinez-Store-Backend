import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { OrdersService } from 'src/orders/orders.service';

@Injectable()
export class CartService {
  constructor(
    private prisma: PrismaService,
    private ordersService: OrdersService,
  ) {}

  async findAll() {
    return await this.prisma.cart.findMany({
      include: {
        user: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.cart.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async checkout(userId: string) {
    const cart = await this.prisma.cart.findUnique({
      where: {
        userId,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!cart) throw new NotFoundException('Cart is not found');
    if (cart.items.length === 0) throw new BadRequestException('Cart is empty');

    let totalAmount = 0;
    const items = cart.items.map((item) => {
      if (item.product.stock < item.quantity) {
        throw new BadRequestException(
          `Not enough stock for ${item.product.name}`,
        );
      }

      totalAmount += item.product.price * item.quantity;

      return {
        productId: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        size: item.size ?? null,
      };
    });

    const data = await this.ordersService.create({
      userId,
      items,
      totalAmount,
    });

    await this.clear(userId);
    return data;
  }

  // TODO: is not working
  async clear(userId: string) {
    return await this.prisma.cart.update({
      where: {
        userId: userId,
      },
      data: {
        items: {
          deleteMany: {},
        },
      },
    });
  }
}
