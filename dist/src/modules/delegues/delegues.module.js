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
exports.DeleguesModule = exports.DeleguesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_2 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const delegues_service_1 = require("./delegues.service");
class CreateDelegueDto {
}
__decorate([
    (0, swagger_2.ApiProperty)({ example: 'Karim Bouzidi' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateDelegueDto.prototype, "name", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ example: 'karim@jf-larose.com' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateDelegueDto.prototype, "email", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ example: '0555000001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDelegueDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ type: [String], example: ['Alger', 'Blida'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateDelegueDto.prototype, "region", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ example: 'Alger Centre' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDelegueDto.prototype, "sector", void 0);
class UpdateDelegueDto extends (0, swagger_1.PartialType)(CreateDelegueDto) {
}
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ enum: ['active', 'inactive'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateDelegueDto.prototype, "status", void 0);
let DeleguesController = class DeleguesController {
    constructor(service) {
        this.service = service;
    }
    findAll(region) { return this.service.findAll(region); }
    findOne(id) { return this.service.findOne(id); }
    create(dto) { return this.service.create(dto); }
    update(id, dto) {
        return this.service.update(id, dto);
    }
    remove(id) { return this.service.remove(id); }
    regenerateQr(id) { return this.service.regenerateQr(id); }
    async regionStats(id) {
        const d = await this.service.findOne(id);
        return this.service.getRegionStats(d.region || []);
    }
};
exports.DeleguesController = DeleguesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Lister les délégués commerciaux' }),
    (0, swagger_1.ApiQuery)({ name: 'region', required: false }),
    __param(0, (0, common_1.Query)('region')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeleguesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Détails d\'un délégué' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeleguesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un délégué commercial (génère QR auto)' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateDelegueDto]),
    __metadata("design:returntype", void 0)
], DeleguesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier un délégué' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateDelegueDto]),
    __metadata("design:returntype", void 0)
], DeleguesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Désactiver un délégué' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeleguesController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/regenerate-qr'),
    (0, swagger_1.ApiOperation)({ summary: 'Régénérer le QR code d\'un délégué' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeleguesController.prototype, "regenerateQr", null);
__decorate([
    (0, common_1.Get)(':id/region-stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Stats des régions du délégué' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeleguesController.prototype, "regionStats", null);
exports.DeleguesController = DeleguesController = __decorate([
    (0, swagger_1.ApiTags)('Admin - Délégués'),
    (0, swagger_1.ApiBearerAuth)('JWT-Admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('admin/delegues'),
    __metadata("design:paramtypes", [delegues_service_1.DeleguesService])
], DeleguesController);
let DeleguesModule = class DeleguesModule {
};
exports.DeleguesModule = DeleguesModule;
exports.DeleguesModule = DeleguesModule = __decorate([
    (0, common_1.Module)({
        controllers: [DeleguesController],
        providers: [delegues_service_1.DeleguesService],
        exports: [delegues_service_1.DeleguesService],
    })
], DeleguesModule);
//# sourceMappingURL=delegues.module.js.map