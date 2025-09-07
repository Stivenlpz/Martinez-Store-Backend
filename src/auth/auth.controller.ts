import { Body, Controller, Param, Patch, Post, Req, Res } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthEntity } from './entity/auth.entity';
import { LoginDto } from './dto/login.dto';
import { RequestResetDto } from './dto/request-reset.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { RegisterDto } from './dto/register.dto';
import { Request, Response } from 'express';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @ApiOperation({ summary: 'Login a user and return access token' })
  @ApiOkResponse({ type: AuthEntity })
  async login(
    @Body() { email, password }: LoginDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const payload = await this.authService.login(email, password, req);
    res.cookie('token', payload.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return payload;
  }

  @Post('/register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiCreatedResponse({ type: AuthEntity })
  async register(@Body() registerDto: RegisterDto) {
    return await this.authService.register(registerDto);
  }

  @Post('/activate/:id')
  @ApiOperation({ summary: 'Activate a user account' })
  @ApiOkResponse({ description: 'User activated successfully' })
  async activeUser(@Param('id') userId: string) {
    const user = await this.authService.activeUser(userId);
    return { message: 'User activated.', user };
  }

  @Post('/deactivate/:id')
  @ApiOperation({ summary: 'Deactivate a user account' })
  @ApiOkResponse({ description: 'User desactivated successfully' })
  async dedactiveUser(@Param('id') userId: string) {
    const user = await this.authService.deactiveUser(userId);
    return { message: 'User deactivated.', user };
  }

  @Post('/logout')
  @ApiOperation({ summary: 'Logout the user' })
  @ApiOkResponse({ description: 'User logged out successfully' })
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('token', {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    });
    return { message: 'Logged out successfully' };
  }

  @Post('/request-reset')
  @ApiOperation({ summary: 'Request password reset email' })
  @ApiOkResponse({ description: 'Password reset email sent' })
  async requestPasswordReset(@Body() { email }: RequestResetDto) {
    return await this.authService.requestPasswordReset(email);
  }

  @Patch('/reset-password/:token')
  @ApiOperation({ summary: 'Reset password with token' })
  @ApiOkResponse({ description: 'Password reset successfully' })
  async resetPassword(
    @Param('token') token: string,
    @Body() { newPassword }: ResetPasswordDto,
  ) {
    return await this.authService.resetPassword(token, newPassword);
  }
}
