import { OrderItemsService } from './order-items.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
export declare class OrderItemsController {
    private readonly orderItemsService;
    constructor(orderItemsService: OrderItemsService);
    create(createOrderItemDto: CreateOrderItemDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOrderItemDto: UpdateOrderItemDto): string;
    remove(id: string): string;
}
