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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesModule = exports.AdminRulesController = exports.ClientRulesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const vendor_auth_guard_1 = require("../auth/guards/vendor-auth.guard");
let RulesService = class RulesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getRules() {
        const [commissionRules, products] = await Promise.all([
            this.prisma.commissionRule.findMany({
                where: { isActive: true },
                orderBy: [{ periodType: 'asc' }, { quantityFrom: 'asc' }],
            }),
            this.prisma.product.findMany({
                where: { isActive: true },
                select: { name: true, indication: true, argumentKey: true, whyItWorks: true, sortOrder: true },
                orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
            }),
        ]);
        return {
            title: 'Offre de Fidélité - Les Vrais Naturels 2026',
            validity: "Valable toute l'année 2026",
            registrationBonus: { amount: 200, description: "Bonus d'adhésion offert à chaque nouveau vendeur enregistré" },
            fifteenDayRules: {
                description: "Commissions calculées sur une période de 15 jours à partir de votre date d'action",
                validityNote: "Cette offre est valable pendant 15 jours après l'acceptation",
                tiers: commissionRules
                    .filter((r) => r.periodType === '15_days')
                    .map((r) => ({
                    quantityFrom: r.quantityFrom,
                    quantityTo: r.quantityTo,
                    commissionPerProduct: r.commissionPerProduct,
                    bonusPerProduct: r.bonusPerProduct,
                    label: r.label,
                    example: r.quantityTo
                        ? `${r.quantityFrom} produits = ${r.quantityFrom * r.commissionPerProduct} DA`
                        : `${r.quantityFrom}+ produits = ${r.quantityFrom * r.commissionPerProduct} DA + bonus Top Vendeur`,
                })),
            },
            monthlyRules: {
                description: "Bonus d'accélération mensuel pour les vendeurs haute performance",
                tiers: commissionRules
                    .filter((r) => r.periodType === 'monthly')
                    .map((r) => ({
                    quantityFrom: r.quantityFrom,
                    quantityTo: r.quantityTo,
                    bonusPerProduct: r.bonusPerProduct,
                    label: r.label,
                })),
            },
            pharmacyBonus: {
                description: 'Bonus Pharmacie Performante',
                condition: "Si 2 vendeurs d'une même pharmacie atteignent le palier de 30 unités",
                reward: '2% de remise supplémentaire sur la prochaine commande globale',
            },
            products,
        };
    }
};
RulesService = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RulesService);
let ClientRulesController = class ClientRulesController {
    constructor(rulesService) {
        this.rulesService = rulesService;
    }
    getRules() { return this.rulesService.getRules(); }
};
exports.ClientRulesController = ClientRulesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiSecurity)('Card-Number'),
    (0, common_1.UseGuards)(vendor_auth_guard_1.VendorAuthGuard),
    (0, swagger_1.ApiOperation)({
        summary: "Règles de l'offre (vendeur)",
        description: 'Règles complètes, paliers de commission et liste des produits actifs de la gamme.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientRulesController.prototype, "getRules", null);
exports.ClientRulesController = ClientRulesController = __decorate([
    (0, swagger_1.ApiTags)('Règles'),
    (0, common_1.Controller)('client/rules'),
    __metadata("design:paramtypes", [RulesService])
], ClientRulesController);
let AdminRulesController = class AdminRulesController {
    constructor(rulesService) {
        this.rulesService = rulesService;
    }
    getRules() { return this.rulesService.getRules(); }
};
exports.AdminRulesController = AdminRulesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Règles de l'offre (admin)" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminRulesController.prototype, "getRules", null);
exports.AdminRulesController = AdminRulesController = __decorate([
    (0, swagger_1.ApiTags)('Règles'),
    (0, common_1.Controller)('admin/rules'),
    __metadata("design:paramtypes", [RulesService])
], AdminRulesController);
let RulesModule = class RulesModule {
};
exports.RulesModule = RulesModule;
exports.RulesModule = RulesModule = __decorate([
    (0, common_2.Module)({
        controllers: [ClientRulesController, AdminRulesController],
        providers: [RulesService],
    })
], RulesModule);
//# sourceMappingURL=rules.module.js.map