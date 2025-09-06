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
exports.UpdateOrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class UpdateOrderDto {
    status;
    paymentStatus;
    shippingStatus;
    shippingCarrier;
    shippingTrackingNumber;
    shippingNotes;
    canceledAt;
    deliveredAt;
    refundedAt;
}
exports.UpdateOrderDto = UpdateOrderDto;
__decorate([
    (0, class_validator_1.IsEnum)(client_1.OrderStatus),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        enum: client_1.OrderStatus,
        required: false,
        description: 'Estado de la orden',
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.PaymentStatus),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        enum: client_1.PaymentStatus,
        required: false,
        description: 'Estado del pago',
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "paymentStatus", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.ShippingStatus),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        enum: client_1.ShippingStatus,
        required: false,
        description: 'Estado del envío',
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "shippingStatus", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Transportista de envío',
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "shippingCarrier", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Número de seguimiento',
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "shippingTrackingNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Notas de envío',
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "shippingNotes", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Fecha de cancelación',
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "canceledAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Fecha de entrega',
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "deliveredAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Fecha de reembolso',
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "refundedAt", void 0);
//# sourceMappingURL=update-order.dto.js.map