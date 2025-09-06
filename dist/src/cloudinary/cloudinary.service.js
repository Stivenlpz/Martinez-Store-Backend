"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
let CloudinaryService = class CloudinaryService {
    async upload(fileBuffer, folder) {
        try {
            const result = await new Promise((resolve, reject) => {
                cloudinary_1.v2.uploader
                    .upload_stream({
                    folder: folder || 'uploads',
                    resource_type: 'image',
                    format: 'webp',
                    quality: 'auto',
                    fetch_format: 'auto',
                }, (error, result) => {
                    if (error)
                        reject(error);
                    else
                        resolve(result);
                })
                    .end(fileBuffer);
            });
            return result.secure_url;
        }
        catch (error) {
            console.error('Error uploading to Cloudinary:', error);
            throw new common_1.InternalServerErrorException('Error uploading image to cloud storage');
        }
    }
    async remove(publicId) {
        try {
            if (!publicId) {
                throw new common_1.BadRequestException('Public ID is required');
            }
            const result = await cloudinary_1.v2.uploader.destroy(publicId);
            return result.result === 'ok';
        }
        catch (error) {
            console.error('Error removing from Cloudinary:', error);
            throw new common_1.InternalServerErrorException('Error removing image from cloud storage');
        }
    }
};
exports.CloudinaryService = CloudinaryService;
exports.CloudinaryService = CloudinaryService = __decorate([
    (0, common_1.Injectable)()
], CloudinaryService);
//# sourceMappingURL=cloudinary.service.js.map