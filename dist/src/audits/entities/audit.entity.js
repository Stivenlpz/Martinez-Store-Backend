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
exports.LoginAuditEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class LoginAuditEntity {
    id;
    userId;
    ip;
    userAgent;
    success;
    createdAt;
    meta;
}
exports.LoginAuditEntity = LoginAuditEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Identificador único del registro de login' }),
    __metadata("design:type", String)
], LoginAuditEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del usuario' }),
    __metadata("design:type", String)
], LoginAuditEntity.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'IP del cliente',
        required: false,
        nullable: true,
        example: '190.85.23.10',
    }),
    __metadata("design:type", Object)
], LoginAuditEntity.prototype, "ip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User-Agent del cliente',
        required: false,
        nullable: true,
        example: 'Mozilla/5.0 ...',
    }),
    __metadata("design:type", Object)
], LoginAuditEntity.prototype, "userAgent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Éxito del intento de login', example: true }),
    __metadata("design:type", Boolean)
], LoginAuditEntity.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha y hora del evento',
        example: '2025-09-03T10:15:00.000Z',
    }),
    __metadata("design:type", Date)
], LoginAuditEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Información adicional',
        required: false,
        nullable: true,
        example: { method: 'password' },
    }),
    __metadata("design:type", Object)
], LoginAuditEntity.prototype, "meta", void 0);
//# sourceMappingURL=audit.entity.js.map