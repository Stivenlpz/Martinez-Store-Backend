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
exports.OrdersHelperService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
let OrdersHelperService = class OrdersHelperService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async markAsPaid(orderId, payment) {
        return await this.prisma.$transaction(async (tx) => {
            const order = await tx.order.findUnique({
                where: { id: orderId },
                include: { items: true },
            });
            if (!order)
                throw new common_1.NotFoundException(`Order ${orderId} not found`);
            for (const item of order.items) {
                await tx.product.update({
                    where: { id: item.productId },
                    data: { stock: { decrement: item.quantity } },
                });
            }
            return await tx.order.update({
                where: { id: orderId },
                data: {
                    status: 'PAID',
                    paymentStatus: 'COMPLETED',
                    history: {
                        push: {
                            date: new Date(),
                            from: order.status,
                            by: 'system',
                            to: 'PAID',
                            reason: 'Payment approved by Mercadopago webhook.',
                            meta: {
                                paymentId: payment.id,
                                statusDetail: payment.status_detail,
                            },
                        },
                    },
                },
                include: { items: true },
            });
        });
    }
    async markAsRejected(orderId, payment) {
        return await this.prisma.order.update({
            where: { id: orderId },
            data: {
                status: 'PENDING',
                paymentStatus: 'FAILED',
                history: {
                    push: {
                        date: new Date(),
                        from: 'PENDING',
                        to: 'FAILED',
                        reason: 'Payment rejected',
                        meta: {
                            paymentId: payment.id,
                            statusDetail: payment.status_detail,
                        },
                    },
                },
            },
            include: { items: true },
        });
    }
    async markAsCancelled(orderId, payment) {
        return await this.prisma.$transaction(async (tx) => {
            const order = await tx.order.findUnique({
                where: { id: orderId },
                include: { items: true },
            });
            if (!order)
                throw new common_1.NotFoundException(`Order ${orderId} not found`);
            if (order.status === 'PAID') {
                for (const item of order.items) {
                    await tx.product.update({
                        where: { id: item.productId },
                        data: { stock: { increment: item.quantity } },
                    });
                }
            }
            return await tx.order.update({
                where: { id: orderId },
                data: {
                    status: 'CANCELLED',
                    paymentStatus: 'CANCELLED',
                    canceledAt: new Date(),
                    history: {
                        push: {
                            date: new Date(),
                            from: order.status,
                            to: 'CANCELLED',
                            reason: 'Order cancelled',
                            meta: {
                                paymentId: payment.id,
                                statusDetail: payment.status_detail,
                            },
                        },
                    },
                },
                include: { items: true },
            });
        });
    }
    markAsRefund(orderId) {
        console.log('refunded', orderId);
    }
};
exports.OrdersHelperService = OrdersHelperService;
exports.OrdersHelperService = OrdersHelperService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], OrdersHelperService);
//# sourceMappingURL=order-helper.service.js.map