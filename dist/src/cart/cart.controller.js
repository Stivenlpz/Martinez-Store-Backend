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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let CartController = class CartController {
    cartService;
    constructor(cartService) {
        this.cartService = cartService;
    }
    async checkout(req) {
        return this.cartService.checkout(req.user.id);
    }
    async remove(req) {
        return this.cartService.clear(req.user.id);
    }
    async findAll() {
        return this.cartService.findAll();
    }
    async findOne(id) {
        return this.cartService.findOne(id);
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.Post)('/checkout'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Checkout successful. Returns order + payment information (e.g. init_point).',
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Cart is empty or not enough stock for a product.',
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Cart not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized.' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "checkout", null);
__decorate([
    (0, common_1.Post)('/clear'),
    (0, swagger_1.ApiOkResponse)({ description: 'Cart cleared successfully.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized.' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'List of all carts including users and items.',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CartController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Single cart by ID including user and items.',
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Cart not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "findOne", null);
exports.CartController = CartController = __decorate([
    (0, swagger_1.ApiTags)('Cart'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map