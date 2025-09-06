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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const audits_service_1 = require("./audits.service");
const update_audit_dto_1 = require("./dto/update-audit.dto");
const audit_entity_1 = require("./entities/audit.entity");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let AuditsController = class AuditsController {
    auditsService;
    constructor(auditsService) {
        this.auditsService = auditsService;
    }
    findAll() {
        return this.auditsService.findAll();
    }
    findOne(id) {
        return this.auditsService.findOne(id);
    }
    findByUser(id) {
        return this.auditsService.findByUser(id);
    }
    update(id, updateAuditDto) {
        return this.auditsService.update(id, updateAuditDto);
    }
    remove(id) {
        return this.auditsService.remove(id);
    }
};
exports.AuditsController = AuditsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all audits' }),
    (0, swagger_1.ApiOkResponse)({ type: [audit_entity_1.LoginAuditEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuditsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve an audit by ID' }),
    (0, swagger_1.ApiOkResponse)({ type: audit_entity_1.LoginAuditEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuditsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/users/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all audits of a user' }),
    (0, swagger_1.ApiOkResponse)({ type: audit_entity_1.LoginAuditEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuditsController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an audit by ID' }),
    (0, swagger_1.ApiOkResponse)({ type: audit_entity_1.LoginAuditEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_audit_dto_1.UpdateAuditDto]),
    __metadata("design:returntype", void 0)
], AuditsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an audit by ID' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Audit removed successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuditsController.prototype, "remove", null);
exports.AuditsController = AuditsController = __decorate([
    (0, swagger_1.ApiTags)('Audits'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('audits'),
    __metadata("design:paramtypes", [audits_service_1.AuditsService])
], AuditsController);
//# sourceMappingURL=audits.controller.js.map