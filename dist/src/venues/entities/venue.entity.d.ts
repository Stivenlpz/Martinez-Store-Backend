import { Venue } from '@prisma/client';
export declare class VenueEntity implements Venue {
    id: string;
    name: string;
    address: string;
    city: string;
    capacity: number;
    createdAt: Date;
    updatedAt: Date;
}
