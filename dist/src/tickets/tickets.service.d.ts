import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class TicketsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTicketDto: CreateTicketDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.TicketType;
        eventId: string;
        status: import("@prisma/client").$Enums.TicketStatus;
        price: number;
        orderId: string;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.TicketType;
        eventId: string;
        status: import("@prisma/client").$Enums.TicketStatus;
        price: number;
        orderId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.TicketType;
        eventId: string;
        status: import("@prisma/client").$Enums.TicketStatus;
        price: number;
        orderId: string;
    }>;
    update(id: string, updateTicketDto: UpdateTicketDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.TicketType;
        eventId: string;
        status: import("@prisma/client").$Enums.TicketStatus;
        price: number;
        orderId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.TicketType;
        eventId: string;
        status: import("@prisma/client").$Enums.TicketStatus;
        price: number;
        orderId: string;
    }>;
}
