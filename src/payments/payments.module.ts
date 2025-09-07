import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { PrismaModule } from 'nestjs-prisma';
import { MailModule } from 'src/mail/mail.module';
import { OrdersHelperModule } from 'src/orders-helper/order-helper.module';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
  imports: [PrismaModule, MailModule, OrdersHelperModule],
  exports: [PaymentsService],
})
export class PaymentsModule {}
