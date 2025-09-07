import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'nestjs-prisma';
import { OrdersService } from 'src/orders/orders.service';
import { BuyProductDto } from './dto/buy-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ordersService: OrdersService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return await this.prisma.product.create({
      data: createProductDto,
    });
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.product.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return await this.prisma.product.update({
      where: {
        id,
      },
      data: updateProductDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.product.delete({ where: { id } });
  }

  async buy(userId: string, buyProductDto: BuyProductDto) {
    const product = await this.prisma.product.findUnique({
      where: {
        id: buyProductDto.productId,
      },
    });

    if (!product) throw new NotFoundException('Product not found.');
    if (product.stock < buyProductDto.quantity)
      throw new BadRequestException('Not enough stock.');

    return await this.ordersService.create({
      userId,
      items: [
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: buyProductDto.quantity,
          size: buyProductDto.size,
        },
      ],
      totalAmount: product.price * buyProductDto.quantity,
    });
  }

  async incrementStock(productId: string, quantity: number) {
    return await this.prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        stock: {
          increment: quantity,
        },
      },
    });
  }

  async decrementStock(productId: string, quantity: number) {
    return await this.prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        stock: {
          decrement: quantity,
        },
      },
    });
  }
}
