import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'nestjs-prisma';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { roundsOfHashing } from 'src/users/users.service';
import { MailService } from 'src/mail/mail.service';
import { Request } from 'express';
import { AuditsService } from 'src/audits/audits.service';
import axios from 'axios';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private auditService: AuditsService,
    private mailService: MailService,
  ) {}

  async login(
    email: string,
    password: string,
    captchaToken: string,
    req: Request,
  ) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new NotFoundException(`No user found with ${email} email.`);
    }

    // 🚨 Revisar si la cuenta está bloqueada
    if (user.isLocked && user.lockedUntil && user.lockedUntil > new Date()) {
      throw new UnauthorizedException(
        `Account locked until ${user.lockedUntil.toISOString()}`,
      );
    }

    if (!user.activated) {
      await this.auditService.register({
        userId: user.id,
        ip: req.ip,
        userAgent: req.headers['user-agent'] || 'unknown',
        success: false,
      });
      throw new UnauthorizedException('User is inactive.');
    }

    if (!captchaToken) {
      throw new BadRequestException('CAPTCHA token is required.');
    }

    const isCaptchaValid = await this.verifyHcaptcha(captchaToken, req.ip);
    if (!isCaptchaValid) {
      await this.auditService.register({
        userId: user.id,
        ip: req.ip,
        userAgent: req.headers['user-agent'] || 'unknown',
        success: false,
      });
      throw new BadRequestException('CAPTCHA verification failed.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      await this.auditService.register({
        userId: user.id,
        ip: req.ip,
        userAgent: req.headers['user-agent'] || 'unknown',
        success: false,
      });

      // 🚨 Contar intentos fallidos en los últimos 15 minutos
      const failedAttempts = await this.prisma.loginAudit.count({
        where: {
          userId: user.id,
          success: false,
          createdAt: { gte: new Date(Date.now() - 15 * 60 * 1000) },
        },
      });

      if (failedAttempts >= 5) {
        await this.prisma.user.update({
          where: { id: user.id },
          data: {
            isLocked: true,
            lockedUntil: new Date(Date.now() + 30 * 60 * 1000), // 30 min
          },
        });
        throw new UnauthorizedException(
          'Too many failed attempts. Account locked for 30 minutes.',
        );
      }

      throw new UnauthorizedException('Invalid password.');
    }

    // 🚨 Si login exitoso, desbloquear si estaba bloqueado
    if (user.isLocked) {
      await this.prisma.user.update({
        where: { id: user.id },
        data: { isLocked: false, lockedUntil: null },
      });
    }

    await this.auditService.register({
      userId: user.id,
      ip: req.ip,
      userAgent: req.headers['user-agent'] || 'unknown',
      success: true,
    });

    // await this.mailService.sendLoginEmail(user);

    return {
      message: 'Login successful',
      accessToken: this.jwtService.sign({
        userId: user.id,
      }),
    };
  }

  async register(registerDto: RegisterDto) {
    const isEmailTaken = await this.prisma.user.findUnique({
      where: {
        email: registerDto.email,
      },
    });

    if (isEmailTaken)
      throw new ConflictException(
        `email ${registerDto.email} is already taken.`,
      );

    registerDto.password = await bcrypt.hash(
      registerDto.password,
      roundsOfHashing,
    );

    const user = await this.prisma.user.create({
      data: {
        ...registerDto,
        cart: {
          create: {},
        },
      },
    });

    await this.mailService.sendWelcomeEmail(user);

    return {
      message: 'User registered successfully.',
    };
  }

  async activeUser(userId: string) {
    return await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        activated: true,
      },
      include: {
        orders: true,
        cart: true,
      },
    });
  }

  async deactiveUser(userId: string) {
    return await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        activated: false,
      },
      include: {
        orders: true,
        cart: true,
      },
    });
  }

  verifyRequestReset(token: string) {
    const payload: { userId: string } = this.jwtService.verify(token);

    if (!payload) throw new UnauthorizedException('Invalid or expired token. ');

    return {
      message: 'Verified',
    };
  }

  async requestPasswordReset(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user)
      throw new NotFoundException(`No user found with ${email} email.`);

    const token = this.jwtService.sign({
      userId: user.id,
    });

    await this.mailService.sendRequestPasswordResetEmail(user, token);

    return {
      message: 'Password reset email sent.',
    };
  }

  async resetPassword(token: string, newPassword: string) {
    try {
      const payload: { userId: string } = this.jwtService.verify(token);

      const hashedPassword = await bcrypt.hash(newPassword, roundsOfHashing);

      const user = await this.prisma.user.update({
        where: { id: payload.userId },
        data: {
          password: hashedPassword,
        },
      });

      await this.mailService.sendPasswordResetEmail(user);

      return {
        message: 'Password reset successfully.',
      };
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException('Invalid or expired token.');
    }
  }

  private async verifyHcaptcha(token: string, ip?: string): Promise<boolean> {
    try {
      const response = await axios.post(
        'https://hcaptcha.com/siteverify',
        new URLSearchParams({
          secret: process.env.HCAPTCHA_SECRET!,
          response: token,
          remoteip: ip || '', // IP opcional pero recomendada
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
      return response.data.success;
    } catch (error) {
      console.error('Error verifying hCaptcha:', error);
      return false;
    }
  }
}
