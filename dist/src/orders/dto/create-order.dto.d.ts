import { CreateOrderItemDto } from 'src/order-items/dto/create-order-item.dto';
export declare class CreateOrderDto {
    userId: string;
    items: CreateOrderItemDto[];
    totalAmount: number;
    currency?: string;
    shippingAddressId?: string;
}
