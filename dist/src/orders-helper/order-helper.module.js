"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersHelperModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
const order_helper_service_1 = require("./order-helper.service");
let OrdersHelperModule = class OrdersHelperModule {
};
exports.OrdersHelperModule = OrdersHelperModule;
exports.OrdersHelperModule = OrdersHelperModule = __decorate([
    (0, common_1.Module)({
        imports: [nestjs_prisma_1.PrismaModule],
        providers: [order_helper_service_1.OrdersHelperService],
        exports: [order_helper_service_1.OrdersHelperService],
    })
], OrdersHelperModule);
//# sourceMappingURL=order-helper.module.js.map