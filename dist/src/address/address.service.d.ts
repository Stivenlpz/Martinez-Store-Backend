import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class AddressService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAddressDto: CreateAddressDto): Promise<{
        id: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date | null;
        city: string;
        country: string;
        userId: string;
        label: string | null;
        street: string;
        state: string | null;
        postalCode: string | null;
        isDefault: boolean;
    }>;
    findAll(): Promise<{
        id: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date | null;
        city: string;
        country: string;
        userId: string;
        label: string | null;
        street: string;
        state: string | null;
        postalCode: string | null;
        isDefault: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date | null;
        city: string;
        country: string;
        userId: string;
        label: string | null;
        street: string;
        state: string | null;
        postalCode: string | null;
        isDefault: boolean;
    } | null>;
    update(id: string, updateAddressDto: UpdateAddressDto): Promise<{
        id: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date | null;
        city: string;
        country: string;
        userId: string;
        label: string | null;
        street: string;
        state: string | null;
        postalCode: string | null;
        isDefault: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date | null;
        city: string;
        country: string;
        userId: string;
        label: string | null;
        street: string;
        state: string | null;
        postalCode: string | null;
        isDefault: boolean;
    }>;
}
