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
exports.CartItemEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class CartItemEntity {
    id;
    cartId;
    productId;
    quantity;
    size;
    color;
    priceAtAdd;
    meta;
}
exports.CartItemEntity = CartItemEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Identificador único del item de carrito' }),
    __metadata("design:type", String)
], CartItemEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del carrito',
        example: '64f123abc1234567890def34',
    }),
    __metadata("design:type", String)
], CartItemEntity.prototype, "cartId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del producto',
        example: '64f123abc1234567890def56',
    }),
    __metadata("design:type", String)
], CartItemEntity.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cantidad', example: 2 }),
    __metadata("design:type", Number)
], CartItemEntity.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Talla seleccionada',
        required: false,
        nullable: true,
        example: 'M',
    }),
    __metadata("design:type", Object)
], CartItemEntity.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Color seleccionado',
        required: false,
        nullable: true,
        example: 'Negro',
    }),
    __metadata("design:type", Object)
], CartItemEntity.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Precio al momento de agregar al carrito',
        example: 49.99,
    }),
    __metadata("design:type", Number)
], CartItemEntity.prototype, "priceAtAdd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Información adicional',
        required: false,
        nullable: true,
        example: { promoApplied: 'WELCOME10' },
    }),
    __metadata("design:type", Object)
], CartItemEntity.prototype, "meta", void 0);
//# sourceMappingURL=cart-item.entity.js.map