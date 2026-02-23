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
exports.CommissionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const commissions_service_1 = require("./commissions.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const commission_rule_dto_1 = require("./dto/commission-rule.dto");
let CommissionsController = class CommissionsController {
    constructor(commissionsService) {
        this.commissionsService = commissionsService;
    }
    getAllRules() {
        return this.commissionsService.getAllRules();
    }
    createRule(dto) {
        return this.commissionsService.createRule(dto);
    }
    updateRule(id, dto) {
        return this.commissionsService.updateRule(id, dto);
    }
    deleteRule(id) {
        return this.commissionsService.deleteRule(id);
    }
};
exports.CommissionsController = CommissionsController;
__decorate([
    (0, common_1.Get)('rules'),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtenir toutes les règles de commission',
        description: 'Retourne toutes les règles de commission actives et inactives',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des règles de commission' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommissionsController.prototype, "getAllRules", null);
__decorate([
    (0, common_1.Post)('rules'),
    (0, swagger_1.ApiOperation)({
        summary: 'Créer une nouvelle règle de commission',
        description: 'Ajouter une nouvelle règle de palier de commission',
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Règle créée avec succès' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [commission_rule_dto_1.CreateCommissionRuleDto]),
    __metadata("design:returntype", void 0)
], CommissionsController.prototype, "createRule", null);
__decorate([
    (0, common_1.Put)('rules/:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Modifier une règle de commission',
        description: 'Mettre à jour les paramètres d\'une règle de commission existante',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la règle de commission' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Règle mise à jour avec succès' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, commission_rule_dto_1.UpdateCommissionRuleDto]),
    __metadata("design:returntype", void 0)
], CommissionsController.prototype, "updateRule", null);
__decorate([
    (0, common_1.Delete)('rules/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer une règle de commission' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la règle de commission' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Règle supprimée avec succès' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommissionsController.prototype, "deleteRule", null);
exports.CommissionsController = CommissionsController = __decorate([
    (0, swagger_1.ApiTags)('Admin - Commissions'),
    (0, swagger_1.ApiBearerAuth)('JWT-Admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('admin/commissions'),
    __metadata("design:paramtypes", [commissions_service_1.CommissionsService])
], CommissionsController);
//# sourceMappingURL=commissions.controller.js.map