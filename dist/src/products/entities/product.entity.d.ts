import { Prisma, Product } from '@prisma/client';
export declare class ProductEntity implements Product {
    id: string;
    sku: string | null;
    name: string;
    slug: string | null;
    description: string | null;
    price: number;
    stock: number;
    categories: string[];
    images: string[];
    sizes: string[];
    colors: string[];
    featured: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    meta: Prisma.JsonValue | null;
    gender: 'MALE' | 'FEMALE' | 'UNISEX' | 'KIDS';
}
