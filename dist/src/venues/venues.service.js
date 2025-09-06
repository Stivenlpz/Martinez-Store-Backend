"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenuesService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
let VenuesService = class VenuesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createVenueDto) {
        return await this.prisma.venue.create({
            data: createVenueDto,
        });
    }
    async findAll() {
        return await this.prisma.venue.findMany();
    }
    async findOne(id) {
        const venue = await this.prisma.venue.findUnique({ where: { id } });
        if (!venue) {
            throw new common_1.NotFoundException(`Ticket with ID ${id} not found`);
        }
        return venue;
    }
    async update(id, updateVenueDto) {
        return await this.prisma.venue.update({
            where: { id },
            data: updateVenueDto,
        });
    }
    async remove(id) {
        return await this.prisma.venue.delete({
            where: { id },
        });
    }
};
exports.VenuesService = VenuesService;
exports.VenuesService = VenuesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], VenuesService);
//# sourceMappingURL=venues.service.js.map