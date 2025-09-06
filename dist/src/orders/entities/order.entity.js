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
exports.OrderEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class OrderEntity {
    id;
    userId;
    totalAmount;
    currency;
    status;
    paymentStatus;
    shippingStatus;
    shippingAddressId;
    shippingCarrier;
    shippingTrackingNumber;
    shippingNotes;
    history;
    payment;
    createdAt;
    updatedAt;
    canceledAt;
    deliveredAt;
    refundedAt;
    meta;
    init_point;
}
exports.OrderEntity = OrderEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Identificador único de la orden' }),
    __metadata("design:type", String)
], OrderEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del usuario que realizó la compra' }),
    __metadata("design:type", String)
], OrderEntity.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monto total de la orden', example: 99.98 }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Moneda', example: 'USD' }),
    __metadata("design:type", String)
], OrderEntity.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado de la orden',
        enum: client_1.OrderStatus,
        example: 'PENDING',
    }),
    __metadata("design:type", String)
], OrderEntity.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado del pago',
        enum: client_1.PaymentStatus,
        example: 'UNPAID',
    }),
    __metadata("design:type", String)
], OrderEntity.prototype, "paymentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado del envío',
        enum: client_1.ShippingStatus,
        example: 'NOT_SHIPPED',
    }),
    __metadata("design:type", String)
], OrderEntity.prototype, "shippingStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID de la dirección de envío',
        required: false,
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrderEntity.prototype, "shippingAddressId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Transportadora',
        required: false,
        nullable: true,
        example: 'DHL',
    }),
    __metadata("design:type", Object)
], OrderEntity.prototype, "shippingCarrier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de guía',
        required: false,
        nullable: true,
        example: '1234567890',
    }),
    __metadata("design:type", Object)
], OrderEntity.prototype, "shippingTrackingNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Notas del envío',
        required: false,
        nullable: true,
        example: 'Entregar después de 6pm',
    }),
    __metadata("design:type", Object)
], OrderEntity.prototype, "shippingNotes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Historial de cambios de la orden',
        required: false,
        nullable: true,
        isArray: true,
        example: [
            { at: '2025-09-01T10:00:00Z', from: 'PENDING', to: 'PAID', by: 'system' },
        ],
    }),
    __metadata("design:type", Array)
], OrderEntity.prototype, "history", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payload de la pasarela de pago (Mercado Pago)',
        required: false,
        nullable: true,
        example: { mp_payment_id: '123', status: 'approved' },
    }),
    __metadata("design:type", Object)
], OrderEntity.prototype, "payment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación' }),
    __metadata("design:type", Date)
], OrderEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Última actualización',
        required: false,
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrderEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de cancelación',
        required: false,
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrderEntity.prototype, "canceledAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de entrega',
        required: false,
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrderEntity.prototype, "deliveredAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de reembolso',
        required: false,
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrderEntity.prototype, "refundedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Información adicional de la orden',
        required: false,
        nullable: true,
        example: { giftMessage: '¡Feliz cumple!' },
    }),
    __metadata("design:type", Object)
], OrderEntity.prototype, "meta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'link al portal de pago de mercadopago.' }),
    __metadata("design:type", String)
], OrderEntity.prototype, "init_point", void 0);
//# sourceMappingURL=order.entity.js.map