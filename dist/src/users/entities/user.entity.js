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
exports.UserEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const client_1 = require("@prisma/client");
class UserEntity {
    id;
    email;
    password;
    name;
    phone;
    activated;
    role;
    city;
    country;
    cartId;
    createdAt;
    updatedAt;
    meta;
}
exports.UserEntity = UserEntity;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identificador único del usuario',
        example: '64f123abc1234567890def12',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Correo electrónico único del usuario',
        example: 'juan@example.com',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre completo del usuario',
        required: false,
        example: 'Juan Pérez',
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de teléfono',
        required: false,
        example: '+573001234567',
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserEntity.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indica si el usuario ya activó su cuenta',
        example: false,
    }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "activated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rol del usuario',
        enum: client_1.Role,
        example: 'USER',
        default: 'USER',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ciudad',
        required: false,
        example: 'Bogotá',
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserEntity.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'País',
        required: false,
        example: 'Colombia',
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserEntity.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del carrito asociado (1:1)',
        required: false,
        example: '64f123abc1234567890def77',
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserEntity.prototype, "cartId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de creación',
        example: '2025-09-03T10:15:00.000Z',
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Última actualización',
        required: false,
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo flexible para información adicional',
        required: false,
        nullable: true,
        example: { marketingConsent: true, theme: 'dark' },
    }),
    __metadata("design:type", Object)
], UserEntity.prototype, "meta", void 0);
//# sourceMappingURL=user.entity.js.map