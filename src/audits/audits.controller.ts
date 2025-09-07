import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuditsService } from './audits.service';
import { UpdateAuditDto } from './dto/update-audit.dto';
import { LoginAuditEntity } from './entities/audit.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Audits')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('audits')
export class AuditsController {
  constructor(private readonly auditsService: AuditsService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all audits' })
  @ApiOkResponse({ type: [LoginAuditEntity] })
  findAll() {
    return this.auditsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve an audit by ID' })
  @ApiOkResponse({ type: LoginAuditEntity })
  findOne(@Param('id') id: string) {
    return this.auditsService.findOne(id);
  }

  @Get('/users/:id')
  @ApiOperation({ summary: 'Retrieve all audits of a user' })
  @ApiOkResponse({ type: LoginAuditEntity })
  findByUser(@Param('id') id: string) {
    return this.auditsService.findByUser(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an audit by ID' })
  @ApiOkResponse({ type: LoginAuditEntity })
  update(@Param('id') id: string, @Body() updateAuditDto: UpdateAuditDto) {
    return this.auditsService.update(id, updateAuditDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an audit by ID' })
  @ApiOkResponse({ description: 'Audit removed successfully' })
  remove(@Param('id') id: string) {
    return this.auditsService.remove(id);
  }
}
