import { MailerService } from '@nestjs-modules/mailer';
import { User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
export declare class MailService {
    private mailerService;
    private prisma;
    constructor(mailerService: MailerService, prisma: PrismaService);
    private logger;
    sendEmail(to: string, subject: string, content: string): Promise<void>;
    sendWelcomeEmail(user: User): Promise<void>;
    sendLoginEmail(user: User): Promise<void>;
    sendRequestPasswordResetEmail(user: User, token: string): Promise<void>;
    sendPasswordResetEmail(user: User): Promise<void>;
    paymentAprovedEmail(orderId: string): Promise<void>;
    paymentRejectedEmail(orderId: string): Promise<void>;
}
