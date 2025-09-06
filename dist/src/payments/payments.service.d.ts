import { Items } from 'mercadopago/dist/clients/commonTypes';
import { PrismaService } from 'nestjs-prisma';
import { MailService } from 'src/mail/mail.service';
import { OrdersHelperService } from 'src/orders-helper/order-helper.service';
export declare class PaymentsService {
    private prisma;
    private mailService;
    private ordersHelperService;
    private client;
    constructor(prisma: PrismaService, mailService: MailService, ordersHelperService: OrdersHelperService);
    createPreference(items: Items[], externalReference: string): Promise<{
        init_point: string | undefined;
        message: string;
    }>;
    handleWebhook(response: any): Promise<void>;
}
