export declare class CreatePaymentDto {
    orderId: string;
    ammount: number;
    method: 'DEBIT_CARD' | 'CREDIT_CARD' | 'PAYPAL' | 'TRANSFER' | 'PSE' | 'OTHER';
}
