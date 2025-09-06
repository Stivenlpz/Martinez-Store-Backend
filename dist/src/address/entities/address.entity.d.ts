import { Address } from '@prisma/client';
export declare class AddressEntity implements Address {
    id: string;
    userId: string;
    label: string | null;
    street: string;
    city: string;
    state: string | null;
    postalCode: string | null;
    country: string;
    phone: string | null;
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date | null;
}
