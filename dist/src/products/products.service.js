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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
const orders_service_1 = require("../orders/orders.service");
let ProductsService = class ProductsService {
    prisma;
    ordersService;
    constructor(prisma, ordersService) {
        this.prisma = prisma;
        this.ordersService = ordersService;
    }
    async create(createProductDto) {
        return await this.prisma.product.create({
            data: createProductDto,
        });
    }
    async findAll() {
        return await this.prisma.product.findMany();
    }
    async findOne(id) {
        return await this.prisma.product.findUnique({
            where: { id },
        });
    }
    async update(id, updateProductDto) {
        return await this.prisma.product.update({
            where: {
                id,
            },
            data: updateProductDto,
        });
    }
    async remove(id) {
        return await this.prisma.product.delete({ where: { id } });
    }
    async buy(userId, buyProductDto) {
        const product = await this.prisma.product.findUnique({
            where: {
                id: buyProductDto.productId,
            },
        });
        if (!product)
            throw new common_1.NotFoundException('Product not found.');
        if (product.stock < buyProductDto.quantity)
            throw new common_1.BadRequestException('Not enough stock.');
        return await this.ordersService.create({
            userId,
            items: [
                {
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: buyProductDto.quantity,
                    size: buyProductDto.size,
                },
            ],
            totalAmount: product.price * buyProductDto.quantity,
        });
    }
    async incrementStock(productId, quantity) {
        return await this.prisma.product.update({
            where: {
                id: productId,
            },
            data: {
                stock: {
                    increment: quantity,
                },
            },
        });
    }
    async decrementStock(productId, quantity) {
        return await this.prisma.product.update({
            where: {
                id: productId,
            },
            data: {
                stock: {
                    decrement: quantity,
                },
            },
        });
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService,
        orders_service_1.OrdersService])
], ProductsService);
//# sourceMappingURL=products.service.js.map