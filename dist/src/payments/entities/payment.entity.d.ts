import { Payment } from '@prisma/client';
export declare class PaymentEntity implements Payment {
    id: string;
    orderId: string;
    amount: number;
    method: 'DEBIT_CARD' | 'CREDIT_CARD' | 'PAYPAL' | 'TRANSFER' | 'PSE' | 'OTHER';
    status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'EXPIRED' | 'CANCELLED' | 'REFUNDED';
    mpPreferenceId: number;
    mpPaymentId: number;
    mpStatusDetail: string;
    mpCurrency: string;
    mpTransactionAmount: number;
    mpNetReceivedAmount: number;
    createdAt: Date;
    updatedAt: Date;
}
