export declare class CreateEventDto {
    logo: string;
    poster: string;
    images: string[];
    name: string;
    description: string;
    category: 'CONCERT' | 'THEATER' | 'SPORT' | 'FESTIVAL' | 'OTHER';
    date: Date;
    venueId: string;
    vipCapacity: number;
    vipAvailable: number;
    regularCapacity: number;
    regularAvailable: number;
    vipPrice: number;
    regularPrice: number;
}
