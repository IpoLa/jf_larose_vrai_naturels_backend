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
exports.QrCodesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const qr_codes_service_1 = require("./qr-codes.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let QrCodesController = class QrCodesController {
    constructor(qrCodesService) {
        this.qrCodesService = qrCodesService;
    }
    getAllQrCodes() {
        return this.qrCodesService.getAllQrCodes();
    }
    getVendorQrCode(vendorId) {
        return this.qrCodesService.getVendorQrCode(vendorId);
    }
    regenerateQrCode(vendorId) {
        return this.qrCodesService.regenerateQrCode(vendorId);
    }
};
exports.QrCodesController = QrCodesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtenir tous les QR codes actifs',
        description: 'Liste tous les QR codes actifs avec les informations des vendeurs',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des QR codes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QrCodesController.prototype, "getAllQrCodes", null);
__decorate([
    (0, common_1.Get)('vendor/:vendorId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtenir le QR code d\'un vendeur' }),
    (0, swagger_1.ApiParam)({ name: 'vendorId', description: 'ID du vendeur' }),
    __param(0, (0, common_1.Param)('vendorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QrCodesController.prototype, "getVendorQrCode", null);
__decorate([
    (0, common_1.Post)('vendor/:vendorId/regenerate'),
    (0, swagger_1.ApiOperation)({
        summary: 'Régénérer le QR code d\'un vendeur',
        description: 'Génère un nouveau QR code et invalide l\'ancien. Le vendeur devra utiliser le nouveau lien.',
    }),
    (0, swagger_1.ApiParam)({ name: 'vendorId', description: 'ID du vendeur' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Nouveau QR code généré' }),
    __param(0, (0, common_1.Param)('vendorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QrCodesController.prototype, "regenerateQrCode", null);
exports.QrCodesController = QrCodesController = __decorate([
    (0, swagger_1.ApiTags)('Admin - QR Codes'),
    (0, swagger_1.ApiBearerAuth)('JWT-Admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('admin/qr-codes'),
    __metadata("design:paramtypes", [qr_codes_service_1.QrCodesService])
], QrCodesController);
//# sourceMappingURL=qr-codes.controller.js.map