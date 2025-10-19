import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'nestjs-prisma';
export declare const roundsOfHashing = 10;
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
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
    findAll(): Promise<({
        addresses: {
            id: string;
            phone: string | null;
            createdAt: Date;
            updatedAt: Date | null;
            city: string;
            country: string;
            userId: string;
            label: string | null;
            street: string;
            state: string | null;
            postalCode: string | null;
            isDefault: boolean;
        }[];
        cart: ({
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
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date | null;
            userId: string;
        }) | null;
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
    })[]>;
    findOne(id: string): Promise<{
        addresses: {
            id: string;
            phone: string | null;
            createdAt: Date;
            updatedAt: Date | null;
            city: string;
            country: string;
            userId: string;
            label: string | null;
            street: string;
            state: string | null;
            postalCode: string | null;
            isDefault: boolean;
        }[];
        cart: ({
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
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date | null;
            userId: string;
        }) | null;
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
        loginAudits: {
            id: string;
            createdAt: Date;
            meta: import("@prisma/client/runtime/library").JsonValue | null;
            userId: string;
            ip: string | null;
            userAgent: string | null;
            success: boolean;
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
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
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
    remove(id: string): Promise<{
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
    me(userId: string): Promise<({
        addresses: {
            id: string;
            phone: string | null;
            createdAt: Date;
            updatedAt: Date | null;
            city: string;
            country: string;
            userId: string;
            label: string | null;
            street: string;
            state: string | null;
            postalCode: string | null;
            isDefault: boolean;
        }[];
        cart: ({
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
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date | null;
            userId: string;
        }) | null;
        orders: ({
            items: {
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
            }[];
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
        })[];
        loginAudits: {
            id: string;
            createdAt: Date;
            meta: import("@prisma/client/runtime/library").JsonValue | null;
            userId: string;
            ip: string | null;
            userAgent: string | null;
            success: boolean;
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
    }) | null>;
    getUserOrders(userId: string): Promise<{
        orders: ({
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
        })[];
    } | null>;
}
