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
exports.ProductEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class ProductEntity {
    id;
    sku;
    name;
    slug;
    description;
    price;
    stock;
    categories;
    images;
    sizes;
    colors;
    featured;
    createdAt;
    updatedAt;
    meta;
    gender;
}
exports.ProductEntity = ProductEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Identificador único del producto' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'SKU del producto',
        required: false,
        nullable: true,
        example: 'TSHIRT-BLK-001',
    }),
    __metadata("design:type", Object)
], ProductEntity.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del producto',
        example: 'Camiseta Básica Negra',
    }),
    __metadata("design:type", String)
], ProductEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Slug único (URL friendly)',
        required: false,
        nullable: true,
        example: 'camiseta-basica-negra',
    }),
    __metadata("design:type", Object)
], ProductEntity.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción',
        required: false,
        nullable: true,
        example: 'Algodón 100% color negro',
    }),
    __metadata("design:type", Object)
], ProductEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Precio', example: 49.99 }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stock disponible', example: 100 }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Categorías',
        type: [String],
        example: ['pantalones', 'hombre'],
    }),
    __metadata("design:type", Array)
], ProductEntity.prototype, "categories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URLs de imágenes',
        type: [String],
        example: ['https://cdn.tienda.com/p1.png'],
    }),
    __metadata("design:type", Array)
], ProductEntity.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tallas disponibles',
        type: [String],
        example: ['S', 'M', 'L', 'XL'],
    }),
    __metadata("design:type", Array)
], ProductEntity.prototype, "sizes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Colores disponibles',
        type: [String],
        example: ['Negro', 'Blanco'],
    }),
    __metadata("design:type", Array)
], ProductEntity.prototype, "colors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Producto destacado', example: false }),
    __metadata("design:type", Boolean)
], ProductEntity.prototype, "featured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación' }),
    __metadata("design:type", Date)
], ProductEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Última actualización',
        required: false,
        nullable: true,
    }),
    __metadata("design:type", Object)
], ProductEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo flexible para información adicional',
        required: false,
        nullable: true,
        example: { material: 'algodón', tags: ['básico'] },
    }),
    __metadata("design:type", Object)
], ProductEntity.prototype, "meta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Genero del producto',
        required: true,
        example: 'MALE',
    }),
    __metadata("design:type", String)
], ProductEntity.prototype, "gender", void 0);
//# sourceMappingURL=product.entity.js.map