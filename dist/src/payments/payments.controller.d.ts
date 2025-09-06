import { PaymentsService } from './payments.service';
import { PaymentRedirectQueryDto } from './dto/payment-redirect-query.dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    success(query: PaymentRedirectQueryDto): {
        status: string;
        query: PaymentRedirectQueryDto;
    };
    failure(query: PaymentRedirectQueryDto): {
        status: string;
        query: PaymentRedirectQueryDto;
    };
    pending(query: PaymentRedirectQueryDto): {
        status: string;
        query: PaymentRedirectQueryDto;
    };
    webhook(body: any): Promise<{
        status: string;
    }>;
}
