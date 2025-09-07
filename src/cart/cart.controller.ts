import { Controller, Get, Post, Param, Req, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthRequest } from 'src/common/types/auth-request';

@ApiTags('Cart')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('/checkout')
  @ApiOkResponse({
    description:
      'Checkout successful. Returns order + payment information (e.g. init_point).',
  })
  @ApiBadRequestResponse({
    description: 'Cart is empty or not enough stock for a product.',
  })
  @ApiNotFoundResponse({ description: 'Cart not found.' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized.' })
  async checkout(@Req() req: AuthRequest) {
    return this.cartService.checkout(req.user.id);
  }

  @Post('/clear')
  @ApiOkResponse({ description: 'Cart cleared successfully.' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized.' })
  async remove(@Req() req: AuthRequest) {
    return this.cartService.clear(req.user.id);
  }

  @Get()
  @ApiOkResponse({
    description: 'List of all carts including users and items.',
  })
  @ApiUnauthorizedResponse({ description: 'Unauthorized.' })
  async findAll() {
    return this.cartService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Single cart by ID including user and items.',
  })
  @ApiNotFoundResponse({ description: 'Cart not found.' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized.' })
  async findOne(@Param('id') id: string) {
    return this.cartService.findOne(id);
  }
}
