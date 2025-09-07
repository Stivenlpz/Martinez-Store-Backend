import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaymentsService } from './payments.service';
import { PaymentRedirectQueryDto } from './dto/payment-redirect-query.dto';

@ApiTags('Payments')
@Controller('payment')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get('success')
  @ApiOperation({ summary: 'Redirección exitosa de MercadoPago' })
  @ApiResponse({
    status: 200,
    description: 'El pago fue aprobado por MercadoPago.',
    schema: { example: { status: 'success', query: { payment_id: '1234' } } },
  })
  success(@Query() query: PaymentRedirectQueryDto) {
    return { status: 'success', query };
  }

  @Get('failure')
  @ApiOperation({ summary: 'Redirección fallida de MercadoPago' })
  @ApiResponse({
    status: 200,
    description: 'El pago fue rechazado por MercadoPago.',
    schema: { example: { status: 'failure', query: { payment_id: '5678' } } },
  })
  failure(@Query() query: PaymentRedirectQueryDto) {
    return { status: 'failure', query };
  }

  @Get('pending')
  @ApiOperation({ summary: 'Redirección pendiente de MercadoPago' })
  @ApiResponse({
    status: 200,
    description: 'El pago está pendiente de confirmación.',
    schema: { example: { status: 'pending', query: { payment_id: '9012' } } },
  })
  pending(@Query() query: PaymentRedirectQueryDto) {
    return { status: 'pending', query };
  }

  @Post('webhook')
  @ApiOperation({
    summary: 'Webhook de MercadoPago',
    description:
      'MercadoPago envía las notificaciones de cambios en los pagos. Aquí debes actualizar tus órdenes.',
  })
  @ApiResponse({
    status: 200,
    description: 'El webhook fue recibido correctamente.',
    schema: { example: { status: 'ok' } },
  })
  async webhook(@Body() body: any) {
    await this.paymentsService.handleWebhook(body);
    return { status: 'ok' };
  }
}
