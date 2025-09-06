import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
export declare class TicketsController {
    private readonly ticketsService;
    constructor(ticketsService: TicketsService);
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
