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
exports.PaymentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const payments_service_1 = require("./payments.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let PaymentsController = class PaymentsController {
    constructor(paymentsService) {
        this.paymentsService = paymentsService;
    }
    getAll(vendorId, status, periodType) {
        return this.paymentsService.getAllPayments({ vendorId, status, periodType });
    }
    getPending() {
        return this.paymentsService.getAllPendingPayments();
    }
    getSummary() {
        return this.paymentsService.getPaymentSummary();
    }
    markAsPaid(id) {
        return this.paymentsService.markAsPaid(id);
    }
};
exports.PaymentsController = PaymentsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Liste des paiements/commissions',
        description: 'Toutes les périodes avec commissions calculées',
    }),
    (0, swagger_1.ApiQuery)({ name: 'vendorId', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: ['pending', 'paid'] }),
    (0, swagger_1.ApiQuery)({ name: 'periodType', required: false, enum: ['15_days', 'monthly'] }),
    __param(0, (0, common_1.Query)('vendorId')),
    __param(1, (0, common_1.Query)('status')),
    __param(2, (0, common_1.Query)('periodType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('pending'),
    (0, swagger_1.ApiOperation)({ summary: 'Paiements en attente', description: 'Commissions non encore payées' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "getPending", null);
__decorate([
    (0, common_1.Get)('summary'),
    (0, swagger_1.ApiOperation)({ summary: 'Résumé des paiements', description: 'Total payé et en attente' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "getSummary", null);
__decorate([
    (0, common_1.Put)(':id/mark-paid'),
    (0, swagger_1.ApiOperation)({
        summary: 'Marquer un paiement comme effectué',
        description: 'Confirme le paiement de la commission pour une période',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la période de paiement' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Paiement marqué comme effectué' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "markAsPaid", null);
exports.PaymentsController = PaymentsController = __decorate([
    (0, swagger_1.ApiTags)('Admin - Paiements'),
    (0, swagger_1.ApiBearerAuth)('JWT-Admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('admin/payments'),
    __metadata("design:paramtypes", [payments_service_1.PaymentsService])
], PaymentsController);
//# sourceMappingURL=payments.controller.js.map