import { Module } from '@nestjs/common';
import { AuditsService } from './audits.service';
import { AuditsController } from './audits.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  controllers: [AuditsController],
  providers: [AuditsService],
  imports: [PrismaModule],
  exports: [AuditsService],
})
export class AuditsModule {}
