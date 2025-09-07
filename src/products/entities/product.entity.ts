import { ApiProperty } from '@nestjs/swagger';
import { Prisma, Product } from '@prisma/client';

export class ProductEntity implements Product {
  @ApiProperty({ description: 'Identificador único del producto' })
  id: string;

  @ApiProperty({
    description: 'SKU del producto',
    required: false,
    nullable: true,
    example: 'TSHIRT-BLK-001',
  })
  sku: string | null;

  @ApiProperty({
    description: 'Nombre del producto',
    example: 'Camiseta Básica Negra',
  })
  name: string;

  @ApiProperty({
    description: 'Slug único (URL friendly)',
    required: false,
    nullable: true,
    example: 'camiseta-basica-negra',
  })
  slug: string | null;

  @ApiProperty({
    description: 'Descripción',
    required: false,
    nullable: true,
    example: 'Algodón 100% color negro',
  })
  description: string | null;

  @ApiProperty({ description: 'Precio', example: 49.99 })
  price: number;

  @ApiProperty({ description: 'Stock disponible', example: 100 })
  stock: number;

  @ApiProperty({
    description: 'Categorías',
    type: [String],
    example: ['pantalones', 'hombre'],
  })
  categories: string[];

  @ApiProperty({
    description: 'URLs de imágenes',
    type: [String],
    example: ['https://cdn.tienda.com/p1.png'],
  })
  images: string[];

  @ApiProperty({
    description: 'Tallas disponibles',
    type: [String],
    example: ['S', 'M', 'L', 'XL'],
  })
  sizes: string[];

  @ApiProperty({
    description: 'Colores disponibles',
    type: [String],
    example: ['Negro', 'Blanco'],
  })
  colors: string[];

  @ApiProperty({ description: 'Producto destacado', example: false })
  featured: boolean;

  @ApiProperty({ description: 'Fecha de creación' })
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
    example: { material: 'algodón', tags: ['básico'] },
  })
  meta: Prisma.JsonValue | null;

  @ApiProperty({
    description: 'Genero del producto',
    required: true,
    example: 'MALE',
  })
  gender: 'MALE' | 'FEMALE' | 'UNISEX' | 'KIDS';
}
