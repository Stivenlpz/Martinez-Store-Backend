import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class VenuesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createVenueDto: CreateVenueDto): Promise<{
        name: string;
        id: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        capacity: number;
    }>;
    findAll(): Promise<{
        name: string;
        id: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        capacity: number;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        id: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        capacity: number;
    }>;
    update(id: string, updateVenueDto: UpdateVenueDto): Promise<{
        name: string;
        id: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        capacity: number;
    }>;
    remove(id: string): Promise<{
        name: string;
        id: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        capacity: number;
    }>;
}
