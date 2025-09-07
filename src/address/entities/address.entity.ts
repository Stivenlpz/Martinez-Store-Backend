import { ApiProperty } from '@nestjs/swagger';
import { Address } from '@prisma/client';

export class AddressEntity implements Address {
  @ApiProperty({ description: 'Identificador único de la dirección' })
  id: string;

  @ApiProperty({ description: 'ID del usuario propietario' })
  userId: string;

  @ApiProperty({
    description: 'Etiqueta',
    required: false,
    nullable: true,
    example: 'Casa',
  })
  label: string | null;

  @ApiProperty({ description: 'Calle y número', example: 'Calle 123 #45-67' })
  street: string;

  @ApiProperty({ description: 'Ciudad', example: 'Bogotá' })
  city: string;

  @ApiProperty({
    description: 'Departamento/Estado',
    required: false,
    nullable: true,
    example: 'Cundinamarca',
  })
  state: string | null;

  @ApiProperty({
    description: 'Código postal',
    required: false,
    nullable: true,
    example: '110111',
  })
  postalCode: string | null;

  @ApiProperty({ description: 'País', example: 'Colombia' })
  country: string;

  @ApiProperty({
    description: 'Teléfono de contacto',
    required: false,
    nullable: true,
    example: '+573001234567',
  })
  phone: string | null;

  @ApiProperty({ description: 'Dirección por defecto', example: false })
  isDefault: boolean;

  @ApiProperty({ description: 'Fecha de creación' })
  createdAt: Date;

  @ApiProperty({
    description: 'Última actualización',
    required: false,
    nullable: true,
  })
  updatedAt: Date | null;
}
