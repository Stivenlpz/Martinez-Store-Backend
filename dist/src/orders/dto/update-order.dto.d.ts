import { OrderStatus, PaymentStatus, ShippingStatus } from '@prisma/client';
export declare class UpdateOrderDto {
    status?: OrderStatus;
    paymentStatus?: PaymentStatus;
    shippingStatus?: ShippingStatus;
    shippingCarrier?: string;
    shippingTrackingNumber?: string;
    shippingNotes?: string;
    canceledAt?: string;
    deliveredAt?: string;
    refundedAt?: string;
}
