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
exports.SalesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const commissions_service_1 = require("../commissions/commissions.service");
const periods_service_1 = require("../periods/periods.service");
const products_service_1 = require("../products/products.service");
let SalesService = class SalesService {
    constructor(prisma, commissionsService, periodsService, productsService) {
        this.prisma = prisma;
        this.commissionsService = commissionsService;
        this.periodsService = periodsService;
        this.productsService = productsService;
    }
    async addSale(vendorId, productIdentifier, quantity) {
        if (quantity <= 0) {
            throw new common_1.BadRequestException('La quantité doit être supérieure à 0');
        }
        const product = await this.productsService.findByNameOrSlug(productIdentifier);
        if (!product) {
            const activeProducts = await this.productsService.findActive();
            const names = activeProducts.map((p) => p.name).join(', ');
            throw new common_1.BadRequestException(`Produit invalide ou inactif. Produits disponibles: ${names}`);
        }
        const period15 = await this.periodsService.getCurrentOrCreate15DayPeriod(vendorId);
        const periodMonthly = await this.periodsService.getCurrentOrCreateMonthlyPeriod(vendorId);
        const sale = await this.prisma.sale.create({
            data: {
                vendorId,
                productId: product.id,
                productName: product.name,
                quantity,
                saleDate: new Date(),
                periodId: period15.id,
            },
            include: {
                product: {
                    select: { name: true, indication: true, imageUrl: true },
                },
            },
        });
        const periodSales = await this.prisma.sale.aggregate({
            where: { vendorId, periodId: period15.id },
            _sum: { quantity: true },
        });
        const totalQty = periodSales._sum.quantity || 0;
        const commissionResult = await this.commissionsService.calculate15DayCommission(totalQty);
        await this.periodsService.updatePeriodTotals(period15.id, commissionResult.commission);
        const monthSales = await this.prisma.sale.aggregate({
            where: { vendorId, periodId: periodMonthly.id },
            _sum: { quantity: true },
        });
        const monthlyQty = monthSales._sum.quantity || 0;
        const monthlyBonus = await this.commissionsService.calculateMonthlyBonus(monthlyQty);
        const nextTier = await this.commissionsService.getNextTierInfo(totalQty);
        return {
            sale,
            period: {
                id: period15.id,
                totalSales: totalQty,
                commission: commissionResult.commission,
                commissionPerProduct: commissionResult.commissionPerProduct,
                tier: commissionResult.tier,
            },
            monthlyBonus: {
                quantity: monthlyQty,
                bonus: monthlyBonus.bonus,
                tier: monthlyBonus.tier,
            },
            nextTier,
        };
    }
    async getVendorSalesHistory(vendorId, limit = 50) {
        return this.prisma.sale.findMany({
            where: { vendorId },
            include: {
                product: {
                    select: { name: true, indication: true, imageUrl: true },
                },
                period: {
                    select: {
                        startDate: true,
                        endDate: true,
                        periodType: true,
                        totalCommission: true,
                        status: true,
                    },
                },
            },
            orderBy: { saleDate: 'desc' },
            take: limit,
        });
    }
    async getAdminSalesHistory(query) {
        const where = {};
        if (query?.vendorId)
            where.vendorId = query.vendorId;
        if (query?.productId)
            where.productId = query.productId;
        if (query?.productName)
            where.productName = query.productName.toUpperCase();
        if (query?.from || query?.to) {
            where.saleDate = {};
            if (query.from)
                where.saleDate.gte = new Date(query.from);
            if (query.to)
                where.saleDate.lte = new Date(query.to);
        }
        if (query?.pharmacyId) {
            where.vendor = { pharmacyId: query.pharmacyId };
        }
        return this.prisma.sale.findMany({
            where,
            include: {
                vendor: {
                    select: {
                        id: true,
                        name: true,
                        phone: true,
                        pharmacy: { select: { name: true } },
                    },
                },
                product: {
                    select: { name: true, indication: true },
                },
                period: {
                    select: {
                        startDate: true,
                        endDate: true,
                        periodType: true,
                        status: true,
                    },
                },
            },
            orderBy: { saleDate: 'desc' },
        });
    }
    async getAvailableProducts() {
        return this.productsService.findActive();
    }
};
exports.SalesService = SalesService;
exports.SalesService = SalesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        commissions_service_1.CommissionsService,
        periods_service_1.PeriodsService,
        products_service_1.ProductsService])
], SalesService);
//# sourceMappingURL=sales.service.js.map