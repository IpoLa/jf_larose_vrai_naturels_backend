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
exports.PeriodsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PeriodsService = class PeriodsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCurrentOrCreate15DayPeriod(vendorId) {
        const vendor = await this.prisma.vendor.findUnique({
            where: { id: vendorId },
        });
        if (!vendor)
            return null;
        const now = new Date();
        const actionDate = new Date(vendor.actionDate);
        const diffMs = now.getTime() - actionDate.getTime();
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const cycleNumber = Math.floor(diffDays / 15);
        const startDate = new Date(actionDate);
        startDate.setDate(startDate.getDate() + cycleNumber * 15);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 15);
        endDate.setHours(23, 59, 59, 999);
        let period = await this.prisma.paymentPeriod.findFirst({
            where: {
                vendorId,
                periodType: '15_days',
                status: 'pending',
                startDate: { gte: startDate },
                endDate: { lte: endDate },
            },
        });
        if (!period) {
            period = await this.prisma.paymentPeriod.create({
                data: {
                    vendorId,
                    periodType: '15_days',
                    startDate,
                    endDate,
                    totalSales: 0,
                    totalCommission: 0,
                    status: 'pending',
                },
            });
        }
        return period;
    }
    async getCurrentOrCreateMonthlyPeriod(vendorId) {
        const now = new Date();
        const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
        let period = await this.prisma.paymentPeriod.findFirst({
            where: {
                vendorId,
                periodType: 'monthly',
                status: 'pending',
                startDate: { gte: startDate },
                endDate: { lte: endDate },
            },
        });
        if (!period) {
            period = await this.prisma.paymentPeriod.create({
                data: {
                    vendorId,
                    periodType: 'monthly',
                    startDate,
                    endDate,
                    totalSales: 0,
                    totalCommission: 0,
                    status: 'pending',
                },
            });
        }
        return period;
    }
    async getVendorPeriods(vendorId) {
        return this.prisma.paymentPeriod.findMany({
            where: { vendorId },
            include: {
                sales: {
                    select: {
                        id: true,
                        productName: true,
                        quantity: true,
                        saleDate: true,
                    },
                },
            },
            orderBy: { startDate: 'desc' },
        });
    }
    async updatePeriodTotals(periodId, totalCommission) {
        const sales = await this.prisma.sale.findMany({
            where: { periodId },
        });
        const totalSales = sales.reduce((sum, s) => sum + s.quantity, 0);
        return this.prisma.paymentPeriod.update({
            where: { id: periodId },
            data: {
                totalSales,
                totalCommission,
                updatedAt: new Date(),
            },
        });
    }
    async getPeriodProgress(vendorId) {
        const fifteenDayPeriod = await this.getCurrentOrCreate15DayPeriod(vendorId);
        const monthlyPeriod = await this.getCurrentOrCreateMonthlyPeriod(vendorId);
        const now = new Date();
        const daysRemaining15 = fifteenDayPeriod
            ? Math.ceil((new Date(fifteenDayPeriod.endDate).getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
            : 0;
        const daysRemainingMonthly = monthlyPeriod
            ? Math.ceil((new Date(monthlyPeriod.endDate).getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
            : 0;
        return {
            fifteenDayPeriod: {
                ...fifteenDayPeriod,
                daysRemaining: Math.max(0, daysRemaining15),
            },
            monthlyPeriod: {
                ...monthlyPeriod,
                daysRemaining: Math.max(0, daysRemainingMonthly),
            },
        };
    }
};
exports.PeriodsService = PeriodsService;
exports.PeriodsService = PeriodsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PeriodsService);
//# sourceMappingURL=periods.service.js.map