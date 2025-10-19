import { Injectable } from '@nestjs/common';
import { CreateStatDto } from './dto/create-stat.dto';
import { UpdateStatDto } from './dto/update-stat.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class StatsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createStatDto: CreateStatDto) {
    return 'This action adds a new stat';
  }

  async findAll() {
    try {
      const products = await this.prisma.product.findMany();
      const orders = await this.prisma.order.findMany();
      const users = await this.prisma.user.findMany();

      return {
        products: {
          title: 'Productos Totales',
          value: products.length,
          lastMonth: 5,
        },
        orders: {
          title: 'Ordenes Totales',
          value: orders.length,
          lastMonth: 3,
        },
        users: {
          title: 'Usuarios Totales',
          value: users.length,
          lastMonth: 2,
        },
        revenue: {
          title: 'Ganancia',
          value: 80000,
          lastMonth: 30000,
        },
      };
    } catch (error) {
      console.error(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} stat`;
  }

  update(id: number, updateStatDto: UpdateStatDto) {
    return `This action updates a #${id} stat`;
  }

  remove(id: number) {
    return `This action removes a #${id} stat`;
  }
}
