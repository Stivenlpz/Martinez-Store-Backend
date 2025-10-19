import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'nestjs-prisma';
import { RegisterDto } from './dto/register.dto';
import { MailService } from 'src/mail/mail.service';
import { Request } from 'express';
import { AuditsService } from 'src/audits/audits.service';
export declare class AuthService {
    private prisma;
    private jwtService;
    private auditService;
    private mailService;
    constructor(prisma: PrismaService, jwtService: JwtService, auditService: AuditsService, mailService: MailService);
    login(email: string, password: string, captchaToken: string, req: Request): Promise<{
        message: string;
        accessToken: string;
    }>;
    register(registerDto: RegisterDto): Promise<{
        message: string;
    }>;
    activeUser(userId: string): Promise<{
        cart: {
            id: string;
            createdAt: Date;
            updatedAt: Date | null;
            userId: string;
        } | null;
        orders: {
            id: string;
            createdAt: Date;
            updatedAt: Date | null;
            meta: import("@prisma/client/runtime/library").JsonValue | null;
            userId: string;
            totalAmount: number;
            currency: string;
            status: import("@prisma/client").$Enums.OrderStatus;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
            shippingStatus: import("@prisma/client").$Enums.ShippingStatus;
            init_point: string;
            shippingAddressId: string | null;
            shippingCarrier: string | null;
            shippingTrackingNumber: string | null;
            shippingNotes: string | null;
            history: import("@prisma/client/runtime/library").JsonValue[];
            payment: import("@prisma/client/runtime/library").JsonValue | null;
            canceledAt: Date | null;
            deliveredAt: Date | null;
            refundedAt: Date | null;
        }[];
    } & {
        id: string;
        email: string;
        password: string;
        name: string | null;
        phone: string | null;
        activated: boolean;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date | null;
        city: string | null;
        country: string | null;
        isLocked: boolean;
        lockedUntil: Date | null;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    deactiveUser(userId: string): Promise<{
        cart: {
            id: string;
            createdAt: Date;
            updatedAt: Date | null;
            userId: string;
        } | null;
        orders: {
            id: string;
            createdAt: Date;
            updatedAt: Date | null;
            meta: import("@prisma/client/runtime/library").JsonValue | null;
            userId: string;
            totalAmount: number;
            currency: string;
            status: import("@prisma/client").$Enums.OrderStatus;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
            shippingStatus: import("@prisma/client").$Enums.ShippingStatus;
            init_point: string;
            shippingAddressId: string | null;
            shippingCarrier: string | null;
            shippingTrackingNumber: string | null;
            shippingNotes: string | null;
            history: import("@prisma/client/runtime/library").JsonValue[];
            payment: import("@prisma/client/runtime/library").JsonValue | null;
            canceledAt: Date | null;
            deliveredAt: Date | null;
            refundedAt: Date | null;
        }[];
    } & {
        id: string;
        email: string;
        password: string;
        name: string | null;
        phone: string | null;
        activated: boolean;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date | null;
        city: string | null;
        country: string | null;
        isLocked: boolean;
        lockedUntil: Date | null;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    verifyRequestReset(token: string): {
        message: string;
    };
    requestPasswordReset(email: string): Promise<{
        message: string;
    }>;
    resetPassword(token: string, newPassword: string): Promise<{
        message: string;
    }>;
    private verifyHcaptcha;
}
