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
exports.TicketsService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
let TicketsService = class TicketsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTicketDto) {
        return this.prisma.$transaction(async (tx) => {
            const event = await tx.event.findUnique({
                where: {
                    id: createTicketDto.eventId,
                },
            });
            if (!event) {
                throw new common_1.NotFoundException(`Event with ID ${createTicketDto.eventId} not found`);
            }
            if (createTicketDto.type === 'REGULAR') {
                if (event.regularAvailable >= 0)
                    throw new common_1.NotFoundException('No regular tickets available');
            }
            else {
                if (event.vipAvailable >= 0)
                    throw new common_1.NotFoundException('No vip tickets available');
            }
            const ticket = await tx.ticket.create({
                data: {
                    ...createTicketDto,
                    status: 'SOLD',
                },
            });
            await tx.event.update({
                where: { id: event.id },
                data: createTicketDto.type === 'REGULAR'
                    ? { regularAvailable: { decrement: 1 } }
                    : {
                        vipAvailable: { decrement: 1 },
                    },
            });
            return ticket;
        });
    }
    async findAll() {
        return await this.prisma.ticket.findMany();
    }
    async findOne(id) {
        const ticket = await this.prisma.ticket.findUnique({ where: { id } });
        if (!ticket) {
            throw new common_1.NotFoundException(`Ticket with ID ${id} not found`);
        }
        return ticket;
    }
    async update(id, updateTicketDto) {
        return await this.prisma.ticket.update({
            where: { id },
            data: updateTicketDto,
        });
    }
    async remove(id) {
        return await this.prisma.ticket.delete({ where: { id } });
    }
};
exports.TicketsService = TicketsService;
exports.TicketsService = TicketsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], TicketsService);
//# sourceMappingURL=tickets.service.js.map