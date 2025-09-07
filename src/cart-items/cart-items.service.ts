import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CartItemsService {
  constructor(private prisma: PrismaService) {}

  async create(createCartItemDto: CreateCartItemDto) {
    return await this.prisma.cartItem.create({
      data: createCartItemDto,
    });
  }

  findAll() {
    return this.prisma.cartItem.findMany();
  }

  findOne(id: string) {
    return this.prisma.cartItem.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateCartItemDto: UpdateCartItemDto) {
    return this.prisma.cartItem.update({
      where: {
        id,
      },
      data: updateCartItemDto,
    });
  }

  remove(id: string) {
    return this.prisma.cartItem.delete({ where: { id } });
  }
}
