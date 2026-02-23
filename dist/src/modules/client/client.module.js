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
exports.ClientModule = exports.ClientDelegueController = exports.ClientNotificationsController = exports.ClientDashboardController = exports.ClientSalesController = exports.ClientProfileController = exports.ClientAuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const swagger_2 = require("@nestjs/swagger");
const vendor_auth_guard_1 = require("../auth/guards/vendor-auth.guard");
const prisma_service_1 = require("../../prisma/prisma.service");
const sales_service_1 = require("../sales/sales.service");
const commissions_service_1 = require("../commissions/commissions.service");
const periods_service_1 = require("../periods/periods.service");
const payments_service_1 = require("../payments/payments.service");
const sales_module_1 = require("../sales/sales.module");
const commissions_module_1 = require("../commissions/commissions.module");
const periods_module_1 = require("../periods/periods.module");
const payments_module_1 = require("../payments/payments.module");
const delegues_service_1 = require("../delegues/delegues.service");
class AddSaleDto {
}
__decorate([
    (0, swagger_2.ApiProperty)({
        description: 'Nom ou slug du produit (doit être un produit actif)',
        example: 'CALMOTRIN',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddSaleDto.prototype, "productName", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({ description: 'Quantité vendue', example: 3, minimum: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], AddSaleDto.prototype, "quantity", void 0);
class UpdateProfileDto {
}
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ example: 'Ahmed Benali' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "name", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ example: 'ahmed@email.com' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "email", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ example: '0555000000' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ example: '0123456789' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "ccp", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ example: '12' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "ccpKey", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ example: '00799999000000000000' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "rip", void 0);
let ClientAuthController = class ClientAuthController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async verify(cardNumber) {
        if (!cardNumber?.trim()) {
            return { authenticated: false, message: 'card_number requis' };
        }
        const trimmed = cardNumber.trim();
        const vendor = await this.prisma.vendor.findUnique({
            where: { uniqueCardNumber: trimmed },
            include: { pharmacy: { select: { name: true } } },
        });
        if (vendor) {
            if (vendor.status !== 'active') {
                return { authenticated: false, message: 'Compte vendeur inactif' };
            }
            return {
                authenticated: true,
                card_number: vendor.uniqueCardNumber,
                role: 'vendor',
                profile: {
                    id: vendor.id,
                    name: vendor.name,
                    phone: vendor.phone,
                    email: vendor.email,
                    pharmacyName: vendor.pharmacy?.name || null,
                    registrationBonus: !!vendor.registrationBonus,
                },
            };
        }
        const delegue = await this.prisma.delegue.findUnique({
            where: { uniqueCardNumber: trimmed },
        });
        if (delegue) {
            if (delegue.status !== 'active') {
                return { authenticated: false, message: 'Compte délégué inactif' };
            }
            return {
                authenticated: true,
                card_number: delegue.uniqueCardNumber,
                role: 'delegue',
                profile: {
                    id: delegue.id,
                    name: delegue.name,
                    phone: delegue.phone,
                    email: delegue.email,
                    region: delegue.region,
                    sector: delegue.sector,
                },
            };
        }
        return { authenticated: false, message: 'Numéro de carte invalide' };
    }
};
exports.ClientAuthController = ClientAuthController;
__decorate([
    (0, common_1.Post)('verify'),
    (0, swagger_1.ApiOperation)({
        summary: 'Vérifier la carte vendeur',
        description: 'Authentifie le vendeur via son numéro de carte unique (paramètre QR code). ' +
            'Retourne un token de session à stocker localement et à envoyer dans le header x-card-number.',
    }),
    (0, swagger_1.ApiBody)({
        schema: {
            required: ['card_number'],
            properties: {
                card_number: {
                    type: 'string',
                    example: '550e8400-e29b-41d4-a716-446655440000',
                    description: 'Numéro unique présent dans le QR code',
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Vendeur authentifié – stocker card_number et l\'envoyer dans x-card-number',
        schema: {
            example: {
                authenticated: true,
                card_number: '550e8400-e29b-41d4-a716-446655440000',
                vendor: {
                    id: 'uuid',
                    name: 'Ahmed Benali',
                    phone: '0555000000',
                    pharmacyName: 'Pharmacie Centrale',
                },
            },
        },
    }),
    __param(0, (0, common_1.Body)('card_number')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientAuthController.prototype, "verify", null);
exports.ClientAuthController = ClientAuthController = __decorate([
    (0, swagger_1.ApiTags)('Client - Authentification'),
    (0, common_1.Controller)('client/auth'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientAuthController);
let ClientProfileController = class ClientProfileController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getProfile(req) {
        const v = req.vendor;
        return {
            id: v.id,
            name: v.name,
            email: v.email,
            phone: v.phone,
            ccp: v.ccp,
            ccpKey: v.ccpKey,
            rip: v.rip,
            pharmacy: v.pharmacy,
            status: v.status,
            actionDate: v.actionDate,
            registrationBonus: v.registrationBonus ? 200 : 0,
            uniqueCardNumber: v.uniqueCardNumber,
        };
    }
    async updateProfile(req, dto) {
        return this.prisma.vendor.update({
            where: { id: req.vendor.id },
            data: { ...dto, updatedAt: new Date() },
            include: { pharmacy: { select: { name: true } } },
        });
    }
};
exports.ClientProfileController = ClientProfileController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Voir mon profil',
        description: 'Profil complet du vendeur. Authentification: envoyer le card_number dans le header x-card-number.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Profil du vendeur' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'x-card-number manquant ou invalide' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientProfileController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Put)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Modifier mon profil',
        description: 'Mise à jour des informations personnelles.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Profil mis à jour' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateProfileDto]),
    __metadata("design:returntype", Promise)
], ClientProfileController.prototype, "updateProfile", null);
exports.ClientProfileController = ClientProfileController = __decorate([
    (0, swagger_1.ApiTags)('Client - Profil'),
    (0, swagger_1.ApiSecurity)('Card-Number'),
    (0, common_1.UseGuards)(vendor_auth_guard_1.VendorAuthGuard),
    (0, common_1.Controller)('client/profile'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientProfileController);
let ClientSalesController = class ClientSalesController {
    constructor(salesService, commissionsService) {
        this.salesService = salesService;
        this.commissionsService = commissionsService;
    }
    async addSale(req, dto) {
        return this.salesService.addSale(req.vendor.id, dto.productName, dto.quantity);
    }
    getHistory(req, limit) {
        return this.salesService.getVendorSalesHistory(req.vendor.id, Number(limit) || 50);
    }
    getProducts() {
        return this.salesService.getAvailableProducts();
    }
};
exports.ClientSalesController = ClientSalesController;
__decorate([
    (0, common_1.Post)('add'),
    (0, swagger_1.ApiOperation)({
        summary: 'Enregistrer une vente',
        description: 'Ajoute une vente, valide le produit en base de données et recalcule la commission automatiquement.',
    }),
    (0, swagger_1.ApiBody)({ type: AddSaleDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Vente enregistrée avec commission calculée',
        schema: {
            example: {
                sale: { id: 'uuid', productName: 'CALMOTRIN', quantity: 5 },
                period: { totalSales: 15, commission: 900, tier: '15-19 produits' },
                nextTier: { remaining: 5, message: 'Plus que 5 ventes pour 1400 DA!' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Produit invalide ou quantité incorrecte' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, AddSaleDto]),
    __metadata("design:returntype", Promise)
], ClientSalesController.prototype, "addSale", null);
__decorate([
    (0, common_1.Get)('history'),
    (0, swagger_1.ApiOperation)({
        summary: 'Historique des ventes',
        description: 'Toutes les ventes du vendeur avec détails produit et période.',
    }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des ventes' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], ClientSalesController.prototype, "getHistory", null);
__decorate([
    (0, common_1.Get)('products'),
    (0, swagger_1.ApiOperation)({
        summary: 'Liste des produits disponibles',
        description: 'Retourne tous les produits actifs avec indication et argumentaire.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Produits actifs' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientSalesController.prototype, "getProducts", null);
exports.ClientSalesController = ClientSalesController = __decorate([
    (0, swagger_1.ApiTags)('Client - Ventes'),
    (0, swagger_1.ApiSecurity)('Card-Number'),
    (0, common_1.UseGuards)(vendor_auth_guard_1.VendorAuthGuard),
    (0, common_1.Controller)('client/sales'),
    __metadata("design:paramtypes", [sales_service_1.SalesService,
        commissions_service_1.CommissionsService])
], ClientSalesController);
let ClientDashboardController = class ClientDashboardController {
    constructor(prisma, commissionsService, periodsService, paymentsService) {
        this.prisma = prisma;
        this.commissionsService = commissionsService;
        this.periodsService = periodsService;
        this.paymentsService = paymentsService;
    }
    async getDashboard(req) {
        const vendorId = req.vendor.id;
        const [periodProgress, paymentHistory, totalSalesAllTime] = await Promise.all([
            this.periodsService.getPeriodProgress(vendorId),
            this.paymentsService.getVendorPaymentHistory(vendorId),
            this.prisma.sale.aggregate({
                where: { vendorId },
                _sum: { quantity: true },
                _count: true,
            }),
        ]);
        const { fifteenDayPeriod, monthlyPeriod } = periodProgress;
        const current15DaySales = fifteenDayPeriod
            ? await this.prisma.sale.aggregate({
                where: { vendorId, periodId: fifteenDayPeriod.id },
                _sum: { quantity: true },
            })
            : null;
        const current15DayQty = current15DaySales?._sum?.quantity || 0;
        const nextTier = await this.commissionsService.getNextTierInfo(current15DayQty);
        const totalCommission = paymentHistory.reduce((s, p) => s + p.totalCommission, 0);
        const paidCommission = paymentHistory
            .filter((p) => p.status === 'paid')
            .reduce((s, p) => s + p.totalCommission, 0);
        const pendingCommission = paymentHistory
            .filter((p) => p.status === 'pending')
            .reduce((s, p) => s + p.totalCommission, 0);
        return {
            vendor: {
                id: req.vendor.id,
                name: req.vendor.name,
                registrationBonus: req.vendor.registrationBonus ? 200 : 0,
            },
            currentPeriod: { ...fifteenDayPeriod, currentQuantity: current15DayQty, nextTier },
            monthlyPeriod,
            totals: {
                allTimeSalesQuantity: totalSalesAllTime._sum.quantity || 0,
                allTimeSalesCount: totalSalesAllTime._count,
                totalCommissionEarned: totalCommission,
                paidCommission,
                pendingCommission,
            },
            recentPayments: paymentHistory.slice(0, 5),
        };
    }
};
exports.ClientDashboardController = ClientDashboardController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Tableau de bord vendeur',
        description: 'Résumé complet: période 15j en cours, bonus mensuel, totaux de ventes, commissions et statut des paiements.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Données du tableau de bord' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientDashboardController.prototype, "getDashboard", null);
exports.ClientDashboardController = ClientDashboardController = __decorate([
    (0, swagger_1.ApiTags)('Client - Tableau de bord'),
    (0, swagger_1.ApiSecurity)('Card-Number'),
    (0, common_1.UseGuards)(vendor_auth_guard_1.VendorAuthGuard),
    (0, common_1.Controller)('client/dashboard'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        commissions_service_1.CommissionsService,
        periods_service_1.PeriodsService,
        payments_service_1.PaymentsService])
], ClientDashboardController);
let ClientNotificationsController = class ClientNotificationsController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getNotifications(req) {
        const cardHolder = req.cardHolder;
        if (cardHolder.role === 'delegue') {
            return this.prisma.delegueNotification.findMany({
                where: { delegueId: cardHolder.id },
                include: { notification: true },
                orderBy: { notification: { createdAt: 'desc' } },
                take: 50,
            });
        }
        return this.prisma.vendorNotification.findMany({
            where: { vendorId: cardHolder.id },
            include: { notification: true },
            orderBy: { notification: { createdAt: 'desc' } },
            take: 50,
        });
    }
    async getUnreadCount(req) {
        const cardHolder = req.cardHolder;
        let count;
        if (cardHolder.role === 'delegue') {
            count = await this.prisma.delegueNotification.count({
                where: { delegueId: cardHolder.id, isRead: false },
            });
        }
        else {
            count = await this.prisma.vendorNotification.count({
                where: { vendorId: cardHolder.id, isRead: false },
            });
        }
        return { count };
    }
    async markRead(req, id) {
        const cardHolder = req.cardHolder;
        const now = new Date();
        if (cardHolder.role === 'delegue') {
            await this.prisma.delegueNotification.updateMany({
                where: { notificationId: id, delegueId: cardHolder.id },
                data: { isRead: true, readAt: now },
            });
        }
        else {
            await this.prisma.vendorNotification.updateMany({
                where: { notificationId: id, vendorId: cardHolder.id },
                data: { isRead: true, readAt: now },
            });
        }
        return { success: true };
    }
    async markAllRead(req) {
        const cardHolder = req.cardHolder;
        const now = new Date();
        if (cardHolder.role === 'delegue') {
            await this.prisma.delegueNotification.updateMany({
                where: { delegueId: cardHolder.id, isRead: false },
                data: { isRead: true, readAt: now },
            });
        }
        else {
            await this.prisma.vendorNotification.updateMany({
                where: { vendorId: cardHolder.id, isRead: false },
                data: { isRead: true, readAt: now },
            });
        }
        return { success: true };
    }
};
exports.ClientNotificationsController = ClientNotificationsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Lister les notifications du vendeur / délégué' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientNotificationsController.prototype, "getNotifications", null);
__decorate([
    (0, common_1.Get)('unread-count'),
    (0, swagger_1.ApiOperation)({ summary: 'Nombre de notifications non lues' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientNotificationsController.prototype, "getUnreadCount", null);
__decorate([
    (0, common_1.Post)(':id/read'),
    (0, swagger_1.ApiOperation)({ summary: 'Marquer une notification comme lue' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ClientNotificationsController.prototype, "markRead", null);
__decorate([
    (0, common_1.Post)('mark-all-read'),
    (0, swagger_1.ApiOperation)({ summary: 'Marquer toutes les notifications comme lues' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientNotificationsController.prototype, "markAllRead", null);
exports.ClientNotificationsController = ClientNotificationsController = __decorate([
    (0, swagger_1.ApiTags)('Client - Notifications'),
    (0, swagger_1.ApiSecurity)('Card-Number'),
    (0, common_1.UseGuards)(vendor_auth_guard_1.VendorAuthGuard),
    (0, common_1.Controller)('client/notifications'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientNotificationsController);
let ClientDelegueController = class ClientDelegueController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDelegueStats(req) {
        const cardHolder = req.cardHolder;
        if (cardHolder.role !== 'delegue') {
            throw new common_1.ForbiddenException('Accès réservé aux délégués');
        }
        const regions = cardHolder.region;
        if (!regions?.length) {
            throw new common_1.BadRequestException('Région non définie pour ce délégué');
        }
        const [vendors, pharmacies, monthlySalesAgg, totalCommissionsAgg] = await Promise.all([
            this.prisma.vendor.findMany({
                where: {
                    status: 'active',
                    pharmacy: { region: { in: regions } },
                },
                include: {
                    pharmacy: { select: { id: true, name: true, region: true } },
                    sales: {
                        where: {
                            saleDate: {
                                gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                            },
                        },
                        select: { quantity: true },
                    },
                    paymentPeriods: {
                        where: { status: 'pending' },
                        select: { totalCommission: true },
                    },
                },
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.pharmacy.findMany({
                where: { region: { in: regions }, status: 'active' },
                select: { id: true, name: true, region: true },
            }),
            this.prisma.sale.aggregate({
                where: {
                    vendor: { pharmacy: { region: { in: regions } } },
                    saleDate: { gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) },
                },
                _sum: { quantity: true },
            }),
            this.prisma.paymentPeriod.aggregate({
                where: {
                    vendor: { pharmacy: { region: { in: regions } } },
                    status: 'pending',
                },
                _sum: { totalCommission: true },
            }),
        ]);
        const enrichedVendors = vendors.map((v) => ({
            id: v.id,
            name: v.name,
            phone: v.phone,
            status: v.status,
            pharmacy: v.pharmacy,
            currentPeriodQty: v.sales.reduce((sum, s) => sum + s.quantity, 0),
            pendingCommission: v.paymentPeriods.reduce((sum, p) => sum + p.totalCommission, 0),
        }));
        const topVendors = [...enrichedVendors]
            .sort((a, b) => b.currentPeriodQty - a.currentPeriodQty)
            .slice(0, 10);
        const pharmacyStats = pharmacies.map((pharm) => ({
            ...pharm,
            vendorCount: vendors.filter((v) => v.pharmacyId === pharm.id).length,
        })).filter(p => p.vendorCount > 0);
        return {
            delegue: {
                id: cardHolder.id,
                name: cardHolder.name,
                region: cardHolder.region,
                sector: cardHolder.sector || null,
            },
            summary: {
                activeVendors: vendors.length,
                pharmacies: pharmacies.length,
                monthlySales: monthlySalesAgg._sum.quantity || 0,
                totalCommissions: totalCommissionsAgg._sum.totalCommission || 0,
            },
            topVendors,
            vendors: enrichedVendors,
            pharmacyStats,
        };
    }
};
exports.ClientDelegueController = ClientDelegueController;
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({
        summary: 'Statistiques secteur (Délégué Commercial uniquement)',
        description: 'Accès lecture seule aux données des vendeurs du secteur.',
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientDelegueController.prototype, "getDelegueStats", null);
exports.ClientDelegueController = ClientDelegueController = __decorate([
    (0, swagger_1.ApiTags)('Client - Délégué'),
    (0, swagger_1.ApiSecurity)('Card-Number'),
    (0, common_1.UseGuards)(vendor_auth_guard_1.VendorAuthGuard),
    (0, common_1.Controller)('client/delegue'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientDelegueController);
let ClientModule = class ClientModule {
};
exports.ClientModule = ClientModule;
exports.ClientModule = ClientModule = __decorate([
    (0, common_2.Module)({
        imports: [sales_module_1.SalesModule, commissions_module_1.CommissionsModule, periods_module_1.PeriodsModule, payments_module_1.PaymentsModule],
        controllers: [
            ClientAuthController,
            ClientProfileController,
            ClientSalesController,
            ClientDashboardController,
            ClientNotificationsController,
            ClientDelegueController,
        ],
        providers: [delegues_service_1.DeleguesService],
    })
], ClientModule);
//# sourceMappingURL=client.module.js.map