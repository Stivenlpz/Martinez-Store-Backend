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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
const payments_service_1 = require("../payments/payments.service");
let OrdersService = class OrdersService {
    prisma;
    paymentsService;
    constructor(prisma, paymentsService) {
        this.prisma = prisma;
        this.paymentsService = paymentsService;
    }
    async create(createOrderDto) {
        return await this.prisma.$transaction(async (tx) => {
            const order = await tx.order.create({
                data: {
                    ...createOrderDto,
                    items: {
                        create: createOrderDto.items.map((item) => item),
                    },
                    history: [
                        {
                            date: new Date().toLocaleString(),
                            by: 'system',
                            from: null,
                            to: 'PENDING',
                            reason: 'Order created, waiting for payment',
                        },
                    ],
                },
                include: {
                    items: {
                        include: {
                            product: true,
                        },
                    },
                },
            });
            const items = order.items.map((item) => ({
                id: item.id,
                title: item.product.name,
                description: item.product.description || 'no description provided.',
                picture_url: item.product.images[0],
                quantity: item.quantity,
                unit_price: item.product.price,
            }));
            const data = await this.paymentsService.createPreference(items, order.id);
            await tx.order.update({
                where: {
                    id: order.id,
                },
                data: {
                    init_point: data.init_point,
                },
            });
            return {
                order,
                ...data,
            };
        });
    }
    async findAll() {
        return await this.prisma.order.findMany({
            include: {
                items: true,
                user: true,
            },
        });
    }
    async findOne(id) {
        const order = await this.prisma.order.findUnique({
            where: { id },
            include: {
                items: {
                    include: {
                        product: true,
                    },
                },
                user: true,
            },
        });
        if (!order) {
            throw new common_1.NotFoundException(`Order with ${id} not found.`);
        }
        return order;
    }
    async update(id, updateOrderDto) {
        return await this.prisma.order.update({
            where: { id },
            data: updateOrderDto,
            include: {
                items: true,
                user: true,
            },
        });
    }
    async remove(id) {
        return await this.prisma.order.delete({ where: { id } });
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService,
        payments_service_1.PaymentsService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map