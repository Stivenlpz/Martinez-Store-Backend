import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Prisma, Role, User } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty({
    description: 'Identificador único del usuario',
    example: '64f123abc1234567890def12',
  })
  id: string;

  @ApiProperty({
    description: 'Correo electrónico único del usuario',
    example: 'juan@example.com',
  })
  email: string;

  @Exclude()
  password: string;

  @ApiProperty({
    description: 'Nombre completo del usuario',
    required: false,
    example: 'Juan Pérez',
    nullable: true,
  })
  name: string | null;

  @ApiProperty({
    description: 'Número de teléfono',
    required: false,
    example: '+573001234567',
    nullable: true,
  })
  phone: string | null;

  @ApiProperty({
    description: 'Indica si el usuario ya activó su cuenta',
    example: false,
  })
  activated: boolean;

  @ApiProperty({
    description: 'Rol del usuario',
    enum: Role,
    example: 'USER',
    default: 'USER',
  })
  role: Role;

  @ApiProperty({
    description: 'Ciudad',
    required: false,
    example: 'Bogotá',
    nullable: true,
  })
  city: string | null;

  @ApiProperty({
    description: 'País',
    required: false,
    example: 'Colombia',
    nullable: true,
  })
  country: string | null;

  @ApiProperty({
    description: 'ID del carrito asociado (1:1)',
    required: false,
    example: '64f123abc1234567890def77',
    nullable: true,
  })
  cartId: string | null;

  @ApiProperty({
    description: 'Fecha de creación',
    example: '2025-09-03T10:15:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Última actualización',
    required: false,
    nullable: true,
  })
  updatedAt: Date | null;

  @ApiProperty({
    description: 'Campo flexible para información adicional',
    required: false,
    nullable: true,
    example: { marketingConsent: true, theme: 'dark' },
  })
  meta: Prisma.JsonValue | null;
}
