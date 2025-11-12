import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCommentDto: CreateCommentDto) {
    const comment = await this.prisma.comment.create({
      data: createCommentDto,
    });
    return comment;
  }

  async findAll() {
    return await this.prisma.comment.findMany({
      include: { user: true },
    });
  }

  async findOne(id: string) {
    return await this.prisma.comment.findUnique({
      where: { id },
      include: { user: true },
    });
  }

  async findProductComments(id: string) {
    return await this.prisma.comment.findMany({
      where: {
        productId: id,
      },
      include: {
        user: true,
      },
    });
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    return await this.prisma.comment.update({
      where: { id },
      data: updateCommentDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.comment.delete({ where: { id } });
  }
}
