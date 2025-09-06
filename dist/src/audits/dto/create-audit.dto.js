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
exports.CreateAuditDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateAuditDto {
    userId;
    ip;
    userAgent;
    success;
}
exports.CreateAuditDto = CreateAuditDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del usuario asociado al evento de auditoría',
        example: '64b7c8f1a4d2b3c9e12d3456',
    }),
    __metadata("design:type", String)
], CreateAuditDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Dirección IP desde donde se realizó la acción',
        example: '192.168.0.101',
        required: false,
    }),
    __metadata("design:type", String)
], CreateAuditDto.prototype, "ip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User-Agent del cliente que realizó la petición (navegador, app, etc.)',
        example: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        required: false,
    }),
    __metadata("design:type", String)
], CreateAuditDto.prototype, "userAgent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indica si la acción fue exitosa o fallida',
        example: true,
        default: true,
        required: false,
    }),
    __metadata("design:type", Boolean)
], CreateAuditDto.prototype, "success", void 0);
//# sourceMappingURL=create-audit.dto.js.map