import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { OrdersHelperService } from './order-helper.service';

@Module({
  imports: [PrismaModule],
  providers: [OrdersHelperService],
  exports: [OrdersHelperService],
})
export class OrdersHelperModule {}
