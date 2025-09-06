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
exports.PaymentEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class PaymentEntity {
    id;
    orderId;
    amount;
    method;
    status;
    mpPreferenceId;
    mpPaymentId;
    mpStatusDetail;
    mpCurrency;
    mpTransactionAmount;
    mpNetReceivedAmount;
    createdAt;
    updatedAt;
}
exports.PaymentEntity = PaymentEntity;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PaymentEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PaymentEntity.prototype, "orderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaymentEntity.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['DEBIT_CARD', 'CREDIT_CARD', 'PAYPAL', 'TRANSFER', 'PSE', 'OTHER'],
    }),
    __metadata("design:type", String)
], PaymentEntity.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: [
            'PENDING',
            'APPROVED',
            'REJECTED',
            'EXPIRED',
            'CANCELLED',
            'REFUNDED',
        ],
    }),
    __metadata("design:type", String)
], PaymentEntity.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaymentEntity.prototype, "mpPreferenceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaymentEntity.prototype, "mpPaymentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PaymentEntity.prototype, "mpStatusDetail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PaymentEntity.prototype, "mpCurrency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaymentEntity.prototype, "mpTransactionAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaymentEntity.prototype, "mpNetReceivedAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], PaymentEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], PaymentEntity.prototype, "updatedAt", void 0);
//# sourceMappingURL=payment.entity.js.map