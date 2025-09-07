import { ApiProperty } from '@nestjs/swagger';
import { Prisma, LoginAudit } from '@prisma/client';

export class LoginAuditEntity implements LoginAudit {
  @ApiProperty({ description: 'Identificador único del registro de login' })
  id: string;

  @ApiProperty({ description: 'ID del usuario' })
  userId: string;

  @ApiProperty({
    description: 'IP del cliente',
    required: false,
    nullable: true,
    example: '190.85.23.10',
  })
  ip: string | null;

  @ApiProperty({
    description: 'User-Agent del cliente',
    required: false,
    nullable: true,
    example: 'Mozilla/5.0 ...',
  })
  userAgent: string | null;

  @ApiProperty({ description: 'Éxito del intento de login', example: true })
  success: boolean;

  @ApiProperty({
    description: 'Fecha y hora del evento',
    example: '2025-09-03T10:15:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Información adicional',
    required: false,
    nullable: true,
    example: { method: 'password' },
  })
  meta: Prisma.JsonValue | null;
}
