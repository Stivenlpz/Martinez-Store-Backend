import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrderItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '64f123abc1234567890def56',
    description: 'ID del producto',
  })
  productId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Camiseta Básica Negra' })
  name: string;

  @IsNumber()
  @ApiProperty({
    example: 49.99,
    description: 'Precio unitario en el momento de la compra',
  })
  price: number;

  @IsNumber()
  @ApiProperty({ example: 2, description: 'Cantidad de unidades compradas' })
  quantity: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: 'M' })
  size?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: 'Negro' })
  color?: string;
}
