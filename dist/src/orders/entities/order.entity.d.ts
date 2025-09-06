import { Prisma, Order, OrderStatus, PaymentStatus, ShippingStatus } from '@prisma/client';
export declare class OrderEntity implements Order {
    id: string;
    userId: string;
    totalAmount: number;
    currency: string;
    status: OrderStatus;
    paymentStatus: PaymentStatus;
    shippingStatus: ShippingStatus;
    shippingAddressId: string | null;
    shippingCarrier: string | null;
    shippingTrackingNumber: string | null;
    shippingNotes: string | null;
    history: [];
    payment: Prisma.JsonValue | null;
    createdAt: Date;
    updatedAt: Date | null;
    canceledAt: Date | null;
    deliveredAt: Date | null;
    refundedAt: Date | null;
    meta: Prisma.JsonValue | null;
    init_point: string;
}
