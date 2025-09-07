import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaModule } from 'nestjs-prisma';
import { PaymentsModule } from 'src/payments/payments.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [PrismaModule, PaymentsModule],
  exports: [OrdersService],
})
export class OrdersModule {}
