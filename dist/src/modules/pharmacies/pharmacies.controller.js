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
exports.PharmaciesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_2 = require("@nestjs/swagger");
const pharmacies_service_1 = require("./pharmacies.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
class CreatePharmacyDto {
}
__decorate([
    (0, swagger_2.ApiProperty)({ example: 'Pharmacie El Amel' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "name", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ example: '5 Rue des Martyrs, Alger' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "address", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ example: '021000000' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ example: 'Alger' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "region", void 0);
let PharmaciesController = class PharmaciesController {
    constructor(pharmaciesService) {
        this.pharmaciesService = pharmaciesService;
    }
    findAll(region, status, search) {
        return this.pharmaciesService.findAll({ region, status, search });
    }
    findOne(id) {
        return this.pharmaciesService.findOne(id);
    }
    create(dto) {
        return this.pharmaciesService.create(dto);
    }
    update(id, dto) {
        return this.pharmaciesService.update(id, dto);
    }
    remove(id) {
        return this.pharmaciesService.remove(id);
    }
};
exports.PharmaciesController = PharmaciesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Liste des pharmacies' }),
    (0, swagger_1.ApiQuery)({ name: 'region', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false }),
    __param(0, (0, common_1.Query)('region')),
    __param(1, (0, common_1.Query)('status')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], PharmaciesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Détails d\'une pharmacie' }),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PharmaciesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer une pharmacie' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePharmacyDto]),
    __metadata("design:returntype", void 0)
], PharmaciesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier une pharmacie' }),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PharmaciesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Désactiver une pharmacie' }),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PharmaciesController.prototype, "remove", null);
exports.PharmaciesController = PharmaciesController = __decorate([
    (0, swagger_1.ApiTags)('Admin - Pharmacies'),
    (0, swagger_1.ApiBearerAuth)('JWT-Admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('admin/pharmacies'),
    __metadata("design:paramtypes", [pharmacies_service_1.PharmaciesService])
], PharmaciesController);
//# sourceMappingURL=pharmacies.controller.js.map