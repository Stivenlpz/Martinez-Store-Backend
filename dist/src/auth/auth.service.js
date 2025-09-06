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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const nestjs_prisma_1 = require("nestjs-prisma");
const bcrypt = require("bcrypt");
const users_service_1 = require("../users/users.service");
const mail_service_1 = require("../mail/mail.service");
const audits_service_1 = require("../audits/audits.service");
let AuthService = class AuthService {
    prisma;
    jwtService;
    auditService;
    mailService;
    constructor(prisma, jwtService, auditService, mailService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.auditService = auditService;
        this.mailService = mailService;
    }
    async login(email, password, req) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) {
            await this.auditService.register({
                userId: 'unknown',
                ip: req.ip,
                userAgent: req.headers['user-agent'] || 'unknown',
                success: false,
            });
            throw new common_1.NotFoundException(`No user found with ${email} email.`);
        }
        if (!user.activated) {
            await this.auditService.register({
                userId: user.id,
                ip: req.ip,
                userAgent: req.headers['user-agent'] || 'unknown',
                success: false,
            });
            throw new common_1.UnauthorizedException('User is inactive.');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid)
            throw new common_1.UnauthorizedException('Invalid password.');
        await this.auditService.register({
            userId: user.id,
            ip: req.ip,
            userAgent: req.headers['user-agent'] || 'unknown',
            success: true,
        });
        await this.mailService.sendLoginEmail(user);
        return {
            message: 'Login successful',
            accessToken: this.jwtService.sign({
                userId: user.id,
            }),
        };
    }
    async register(registerDto) {
        const isEmailTaken = await this.prisma.user.findUnique({
            where: {
                email: registerDto.email,
            },
        });
        if (isEmailTaken)
            throw new common_1.ConflictException(`email ${registerDto.email} is already taken.`);
        registerDto.password = await bcrypt.hash(registerDto.password, users_service_1.roundsOfHashing);
        const user = await this.prisma.user.create({
            data: {
                ...registerDto,
                cart: {
                    create: {},
                },
            },
        });
        await this.mailService.sendWelcomeEmail(user);
        return {
            message: 'User registered successfully.',
        };
    }
    async activeUser(userId) {
        return await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                activated: true,
            },
            include: {
                orders: true,
                cart: true,
            },
        });
    }
    async deactiveUser(userId) {
        return await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                activated: false,
            },
            include: {
                orders: true,
                cart: true,
            },
        });
    }
    async requestPasswordReset(email) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user)
            throw new common_1.NotFoundException(`No user found with ${email} email.`);
        const token = this.jwtService.sign({
            userId: user.id,
        });
        await this.mailService.sendRequestPasswordResetEmail(user, token);
        return {
            message: 'Password reset email sent.',
        };
    }
    async resetPassword(token, newPassword) {
        try {
            const payload = this.jwtService.verify(token);
            const hashedPassword = await bcrypt.hash(newPassword, users_service_1.roundsOfHashing);
            const user = await this.prisma.user.update({
                where: { id: payload.userId },
                data: {
                    password: hashedPassword,
                },
            });
            await this.mailService.sendPasswordResetEmail(user);
            return {
                message: 'Password reset successfully.',
            };
        }
        catch (error) {
            console.error(error);
            throw new common_1.UnauthorizedException('Invalid or expired token.');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService,
        jwt_1.JwtService,
        audits_service_1.AuditsService,
        mail_service_1.MailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map