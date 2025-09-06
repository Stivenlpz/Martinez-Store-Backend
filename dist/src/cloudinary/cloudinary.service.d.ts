export declare class CloudinaryService {
    upload(fileBuffer: Buffer, folder?: string): Promise<string>;
    remove(publicId: string): Promise<boolean>;
}
