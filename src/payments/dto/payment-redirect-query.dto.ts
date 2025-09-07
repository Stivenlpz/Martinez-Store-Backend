import { ApiProperty } from '@nestjs/swagger';

export class PaymentRedirectQueryDto {
  @ApiProperty({
    example: '1234567890',
    description: 'ID del pago en MercadoPago',
  })
  payment_id: string;

  @ApiProperty({
    example: 'approved',
    description: 'Estado del pago según MercadoPago',
  })
  status: string;

  @ApiProperty({
    example: 'order_001',
    description: 'Referencia externa enviada al crear la preferencia',
  })
  external_reference: string;

  @ApiProperty({
    example: '987654321',
    description: 'ID de la orden de MercadoPago',
  })
  merchant_order_id: string;
}
