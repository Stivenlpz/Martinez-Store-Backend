import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'nestjs-prisma';
import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      roundsOfHashing,
    );
    createUserDto.password = hashedPassword;
    return await this.prisma.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return await this.prisma.user.findMany({
      include: {
        addresses: true,
        orders: true,
        cart: {
          include: {
            items: {
              include: {
                product: true,
              },
            },
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        addresses: true,
        orders: true,
        cart: {
          include: {
            items: {
              include: {
                product: true,
              },
            },
          },
        },
      },
    });
    if (!user) {
      throw new NotFoundException(`User with ${id} not found.`);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        roundsOfHashing,
      );
    }

    return await this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }

  async me(userId: string) {
    return await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        cart: {
          include: {
            items: {
              include: {
                product: true,
              },
            },
          },
        },
        orders: {
          include: {
            items: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
        addresses: true,
      },
    });
  }

  async getUserOrders(userId: string) {
    return await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        orders: {
          orderBy: {
            createdAt: 'desc',
          },
          include: {
            items: {
              include: {
                product: true,
              },
            },
          },
        },
      },
    });
  }
}
