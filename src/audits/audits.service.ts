import { Injectable } from '@nestjs/common';
import { CreateAuditDto } from './dto/create-audit.dto';
import { UpdateAuditDto } from './dto/update-audit.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AuditsService {
  constructor(private prisma: PrismaService) {}

  async register(createAuditDto: CreateAuditDto) {
    return await this.prisma.loginAudit.create({
      data: createAuditDto,
    });
  }

  async findAll() {
    return await this.prisma.loginAudit.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.loginAudit.findUnique({
      where: {
        id,
      },
    });
  }

  async findByUser(userId: string) {
    return await this.prisma.loginAudit.findMany({
      where: {
        userId,
      },
    });
  }

  async update(id: string, updateAuditDto: UpdateAuditDto) {
    return await this.prisma.loginAudit.update({
      where: {
        id,
      },
      data: updateAuditDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.loginAudit.delete({
      where: {
        id,
      },
    });
  }
}
