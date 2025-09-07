import { ApiProperty } from '@nestjs/swagger';
import { Prisma, OrderItem } from '@prisma/client';

export class OrderItemEntity implements OrderItem {
  @ApiProperty({ description: 'Identificador único del item de orden' })
  id: string;

  @ApiProperty({ description: 'ID de la orden' })
  orderId: string;

  @ApiProperty({ description: 'ID del producto' })
  productId: string;

  @ApiProperty({
    description: 'Nombre del producto en el momento de la compra',
    example: 'Camiseta Básica Negra',
  })
  name: string;

  @ApiProperty({
    description: 'SKU del producto',
    required: false,
    nullable: true,
    example: 'TSHIRT-BLK-M',
  })
  sku: string | null;

  @ApiProperty({ description: 'Cantidad', example: 2 })
  quantity: number;

  @ApiProperty({
    description: 'Precio unitario al momento de la compra',
    example: 49.99,
  })
  price: number;

  @ApiProperty({
    description: 'Talla',
    required: false,
    nullable: true,
    example: 'M',
  })
  size: string | null;

  @ApiProperty({
    description: 'Color',
    required: false,
    nullable: true,
    example: 'Negro',
  })
  color: string | null;

  @ApiProperty({
    description: 'Información adicional',
    required: false,
    nullable: true,
    example: { promoCode: 'WELCOME10' },
  })
  meta: Prisma.JsonValue | null;
}
