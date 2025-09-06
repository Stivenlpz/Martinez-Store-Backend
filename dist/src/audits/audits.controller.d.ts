import { AuditsService } from './audits.service';
import { UpdateAuditDto } from './dto/update-audit.dto';
export declare class AuditsController {
    private readonly auditsService;
    constructor(auditsService: AuditsService);
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
        userId: string;
        ip: string | null;
        userAgent: string | null;
        success: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
        userId: string;
        ip: string | null;
        userAgent: string | null;
        success: boolean;
    } | null>;
    findByUser(id: string): Promise<{
        id: string;
        createdAt: Date;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
        userId: string;
        ip: string | null;
        userAgent: string | null;
        success: boolean;
    }[]>;
    update(id: string, updateAuditDto: UpdateAuditDto): Promise<{
        id: string;
        createdAt: Date;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
        userId: string;
        ip: string | null;
        userAgent: string | null;
        success: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
        userId: string;
        ip: string | null;
        userAgent: string | null;
        success: boolean;
    }>;
}
