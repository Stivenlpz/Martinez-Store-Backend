import { Ticket } from '@prisma/client';
export declare class TicketEntity implements Ticket {
    id: string;
    price: number;
    seat: string;
    eventId: string;
    orderId: string;
    type: 'REGULAR' | 'VIP';
    status: 'AVAILABLE' | 'SOLD' | 'RESERVED';
    createdAt: Date;
    updatedAt: Date;
}
