import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateCartItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '64f123abc1234567890def34',
    description: 'ID del carrito',
  })
  cartId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '64f123abc1234567890def56',
    description: 'ID del producto',
  })
  productId: string;

  @IsNumber()
  @Min(1)
  @ApiProperty({ example: 2, description: 'Cantidad de unidades del producto' })
  quantity: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: 'M' })
  size?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: 'Negro' })
  color?: string;

  @IsNumber()
  @ApiProperty({ example: 10000 })
  priceAtAdd: number;
}
