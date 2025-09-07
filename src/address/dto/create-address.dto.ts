import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '64f123abc1234567890def12',
    description: 'ID del usuario',
  })
  userId: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    example: 'Casa',
    description: 'Etiqueta de la dirección',
  })
  label?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Calle 123 #45-67' })
  street: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Bogotá' })
  city: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: 'Cundinamarca' })
  state?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: '110111' })
  postalCode?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Colombia' })
  country: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: '+573001234567' })
  phone?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  isDefault?: boolean = false;
}
