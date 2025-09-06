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
exports.CreatePaymentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePaymentDto {
    orderId;
    ammount;
    method;
}
exports.CreatePaymentDto = CreatePaymentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "orderId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePaymentDto.prototype, "ammount", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['DEBIT_CARD', 'CREDIT_CARD', 'PAYPAL', 'TRANSFER', 'PSE', 'OTHER'], {
        message: "Method must be 'CREDIT_CARD', 'DEDBIT_CARD', 'TRANSFER' or 'OTHER'.",
    }),
    (0, swagger_1.ApiProperty)({
        enum: ['DEBIT_CARD', 'CREDIT_CARD', 'PAYPAL', 'TRANSFER', 'PSE', 'OTHER'],
    }),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "method", void 0);
//# sourceMappingURL=create-payment.dto.js.map