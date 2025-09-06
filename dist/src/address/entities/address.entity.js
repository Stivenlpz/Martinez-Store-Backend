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
exports.AddressEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class AddressEntity {
    id;
    userId;
    label;
    street;
    city;
    state;
    postalCode;
    country;
    phone;
    isDefault;
    createdAt;
    updatedAt;
}
exports.AddressEntity = AddressEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Identificador único de la dirección' }),
    __metadata("design:type", String)
], AddressEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del usuario propietario' }),
    __metadata("design:type", String)
], AddressEntity.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Etiqueta',
        required: false,
        nullable: true,
        example: 'Casa',
    }),
    __metadata("design:type", Object)
], AddressEntity.prototype, "label", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Calle y número', example: 'Calle 123 #45-67' }),
    __metadata("design:type", String)
], AddressEntity.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ciudad', example: 'Bogotá' }),
    __metadata("design:type", String)
], AddressEntity.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Departamento/Estado',
        required: false,
        nullable: true,
        example: 'Cundinamarca',
    }),
    __metadata("design:type", Object)
], AddressEntity.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Código postal',
        required: false,
        nullable: true,
        example: '110111',
    }),
    __metadata("design:type", Object)
], AddressEntity.prototype, "postalCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'País', example: 'Colombia' }),
    __metadata("design:type", String)
], AddressEntity.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Teléfono de contacto',
        required: false,
        nullable: true,
        example: '+573001234567',
    }),
    __metadata("design:type", Object)
], AddressEntity.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Dirección por defecto', example: false }),
    __metadata("design:type", Boolean)
], AddressEntity.prototype, "isDefault", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación' }),
    __metadata("design:type", Date)
], AddressEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Última actualización',
        required: false,
        nullable: true,
    }),
    __metadata("design:type", Object)
], AddressEntity.prototype, "updatedAt", void 0);
//# sourceMappingURL=address.entity.js.map