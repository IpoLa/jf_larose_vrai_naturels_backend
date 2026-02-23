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
exports.VendorsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const vendors_service_1 = require("./vendors.service");
const create_vendor_dto_1 = require("./dto/create-vendor.dto");
const update_vendor_dto_1 = require("./dto/update-vendor.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let VendorsController = class VendorsController {
    constructor(vendorsService) {
        this.vendorsService = vendorsService;
    }
    findAll(pharmacyId, status, search) {
        return this.vendorsService.findAll({ pharmacyId, status, search });
    }
    findOne(id) {
        return this.vendorsService.findOne(id);
    }
    getStats(id) {
        return this.vendorsService.getVendorStats(id);
    }
    create(dto) {
        return this.vendorsService.create(dto);
    }
    update(id, dto) {
        return this.vendorsService.update(id, dto);
    }
    remove(id) {
        return this.vendorsService.remove(id);
    }
};
exports.VendorsController = VendorsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Liste des vendeurs',
        description: 'Obtenir tous les vendeurs avec filtres optionnels',
    }),
    (0, swagger_1.ApiQuery)({ name: 'pharmacyId', required: false, description: 'Filtrer par pharmacie' }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: ['active', 'inactive'] }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, description: 'Recherche par nom ou téléphone' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des vendeurs' }),
    __param(0, (0, common_1.Query)('pharmacyId')),
    __param(1, (0, common_1.Query)('status')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Détails d\'un vendeur' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du vendeur' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/stats'),
    (0, swagger_1.ApiOperation)({
        summary: 'Statistiques d\'un vendeur',
        description: 'Scores totaux, commissions gagnées, statut des paiements',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du vendeur' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "getStats", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Créer un nouveau vendeur',
        description: 'Crée un vendeur avec bonus d\'adhésion de 200 DA et génère son QR code automatiquement',
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Vendeur créé avec QR code généré' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vendor_dto_1.CreateVendorDto]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier un vendeur' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du vendeur' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vendor_dto_1.UpdateVendorDto]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Désactiver un vendeur' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du vendeur' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "remove", null);
exports.VendorsController = VendorsController = __decorate([
    (0, swagger_1.ApiTags)('Admin - Vendeurs'),
    (0, swagger_1.ApiBearerAuth)('JWT-Admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('admin/vendors'),
    __metadata("design:paramtypes", [vendors_service_1.VendorsService])
], VendorsController);
//# sourceMappingURL=vendors.controller.js.map