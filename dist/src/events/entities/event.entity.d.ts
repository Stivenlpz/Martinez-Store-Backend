import { Event } from '@prisma/client';
export declare class EventEntity implements Event {
    id: string;
    logo: string;
    poster: string;
    images: string[];
    name: string;
    description: string;
    category: 'CONCERT' | 'THEATER' | 'SPORT' | 'FESTIVAL' | 'OTHER';
    price: number;
    date: Date;
    venueId: string;
    vipCapacity: number;
    vipAvailable: number;
    regularCapacity: number;
    regularAvailable: number;
    regularReserved: number;
    regularSold: number;
    vipReserved: number;
    vipSold: number;
    vipPrice: number;
    regularPrice: number;
    createdAt: Date;
    updatedAt: Date;
}
