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
exports.UsersService = exports.roundsOfHashing = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
const bcrypt = require("bcrypt");
exports.roundsOfHashing = 10;
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        const hashedPassword = await bcrypt.hash(createUserDto.password, exports.roundsOfHashing);
        createUserDto.password = hashedPassword;
        return await this.prisma.user.create({
            data: createUserDto,
        });
    }
    async findAll() {
        return await this.prisma.user.findMany({
            include: {
                addresses: true,
                orders: true,
                cart: {
                    include: {
                        items: {
                            include: {
                                product: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async findOne(id) {
        const user = await this.prisma.user.findUnique({
            where: {
                id,
            },
            include: {
                addresses: true,
                orders: true,
                loginAudits: true,
                cart: {
                    include: {
                        items: {
                            include: {
                                product: true,
                            },
                        },
                    },
                },
            },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ${id} not found.`);
        }
        return user;
    }
    async update(id, updateUserDto) {
        if (updateUserDto.password) {
            updateUserDto.password = await bcrypt.hash(updateUserDto.password, exports.roundsOfHashing);
        }
        return await this.prisma.user.update({
            where: {
                id,
            },
            data: updateUserDto,
        });
    }
    async remove(id) {
        return await this.prisma.user.delete({
            where: { id },
        });
    }
    async me(userId) {
        return await this.prisma.user.findUnique({
            where: { id: userId },
            include: {
                loginAudits: true,
                cart: {
                    include: {
                        items: {
                            include: {
                                product: true,
                            },
                        },
                    },
                },
                orders: {
                    include: {
                        items: true,
                    },
                    orderBy: {
                        createdAt: 'desc',
                    },
                },
                addresses: true,
            },
        });
    }
    async getUserOrders(userId) {
        return await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                orders: {
                    orderBy: {
                        createdAt: 'desc',
                    },
                    include: {
                        items: {
                            include: {
                                product: true,
                            },
                        },
                    },
                },
            },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map