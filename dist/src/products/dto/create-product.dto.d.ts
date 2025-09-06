export declare class CreateProductDto {
    name: string;
    slug: string;
    sku?: string;
    description?: string;
    price: number;
    stock: number;
    categories?: string[];
    images?: string[];
    sizes?: string[];
    colors?: string[];
    featured?: boolean;
    gender: 'MALE' | 'FEMALE' | 'UNISEX' | 'KIDS';
}
