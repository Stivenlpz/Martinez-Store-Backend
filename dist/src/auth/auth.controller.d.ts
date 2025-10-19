import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RequestResetDto } from './dto/request-reset.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { RegisterDto } from './dto/register.dto';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login({ email, password, captchaToken }: LoginDto, req: Request, res: Response): Promise<{
        message: string;
        accessToken: string;
    }>;
    register(registerDto: RegisterDto): Promise<{
        message: string;
    }>;
    activeUser(userId: string): Promise<{
        message: string;
        user: {
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
        };
    }>;
    dedactiveUser(userId: string): Promise<{
        message: string;
        user: {
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
        };
    }>;
    logout(res: Response): {
        message: string;
    };
    requestVerify({ token }: {
        token: string;
    }): {
        message: string;
    };
    requestPasswordReset({ email }: RequestResetDto): Promise<{
        message: string;
    }>;
    resetPassword(token: string, { newPassword }: ResetPasswordDto): Promise<{
        message: string;
    }>;
}
