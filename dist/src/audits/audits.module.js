"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditsModule = void 0;
const common_1 = require("@nestjs/common");
const audits_service_1 = require("./audits.service");
const audits_controller_1 = require("./audits.controller");
const nestjs_prisma_1 = require("nestjs-prisma");
let AuditsModule = class AuditsModule {
};
exports.AuditsModule = AuditsModule;
exports.AuditsModule = AuditsModule = __decorate([
    (0, common_1.Module)({
        controllers: [audits_controller_1.AuditsController],
        providers: [audits_service_1.AuditsService],
        imports: [nestjs_prisma_1.PrismaModule],
        exports: [audits_service_1.AuditsService],
    })
], AuditsModule);
//# sourceMappingURL=audits.module.js.map