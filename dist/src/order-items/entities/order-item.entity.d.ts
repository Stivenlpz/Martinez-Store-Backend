import { Prisma, OrderItem } from '@prisma/client';
export declare class OrderItemEntity implements OrderItem {
    id: string;
    orderId: string;
    productId: string;
    name: string;
    sku: string | null;
    quantity: number;
    price: number;
    size: string | null;
    color: string | null;
    meta: Prisma.JsonValue | null;
}
