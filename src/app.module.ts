import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { PrismaModule } from 'nestjs-prisma';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { AddressModule } from './address/address.module';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { AuditsModule } from './audits/audits.module';
import { CartItemsModule } from './cart-items/cart-items.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    OrdersModule,
    PaymentsModule,
    AuthModule,
    MailModule,
    CloudinaryModule,
    AddressModule,
    CartModule,
    ProductsModule,
    AuditsModule,
    CartItemsModule,
    OrderItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService, CloudinaryService],
})
export class AppModule {}
