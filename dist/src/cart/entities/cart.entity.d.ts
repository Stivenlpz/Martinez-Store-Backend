import { Cart } from '@prisma/client';
export declare class CartEntity implements Cart {
    id: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date | null;
}
