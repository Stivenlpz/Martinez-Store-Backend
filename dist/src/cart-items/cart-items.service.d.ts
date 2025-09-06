import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class CartItemsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCartItemDto: CreateCartItemDto): Promise<{
        id: string;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
        cartId: string;
        productId: string;
        quantity: number;
        size: string | null;
        color: string | null;
        priceAtAdd: number;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
        cartId: string;
        productId: string;
        quantity: number;
        size: string | null;
        color: string | null;
        priceAtAdd: number;
    }[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__CartItemClient<{
        id: string;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
        cartId: string;
        productId: string;
        quantity: number;
        size: string | null;
        color: string | null;
        priceAtAdd: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateCartItemDto: UpdateCartItemDto): import("@prisma/client").Prisma.Prisma__CartItemClient<{
        id: string;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
        cartId: string;
        productId: string;
        quantity: number;
        size: string | null;
        color: string | null;
        priceAtAdd: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__CartItemClient<{
        id: string;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
        cartId: string;
        productId: string;
        quantity: number;
        size: string | null;
        color: string | null;
        priceAtAdd: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
