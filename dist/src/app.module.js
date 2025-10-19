"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const orders_module_1 = require("./orders/orders.module");
const nestjs_prisma_1 = require("nestjs-prisma");
const auth_module_1 = require("./auth/auth.module");
const mail_module_1 = require("./mail/mail.module");
const cloudinary_service_1 = require("./cloudinary/cloudinary.service");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
const address_module_1 = require("./address/address.module");
const cart_module_1 = require("./cart/cart.module");
const products_module_1 = require("./products/products.module");
const audits_module_1 = require("./audits/audits.module");
const cart_items_module_1 = require("./cart-items/cart-items.module");
const order_items_module_1 = require("./order-items/order-items.module");
const payments_module_1 = require("./payments/payments.module");
const stats_module_1 = require("./stats/stats.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_prisma_1.PrismaModule,
            users_module_1.UsersModule,
            orders_module_1.OrdersModule,
            payments_module_1.PaymentsModule,
            auth_module_1.AuthModule,
            mail_module_1.MailModule,
            cloudinary_module_1.CloudinaryModule,
            address_module_1.AddressModule,
            cart_module_1.CartModule,
            products_module_1.ProductsModule,
            audits_module_1.AuditsModule,
            cart_items_module_1.CartItemsModule,
            order_items_module_1.OrderItemsModule,
            stats_module_1.StatsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, cloudinary_service_1.CloudinaryService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map