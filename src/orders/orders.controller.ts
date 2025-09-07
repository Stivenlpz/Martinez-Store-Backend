import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { OrderEntity } from './entities/order.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Orders')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva orden' })
  @ApiCreatedResponse({
    description: 'La orden fue creada exitosamente.',
    type: OrderEntity,
  })
  @ApiBadRequestResponse({
    description: 'Datos inválidos para crear la orden.',
  })
  async create(@Body() createOrderDto: CreateOrderDto) {
    return await this.ordersService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las órdenes' })
  @ApiOkResponse({
    description: 'Lista de órdenes encontradas.',
    type: [OrderEntity],
  })
  async findAll() {
    return await this.ordersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una orden por su ID' })
  @ApiOkResponse({
    description: 'Orden encontrada.',
    type: OrderEntity,
  })
  @ApiNotFoundResponse({ description: 'Orden no encontrada.' })
  async findOne(@Param('id') id: string) {
    return await this.ordersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una orden existente' })
  @ApiOkResponse({
    description: 'Orden actualizada exitosamente.',
    type: OrderEntity,
  })
  @ApiBadRequestResponse({
    description: 'Datos inválidos para actualizar la orden.',
  })
  @ApiNotFoundResponse({ description: 'Orden no encontrada.' })
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return await this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una orden por su ID' })
  @ApiOkResponse({
    description: 'Orden eliminada exitosamente.',
    type: OrderEntity,
  })
  @ApiNotFoundResponse({ description: 'Orden no encontrada.' })
  async remove(@Param('id') id: string) {
    return await this.ordersService.remove(id);
  }
}
