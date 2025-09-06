import { PrismaService } from 'nestjs-prisma';
import { PaymentResponse } from 'mercadopago/dist/clients/payment/commonTypes';
export declare class OrdersHelperService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    markAsPaid(orderId: string, payment: PaymentResponse): Promise<{
        items: {
            name: string;
            id: string;
            meta: import("@prisma/client/runtime/library").JsonValue | null;
            orderId: string;
            productId: string;
            sku: string | null;
            quantity: number;
            price: number;
            size: string | null;
            color: string | null;
        }[];
    } & {
        id: string;
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
        createdAt: Date;
        updatedAt: Date | null;
        canceledAt: Date | null;
        deliveredAt: Date | null;
        refundedAt: Date | null;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    markAsRejected(orderId: string, payment: PaymentResponse): Promise<{
        items: {
            name: string;
            id: string;
            meta: import("@prisma/client/runtime/library").JsonValue | null;
            orderId: string;
            productId: string;
            sku: string | null;
            quantity: number;
            price: number;
            size: string | null;
            color: string | null;
        }[];
    } & {
        id: string;
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
        createdAt: Date;
        updatedAt: Date | null;
        canceledAt: Date | null;
        deliveredAt: Date | null;
        refundedAt: Date | null;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    markAsCancelled(orderId: string, payment: PaymentResponse): Promise<{
        items: {
            name: string;
            id: string;
            meta: import("@prisma/client/runtime/library").JsonValue | null;
            orderId: string;
            productId: string;
            sku: string | null;
            quantity: number;
            price: number;
            size: string | null;
            color: string | null;
        }[];
    } & {
        id: string;
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
        createdAt: Date;
        updatedAt: Date | null;
        canceledAt: Date | null;
        deliveredAt: Date | null;
        refundedAt: Date | null;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    markAsRefund(orderId: string): void;
}
