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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PaymentsService = class PaymentsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllPendingPayments() {
        return this.prisma.paymentPeriod.findMany({
            where: { status: 'pending', totalCommission: { gt: 0 } },
            include: {
                vendor: {
                    select: {
                        id: true,
                        name: true,
                        phone: true,
                        ccp: true,
                        ccpKey: true,
                        rip: true,
                        pharmacy: { select: { name: true } },
                    },
                },
            },
            orderBy: { endDate: 'asc' },
        });
    }
    async getAllPayments(query) {
        const where = {};
        if (query?.vendorId)
            where.vendorId = query.vendorId;
        if (query?.status)
            where.status = query.status;
        if (query?.periodType)
            where.periodType = query.periodType;
        return this.prisma.paymentPeriod.findMany({
            where,
            include: {
                vendor: {
                    select: {
                        id: true,
                        name: true,
                        phone: true,
                        ccp: true,
                        ccpKey: true,
                        rip: true,
                        pharmacy: { select: { name: true } },
                    },
                },
            },
            orderBy: { startDate: 'desc' },
        });
    }
    async markAsPaid(periodId) {
        const period = await this.prisma.paymentPeriod.findUnique({
            where: { id: periodId },
        });
        if (!period)
            throw new common_1.NotFoundException('Période de paiement non trouvée');
        return this.prisma.paymentPeriod.update({
            where: { id: periodId },
            data: {
                status: 'paid',
                paidAt: new Date(),
                updatedAt: new Date(),
            },
            include: {
                vendor: {
                    select: { name: true, phone: true, ccp: true },
                },
            },
        });
    }
    async getVendorPaymentHistory(vendorId) {
        return this.prisma.paymentPeriod.findMany({
            where: { vendorId },
            orderBy: { startDate: 'desc' },
        });
    }
    async getPaymentSummary() {
        const pending = await this.prisma.paymentPeriod.aggregate({
            where: { status: 'pending' },
            _sum: { totalCommission: true },
            _count: true,
        });
        const paid = await this.prisma.paymentPeriod.aggregate({
            where: { status: 'paid' },
            _sum: { totalCommission: true },
            _count: true,
        });
        return {
            pending: {
                count: pending._count,
                total: pending._sum.totalCommission || 0,
            },
            paid: {
                count: paid._count,
                total: paid._sum.totalCommission || 0,
            },
        };
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map