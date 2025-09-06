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
exports.AuditsService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
let AuditsService = class AuditsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async register(createAuditDto) {
        return await this.prisma.loginAudit.create({
            data: createAuditDto,
        });
    }
    async findAll() {
        return await this.prisma.loginAudit.findMany();
    }
    async findOne(id) {
        return await this.prisma.loginAudit.findUnique({
            where: {
                id,
            },
        });
    }
    async findByUser(userId) {
        return await this.prisma.loginAudit.findMany({
            where: {
                userId,
            },
        });
    }
    async update(id, updateAuditDto) {
        return await this.prisma.loginAudit.update({
            where: {
                id,
            },
            data: updateAuditDto,
        });
    }
    async remove(id) {
        return await this.prisma.loginAudit.delete({
            where: {
                id,
            },
        });
    }
};
exports.AuditsService = AuditsService;
exports.AuditsService = AuditsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], AuditsService);
//# sourceMappingURL=audits.service.js.map