import { Prisma, LoginAudit } from '@prisma/client';
export declare class LoginAuditEntity implements LoginAudit {
    id: string;
    userId: string;
    ip: string | null;
    userAgent: string | null;
    success: boolean;
    createdAt: Date;
    meta: Prisma.JsonValue | null;
}
