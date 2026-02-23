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
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dashboard_service_1 = require("./dashboard.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let DashboardController = class DashboardController {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    getAdminDashboard() {
        return this.dashboardService.getAdminDashboard();
    }
    getTopVendors(limit, periodType) {
        return this.dashboardService.getTopVendors(limit || 10, periodType);
    }
    getTopPharmacies(limit) {
        return this.dashboardService.getTopPharmacies(limit || 10);
    }
    getRecentActivity() {
        return this.dashboardService.getRecentActivity();
    }
};
exports.DashboardController = DashboardController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Tableau de bord admin', description: 'KPIs globaux de la plateforme' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getAdminDashboard", null);
__decorate([
    (0, common_1.Get)('top-vendors'),
    (0, swagger_1.ApiOperation)({ summary: 'Top vendeurs', description: 'Classement des meilleurs vendeurs' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'periodType', required: false, enum: ['15_days', 'monthly'] }),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('periodType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getTopVendors", null);
__decorate([
    (0, common_1.Get)('top-pharmacies'),
    (0, swagger_1.ApiOperation)({ summary: 'Top pharmacies', description: 'Classement des meilleures pharmacies' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getTopPharmacies", null);
__decorate([
    (0, common_1.Get)('recent-activity'),
    (0, swagger_1.ApiOperation)({ summary: 'Activité récente', description: 'Dernières ventes enregistrées' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getRecentActivity", null);
exports.DashboardController = DashboardController = __decorate([
    (0, swagger_1.ApiTags)('Admin - Tableau de bord'),
    (0, swagger_1.ApiBearerAuth)('JWT-Admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('admin/dashboard'),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardController);
//# sourceMappingURL=dashboard.controller.js.map