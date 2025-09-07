import { ApiProperty } from '@nestjs/swagger';
import {
  Prisma,
  Order,
  OrderStatus,
  PaymentStatus,
  ShippingStatus,
} from '@prisma/client';

export class OrderEntity implements Order {
  @ApiProperty({ description: 'Identificador único de la orden' })
  id: string;

  @ApiProperty({ description: 'ID del usuario que realizó la compra' })
  userId: string;

  @ApiProperty({ description: 'Monto total de la orden', example: 99.98 })
  totalAmount: number;

  @ApiProperty({ description: 'Moneda', example: 'USD' })
  currency: string;

  @ApiProperty({
    description: 'Estado de la orden',
    enum: OrderStatus,
    example: 'PENDING',
  })
  status: OrderStatus;

  @ApiProperty({
    description: 'Estado del pago',
    enum: PaymentStatus,
    example: 'UNPAID',
  })
  paymentStatus: PaymentStatus;

  @ApiProperty({
    description: 'Estado del envío',
    enum: ShippingStatus,
    example: 'NOT_SHIPPED',
  })
  shippingStatus: ShippingStatus;

  @ApiProperty({
    description: 'ID de la dirección de envío',
    required: false,
    nullable: true,
  })
  shippingAddressId: string | null;

  @ApiProperty({
    description: 'Transportadora',
    required: false,
    nullable: true,
    example: 'DHL',
  })
  shippingCarrier: string | null;

  @ApiProperty({
    description: 'Número de guía',
    required: false,
    nullable: true,
    example: '1234567890',
  })
  shippingTrackingNumber: string | null;

  @ApiProperty({
    description: 'Notas del envío',
    required: false,
    nullable: true,
    example: 'Entregar después de 6pm',
  })
  shippingNotes: string | null;

  @ApiProperty({
    description: 'Historial de cambios de la orden',
    required: false,
    nullable: true,
    isArray: true,
    example: [
      { at: '2025-09-01T10:00:00Z', from: 'PENDING', to: 'PAID', by: 'system' },
    ],
  })
  history: [];

  @ApiProperty({
    description: 'Payload de la pasarela de pago (Mercado Pago)',
    required: false,
    nullable: true,
    example: { mp_payment_id: '123', status: 'approved' },
  })
  payment: Prisma.JsonValue | null;

  @ApiProperty({ description: 'Fecha de creación' })
  createdAt: Date;

  @ApiProperty({
    description: 'Última actualización',
    required: false,
    nullable: true,
  })
  updatedAt: Date | null;

  @ApiProperty({
    description: 'Fecha de cancelación',
    required: false,
    nullable: true,
  })
  canceledAt: Date | null;

  @ApiProperty({
    description: 'Fecha de entrega',
    required: false,
    nullable: true,
  })
  deliveredAt: Date | null;

  @ApiProperty({
    description: 'Fecha de reembolso',
    required: false,
    nullable: true,
  })
  refundedAt: Date | null;

  @ApiProperty({
    description: 'Información adicional de la orden',
    required: false,
    nullable: true,
    example: { giftMessage: '¡Feliz cumple!' },
  })
  meta: Prisma.JsonValue | null;

  @ApiProperty({ description: 'link al portal de pago de mercadopago.' })
  init_point: string;
}
