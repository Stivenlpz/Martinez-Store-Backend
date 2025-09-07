import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { PrismaModule } from 'nestjs-prisma';
import { OrdersModule } from 'src/orders/orders.module';

@Module({
  controllers: [CartController],
  providers: [CartService],
  imports: [PrismaModule, OrdersModule],
})
export class CartModule {}
