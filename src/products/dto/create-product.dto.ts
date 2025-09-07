import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Camiseta Básica Negra' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'camiseta-basica-negra',
    description: 'Slug único para usar en URLs amigables',
  })
  slug: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    example: 'TSHIRT-BLK-001',
    description: 'SKU único del producto',
  })
  sku?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    example: 'Camiseta básica de algodón 100% color negro',
  })
  description?: string;

  @IsNumber()
  @Min(0)
  @ApiProperty({ example: 49.99, description: 'Precio del producto' })
  price: number;

  @IsNumber()
  @Min(0)
  @ApiProperty({ example: 100, description: 'Stock disponible' })
  stock: number;

  @IsArray()
  @IsOptional()
  @ApiProperty({
    required: false,
    example: ['ropa', 'camisetas', 'hombre'],
    description: 'Categorías en las que aparece el producto',
  })
  categories?: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty({
    required: false,
    example: ['https://cdn.tienda.com/products/camiseta1.png'],
    description: 'URLs de imágenes del producto',
  })
  images?: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty({ required: false, example: ['S', 'M', 'L', 'XL'] })
  sizes?: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty({ required: false, example: ['Negro', 'Blanco'] })
  colors?: string[];

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    required: false,
    default: false,
    description: 'Si el producto es destacado en la tienda',
  })
  featured?: boolean = false;

  @IsOptional()
  @IsEnum(['MALE', 'FEMALE', 'UNISEX', 'KIDS'], {
    message: 'GENDER should be one of the list.',
  })
  @ApiProperty({
    enum: ['MALE', 'FEMALE', 'UNISEX', 'KIDS'],
  })
  gender: 'MALE' | 'FEMALE' | 'UNISEX' | 'KIDS';
}
