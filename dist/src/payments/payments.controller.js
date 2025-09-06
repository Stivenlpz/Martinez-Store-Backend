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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const payments_service_1 = require("./payments.service");
const payment_redirect_query_dto_1 = require("./dto/payment-redirect-query.dto");
let PaymentsController = class PaymentsController {
    paymentsService;
    constructor(paymentsService) {
        this.paymentsService = paymentsService;
    }
    success(query) {
        return { status: 'success', query };
    }
    failure(query) {
        return { status: 'failure', query };
    }
    pending(query) {
        return { status: 'pending', query };
    }
    async webhook(body) {
        await this.paymentsService.handleWebhook(body);
        return { status: 'ok' };
    }
};
exports.PaymentsController = PaymentsController;
__decorate([
    (0, common_1.Get)('success'),
    (0, swagger_1.ApiOperation)({ summary: 'Redirección exitosa de MercadoPago' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'El pago fue aprobado por MercadoPago.',
        schema: { example: { status: 'success', query: { payment_id: '1234' } } },
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_redirect_query_dto_1.PaymentRedirectQueryDto]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "success", null);
__decorate([
    (0, common_1.Get)('failure'),
    (0, swagger_1.ApiOperation)({ summary: 'Redirección fallida de MercadoPago' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'El pago fue rechazado por MercadoPago.',
        schema: { example: { status: 'failure', query: { payment_id: '5678' } } },
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_redirect_query_dto_1.PaymentRedirectQueryDto]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "failure", null);
__decorate([
    (0, common_1.Get)('pending'),
    (0, swagger_1.ApiOperation)({ summary: 'Redirección pendiente de MercadoPago' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'El pago está pendiente de confirmación.',
        schema: { example: { status: 'pending', query: { payment_id: '9012' } } },
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_redirect_query_dto_1.PaymentRedirectQueryDto]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "pending", null);
__decorate([
    (0, common_1.Post)('webhook'),
    (0, swagger_1.ApiOperation)({
        summary: 'Webhook de MercadoPago',
        description: 'MercadoPago envía las notificaciones de cambios en los pagos. Aquí debes actualizar tus órdenes.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'El webhook fue recibido correctamente.',
        schema: { example: { status: 'ok' } },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "webhook", null);
exports.PaymentsController = PaymentsController = __decorate([
    (0, swagger_1.ApiTags)('Payments'),
    (0, common_1.Controller)('payment'),
    __metadata("design:paramtypes", [payments_service_1.PaymentsService])
], PaymentsController);
//# sourceMappingURL=payments.controller.js.map