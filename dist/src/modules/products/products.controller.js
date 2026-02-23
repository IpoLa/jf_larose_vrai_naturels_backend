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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    findAll(activeOnly) {
        return this.productsService.findAll(activeOnly === 'true');
    }
    getStats() {
        return this.productsService.getProductStats();
    }
    findOne(id) {
        return this.productsService.findOne(id);
    }
    create(dto) {
        return this.productsService.create(dto);
    }
    update(id, dto) {
        return this.productsService.update(id, dto);
    }
    reorder(dto) {
        return this.productsService.reorder(dto.items);
    }
    remove(id) {
        return this.productsService.remove(id);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Lister tous les produits',
        description: 'Retourne tous les produits (actifs et inactifs) avec statistiques de ventes.',
    }),
    (0, swagger_1.ApiQuery)({ name: 'activeOnly', required: false, type: Boolean, description: 'Filtrer par produits actifs uniquement' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des produits avec stats' }),
    __param(0, (0, common_1.Query)('activeOnly')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({
        summary: 'Statistiques des produits',
        description: 'Nombre de ventes et quantités vendues par produit.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Statistiques par produit' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Détails d\'un produit' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du produit' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Données du produit' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Produit non trouvé' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Créer un nouveau produit',
        description: 'Ajoute un produit à la gamme Les Vrais Naturels. Le nom sera automatiquement mis en majuscules.',
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Produit créé avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Un produit avec ce nom existe déjà' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Modifier un produit',
        description: 'Mettre à jour les informations, l\'argumentaire ou l\'état actif d\'un produit.',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du produit' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Produit mis à jour' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('reorder'),
    (0, swagger_1.ApiOperation)({
        summary: 'Réordonner les produits',
        description: 'Met à jour l\'ordre d\'affichage de plusieurs produits en une seule requête.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Ordre mis à jour' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.ReorderProductsDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "reorder", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Désactiver un produit',
        description: 'Désactive le produit (soft delete). Les ventes existantes sont préservées.',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du produit' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Produit désactivé' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "remove", null);
exports.ProductsController = ProductsController = __decorate([
    (0, swagger_1.ApiTags)('Admin - Produits'),
    (0, swagger_1.ApiBearerAuth)('JWT-Admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('admin/products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map