import { ApiProperty } from '@nestjs/swagger';

export class CreateAuditDto {
  @ApiProperty({
    description: 'ID del usuario asociado al evento de auditoría',
    example: '64b7c8f1a4d2b3c9e12d3456',
  })
  userId: string;

  @ApiProperty({
    description: 'Dirección IP desde donde se realizó la acción',
    example: '192.168.0.101',
    required: false,
  })
  ip?: string;

  @ApiProperty({
    description:
      'User-Agent del cliente que realizó la petición (navegador, app, etc.)',
    example: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    required: false,
  })
  userAgent?: string;

  @ApiProperty({
    description: 'Indica si la acción fue exitosa o fallida',
    example: true,
    default: true,
    required: false,
  })
  success?: boolean;
}
