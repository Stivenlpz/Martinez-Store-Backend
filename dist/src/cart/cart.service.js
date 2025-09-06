"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
const orders_service_1 = require("../orders/orders.service");
let CartService = class CartService {
    prisma;
    ordersService;
    constructor(prisma, ordersService) {
        this.prisma = prisma;
        this.ordersService = ordersService;
    }
    async findAll() {
        return await this.prisma.cart.findMany({
            include: {
                user: true,
                items: {
                    include: {
                        product: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        return await this.prisma.cart.findUnique({
            where: {
                id,
            },
            include: {
                user: true,
                items: {
                    include: {
                        product: true,
                    },
                },
            },
        });
    }
    async checkout(userId) {
        const cart = await this.prisma.cart.findUnique({
            where: {
                userId,
            },
            include: {
                items: {
                    include: {
                        product: true,
                    },
                },
            },
        });
        if (!cart)
            throw new common_1.NotFoundException('Cart is not found');
        if (cart.items.length === 0)
            throw new common_1.BadRequestException('Cart is empty');
        let totalAmount = 0;
        const items = cart.items.map((item) => {
            if (item.product.stock < item.quantity) {
                throw new common_1.BadRequestException(`Not enough stock for ${item.product.name}`);
            }
            totalAmount += item.product.price * item.quantity;
            return {
                productId: item.product.id,
                name: item.product.name,
                price: item.product.price,
                quantity: item.quantity,
                size: item.size ?? null,
            };
        });
        const data = await this.ordersService.create({
            userId,
            items,
            totalAmount,
        });
        await this.clear(userId);
        return data;
    }
    async clear(userId) {
        return await this.prisma.cart.update({
            where: {
                userId: userId,
            },
            data: {
                items: {
                    deleteMany: {},
                },
            },
        });
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService,
        orders_service_1.OrdersService])
], CartService);
//# sourceMappingURL=cart.service.js.map