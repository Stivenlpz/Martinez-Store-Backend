import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsPositive,
} from 'class-validator';

export class BuyProductDto {
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Cantidad del producto.',
  })
  quantity: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: 'M' })
  size?: string;
}
