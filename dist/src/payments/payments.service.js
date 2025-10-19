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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const mercadopago_1 = require("mercadopago");
const nestjs_prisma_1 = require("nestjs-prisma");
const mail_service_1 = require("../mail/mail.service");
const order_helper_service_1 = require("../orders-helper/order-helper.service");
let PaymentsService = class PaymentsService {
    prisma;
    mailService;
    ordersHelperService;
    client;
    constructor(prisma, mailService, ordersHelperService) {
        this.prisma = prisma;
        this.mailService = mailService;
        this.ordersHelperService = ordersHelperService;
        this.client = new mercadopago_1.MercadoPagoConfig({
            accessToken: process.env.MP_ACCESS_TOKEN,
        });
    }
    async createPreference(items, externalReference) {
        const data = {
            body: {
                items,
                external_reference: externalReference,
                back_urls: {
                    success: `${process.env.FRONTEND_URL}/payment/success`,
                    failure: `${process.env.FRONTEND_URL}/payment/failure`,
                    pending: `${process.env.FRONTEND_URL}/payment/pending`,
                },
                auto_return: 'approved',
                notification_url: `${process.env.BACKEND_URL}/payment/webhook`,
            },
        };
        const preference = new mercadopago_1.Preference(this.client);
        const response = await preference.create(data);
        return {
            init_point: response.init_point,
            message: 'Preference created successfully',
        };
    }
    async handleWebhook(response) {
        if (response.type !== 'payment')
            return;
        console.log('entro al pago', response);
        const payment = await new mercadopago_1.Payment(this.client).get({
            id: response.data.id,
        });
        console.log('pago', payment);
        if (payment.status === 'approved') {
            console.log('aprobado !!!!');
            const order = await this.ordersHelperService.markAsPaid(payment.external_reference, payment);
            await this.mailService.paymentAprovedEmail(order.id);
        }
        else if (payment.status === 'rejected') {
            const order = await this.ordersHelperService.markAsRejected(payment.external_reference, payment);
            await this.mailService.paymentRejectedEmail(order.id);
        }
        else if (payment.status === 'refunded') {
            this.ordersHelperService.markAsRefund(payment.external_reference);
        }
        else {
            console.log('Pago en estado:', response.status);
        }
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService,
        mail_service_1.MailService,
        order_helper_service_1.OrdersHelperService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map