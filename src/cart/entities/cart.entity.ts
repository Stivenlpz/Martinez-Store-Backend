import { ApiProperty } from '@nestjs/swagger';
import { Cart } from '@prisma/client';

export class CartEntity implements Cart {
  @ApiProperty({ description: 'Identificador único del carrito' })
  id: string;

  @ApiProperty({
    description: 'ID del usuario (relación 1:1)',
    example: '64f123abc1234567890def12',
  })
  userId: string;

  @ApiProperty({ description: 'Fecha de creación' })
  createdAt: Date;

  @ApiProperty({
    description: 'Última actualización',
    required: false,
    nullable: true,
  })
  updatedAt: Date | null;
}
