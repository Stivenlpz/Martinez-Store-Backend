export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    phone: string;
    city: string;
    country: string;
    role?: 'ADMIN' | 'USER';
}
