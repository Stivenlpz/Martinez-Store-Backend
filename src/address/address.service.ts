import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async create(createAddressDto: CreateAddressDto) {
    return await this.prisma.address.create({
      data: createAddressDto,
    });
  }

  async findAll() {
    return await this.prisma.address.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.address.findUnique({
      where: {
        id,
      },
    });
  }

  async userAddress(id: string) {
    return await this.prisma.address.findMany({
      where: {
        userId: id,
      },
    });
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    return await this.prisma.address.update({
      where: {
        id,
      },
      data: updateAddressDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.address.delete({ where: { id } });
  }
}
