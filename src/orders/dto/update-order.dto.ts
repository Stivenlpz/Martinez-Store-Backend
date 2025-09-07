import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, IsDateString } from 'class-validator';
import { OrderStatus, PaymentStatus, ShippingStatus } from '@prisma/client';

export class UpdateOrderDto {
  @IsEnum(OrderStatus)
  @IsOptional()
  @ApiProperty({
    enum: OrderStatus,
    required: false,
    description: 'Estado de la orden',
  })
  status?: OrderStatus;

  @IsEnum(PaymentStatus)
  @IsOptional()
  @ApiProperty({
    enum: PaymentStatus,
    required: false,
    description: 'Estado del pago',
  })
  paymentStatus?: PaymentStatus;

  @IsEnum(ShippingStatus)
  @IsOptional()
  @ApiProperty({
    enum: ShippingStatus,
    required: false,
    description: 'Estado del envío',
  })
  shippingStatus?: ShippingStatus;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'Transportista de envío',
  })
  shippingCarrier?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'Número de seguimiento',
  })
  shippingTrackingNumber?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'Notas de envío',
  })
  shippingNotes?: string;

  @IsDateString()
  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'Fecha de cancelación',
  })
  canceledAt?: string;

  @IsDateString()
  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'Fecha de entrega',
  })
  deliveredAt?: string;

  @IsDateString()
  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'Fecha de reembolso',
  })
  refundedAt?: string;
}
