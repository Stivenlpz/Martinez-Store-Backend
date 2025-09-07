import { ApiProperty } from '@nestjs/swagger';
import { Prisma, CartItem } from '@prisma/client';

export class CartItemEntity implements CartItem {
  @ApiProperty({ description: 'Identificador único del item de carrito' })
  id: string;

  @ApiProperty({
    description: 'ID del carrito',
    example: '64f123abc1234567890def34',
  })
  cartId: string;

  @ApiProperty({
    description: 'ID del producto',
    example: '64f123abc1234567890def56',
  })
  productId: string;

  @ApiProperty({ description: 'Cantidad', example: 2 })
  quantity: number;

  @ApiProperty({
    description: 'Talla seleccionada',
    required: false,
    nullable: true,
    example: 'M',
  })
  size: string | null;

  @ApiProperty({
    description: 'Color seleccionado',
    required: false,
    nullable: true,
    example: 'Negro',
  })
  color: string | null;

  @ApiProperty({
    description: 'Precio al momento de agregar al carrito',
    example: 49.99,
  })
  priceAtAdd: number;

  @ApiProperty({
    description: 'Información adicional',
    required: false,
    nullable: true,
    example: { promoApplied: 'WELCOME10' },
  })
  meta: Prisma.JsonValue | null;
}
