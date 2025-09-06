import { CreateAuditDto } from './dto/create-audit.dto';
import { UpdateAuditDto } from './dto/update-audit.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class AuditsService {
    private prisma;
    constructor(prisma: PrismaService);
    register(createAuditDto: CreateAuditDto): Promise<{
        id: string;
        createdAt: Date;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
        userId: string;
        ip: string | null;
        userAgent: string | null;
        success: boolean;
    }>;
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
    findByUser(userId: string): Promise<{
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
