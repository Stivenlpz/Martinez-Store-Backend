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
exports.OrderItemEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class OrderItemEntity {
    id;
    orderId;
    productId;
    name;
    sku;
    quantity;
    price;
    size;
    color;
    meta;
}
exports.OrderItemEntity = OrderItemEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Identificador único del item de orden' }),
    __metadata("design:type", String)
], OrderItemEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la orden' }),
    __metadata("design:type", String)
], OrderItemEntity.prototype, "orderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del producto' }),
    __metadata("design:type", String)
], OrderItemEntity.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del producto en el momento de la compra',
        example: 'Camiseta Básica Negra',
    }),
    __metadata("design:type", String)
], OrderItemEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'SKU del producto',
        required: false,
        nullable: true,
        example: 'TSHIRT-BLK-M',
    }),
    __metadata("design:type", Object)
], OrderItemEntity.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cantidad', example: 2 }),
    __metadata("design:type", Number)
], OrderItemEntity.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Precio unitario al momento de la compra',
        example: 49.99,
    }),
    __metadata("design:type", Number)
], OrderItemEntity.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Talla',
        required: false,
        nullable: true,
        example: 'M',
    }),
    __metadata("design:type", Object)
], OrderItemEntity.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Color',
        required: false,
        nullable: true,
        example: 'Negro',
    }),
    __metadata("design:type", Object)
], OrderItemEntity.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Información adicional',
        required: false,
        nullable: true,
        example: { promoCode: 'WELCOME10' },
    }),
    __metadata("design:type", Object)
], OrderItemEntity.prototype, "meta", void 0);
//# sourceMappingURL=order-item.entity.js.map