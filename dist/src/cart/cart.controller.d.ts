import { CartService } from './cart.service';
import { AuthRequest } from 'src/common/types/auth-request';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    checkout(req: AuthRequest): Promise<{
        init_point: string | undefined;
        message: string;
        order: {
            items: ({
                product: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date | null;
                    meta: import("@prisma/client/runtime/library").JsonValue | null;
                    sku: string | null;
                    slug: string | null;
                    description: string | null;
                    price: number;
                    stock: number;
                    categories: string[];
                    images: string[];
                    sizes: string[];
                    colors: string[];
                    featured: boolean;
                    gender: import("@prisma/client").$Enums.Gender;
                };
            } & {
                id: string;
                name: string;
                meta: import("@prisma/client/runtime/library").JsonValue | null;
                productId: string;
                quantity: number;
                size: string | null;
                color: string | null;
                sku: string | null;
                price: number;
                orderId: string;
            })[];
        } & {
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
        };
    }>;
    remove(req: AuthRequest): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date | null;
        userId: string;
    }>;
    findAll(): Promise<({
        items: ({
            product: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date | null;
                meta: import("@prisma/client/runtime/library").JsonValue | null;
                sku: string | null;
                slug: string | null;
                description: string | null;
                price: number;
                stock: number;
                categories: string[];
                images: string[];
                sizes: string[];
                colors: string[];
                featured: boolean;
                gender: import("@prisma/client").$Enums.Gender;
            };
        } & {
            id: string;
            meta: import("@prisma/client/runtime/library").JsonValue | null;
            cartId: string;
            productId: string;
            quantity: number;
            size: string | null;
            color: string | null;
            priceAtAdd: number;
        })[];
        user: {
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date | null;
        userId: string;
    })[]>;
    findOne(id: string): Promise<({
        items: ({
            product: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date | null;
                meta: import("@prisma/client/runtime/library").JsonValue | null;
                sku: string | null;
                slug: string | null;
                description: string | null;
                price: number;
                stock: number;
                categories: string[];
                images: string[];
                sizes: string[];
                colors: string[];
                featured: boolean;
                gender: import("@prisma/client").$Enums.Gender;
            };
        } & {
            id: string;
            meta: import("@prisma/client/runtime/library").JsonValue | null;
            cartId: string;
            productId: string;
            quantity: number;
            size: string | null;
            color: string | null;
            priceAtAdd: number;
        })[];
        user: {
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date | null;
        userId: string;
    }) | null>;
}
