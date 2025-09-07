import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateOrderItemDto } from 'src/order-items/dto/create-order-item.dto';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '64f123abc1234567890def12',
    description: 'ID del usuario que hace la compra',
  })
  userId: string;

  @IsArray()
  @ApiProperty({
    type: [CreateOrderItemDto],
    description: 'Lista de productos incluidos en la orden',
  })
  items: CreateOrderItemDto[];

  @IsNumber()
  @ApiProperty({ example: 99.98, description: 'Monto total de la orden' })
  totalAmount: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    example: 'USD',
    description: 'Moneda de la transacción',
  })
  currency?: string = 'USD';

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    example: '64f123abc1234567890def89',
    description: 'ID de la dirección de envío',
  })
  shippingAddressId?: string;
}
