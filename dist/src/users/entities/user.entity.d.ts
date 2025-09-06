import { Prisma, Role, User } from '@prisma/client';
export declare class UserEntity implements User {
    id: string;
    email: string;
    password: string;
    name: string | null;
    phone: string | null;
    activated: boolean;
    role: Role;
    city: string | null;
    country: string | null;
    cartId: string | null;
    createdAt: Date;
    updatedAt: Date | null;
    meta: Prisma.JsonValue | null;
}
