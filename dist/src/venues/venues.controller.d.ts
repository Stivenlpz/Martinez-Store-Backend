import { VenuesService } from './venues.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
export declare class VenuesController {
    private readonly venuesService;
    constructor(venuesService: VenuesService);
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
