import { Prisma, CartItem } from '@prisma/client';
export declare class CartItemEntity implements CartItem {
    id: string;
    cartId: string;
    productId: string;
    quantity: number;
    size: string | null;
    color: string | null;
    priceAtAdd: number;
    meta: Prisma.JsonValue | null;
}
