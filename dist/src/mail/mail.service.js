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
var MailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
let MailService = MailService_1 = class MailService {
    mailerService;
    prisma;
    constructor(mailerService, prisma) {
        this.mailerService = mailerService;
        this.prisma = prisma;
    }
    logger = new common_1.Logger(MailService_1.name);
    async sendEmail(to, subject, content) {
        await this.mailerService.sendMail({
            from: process.env.MAIL_FROM,
            to,
            subject,
            text: content,
        });
        this.logger.log(`Email sent to ${to} with subject: ${subject}`);
    }
    async sendWelcomeEmail(user) {
        const activationLink = `${process.env.FRONTEND_URL}/activate/${user.id}`;
        await this.mailerService.sendMail({
            to: user.email,
            subject: 'Bienvenido a Market',
            template: 'welcome',
            context: {
                activationLink,
                fullnames: user.name,
            },
        });
    }
    async sendLoginEmail(user) {
        await this.mailerService.sendMail({
            to: user.email,
            subject: '⚡ Inicio de sesión detectado',
            template: 'login',
            context: {
                fullnames: user.name,
            },
        });
    }
    async sendRequestPasswordResetEmail(user, token) {
        await this.mailerService.sendMail({
            from: process.env.MAIL_FROM,
            to: user.email,
            subject: 'Password Reset Request',
            template: 'reset-password',
            context: {
                fullnames: user.name,
                resetLink: `${process.env.FRONTEND_URL}/auth/reset-password/${token}`,
            },
        });
        this.logger.log(`Reset password email sent to ${user.email} with subject: Password Request Reset`);
    }
    async sendPasswordResetEmail(user) {
        const subject = 'Password has been reset successfully.';
        await this.mailerService.sendMail({
            from: process.env.MAIL_FROM,
            to: user.email,
            subject,
            template: 'password-changed',
            context: {
                fullnames: user.name,
            },
        });
        this.logger.log(`Reset password email sent to ${user.email} with subject: ${subject}`);
    }
    async paymentAprovedEmail(orderId) {
        const order = await this.prisma.order.findUnique({
            where: { id: orderId },
            include: {
                user: true,
            },
        });
        if (!order)
            throw new common_1.NotFoundException(`Order with ID ${orderId} not found`);
        await this.mailerService.sendMail({
            from: process.env.MAIL_FROM,
            to: order.user.email,
            subject: `Order ${order.id} paid successfully`,
            template: 'order-paid',
            context: {
                orderId: order.id,
            },
        });
        this.logger.log(`payment approved email send`);
    }
    async paymentRejectedEmail(orderId) {
        const order = await this.prisma.order.findUnique({
            where: { id: orderId },
            include: {
                user: true,
            },
        });
        if (!order)
            throw new common_1.NotFoundException(`Order with ID ${orderId} not found`);
        await this.mailerService.sendMail({
            from: process.env.MAIL_FROM,
            to: order.user.email,
            subject: `Order ${order.id} was rejected.`,
            template: 'order-rejected',
            context: {
                orderId: order.id,
            },
        });
        this.logger.log(`payment rejected email send`);
    }
};
exports.MailService = MailService;
exports.MailService = MailService = MailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        nestjs_prisma_1.PrismaService])
], MailService);
//# sourceMappingURL=mail.service.js.map