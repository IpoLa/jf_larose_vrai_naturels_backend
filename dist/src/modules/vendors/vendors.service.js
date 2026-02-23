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
exports.VendorsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const qr_codes_service_1 = require("../qr-codes/qr-codes.service");
let VendorsService = class VendorsService {
    constructor(prisma, qrCodesService) {
        this.prisma = prisma;
        this.qrCodesService = qrCodesService;
    }
    async findAll(query) {
        const where = {};
        if (query?.pharmacyId)
            where.pharmacyId = query.pharmacyId;
        if (query?.status)
            where.status = query.status;
        if (query?.search) {
            where.OR = [
                { name: { contains: query.search, mode: 'insensitive' } },
                { phone: { contains: query.search } },
                { uniqueCardNumber: { contains: query.search } },
            ];
        }
        return this.prisma.vendor.findMany({
            where,
            include: {
                pharmacy: { select: { id: true, name: true, region: true } },
                qrCodes: { where: { isActive: true }, select: { uniqueKey: true, qrUrl: true, qrImageData: true } },
                _count: { select: { sales: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const vendor = await this.prisma.vendor.findUnique({
            where: { id },
            include: {
                pharmacy: true,
                qrCodes: { where: { isActive: true }, orderBy: { generatedAt: 'desc' }, take: 1 },
                paymentPeriods: {
                    orderBy: { startDate: 'desc' },
                    take: 10,
                },
            },
        });
        if (!vendor)
            throw new common_1.NotFoundException('Vendeur non trouvé');
        return vendor;
    }
    async create(dto) {
        const vendor = await this.prisma.vendor.create({
            data: {
                uniqueCardNumber: `TEMP-${Date.now()}`,
                name: dto.name,
                email: dto.email,
                phone: dto.phone,
                ccp: dto.ccp,
                ccpKey: dto.ccpKey,
                rip: dto.rip,
                pharmacyId: dto.pharmacyId,
                actionDate: dto.actionDate ? new Date(dto.actionDate) : new Date(),
                status: 'active',
                registrationBonus: false,
            },
        });
        await this.qrCodesService.generateQrCode(vendor.id);
        await this.prisma.vendor.update({
            where: { id: vendor.id },
            data: { registrationBonus: true },
        });
        const now = new Date();
        await this.prisma.paymentPeriod.create({
            data: {
                vendorId: vendor.id,
                periodType: 'registration_bonus',
                startDate: now,
                endDate: now,
                totalSales: 0,
                totalCommission: 200,
                status: 'pending',
            },
        });
        return this.findOne(vendor.id);
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.vendor.update({
            where: { id },
            data: {
                ...dto,
                actionDate: dto.actionDate ? new Date(dto.actionDate) : undefined,
                updatedAt: new Date(),
            },
            include: { pharmacy: true },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.vendor.update({
            where: { id },
            data: { status: 'inactive' },
        });
    }
    async getVendorStats(id) {
        const vendor = await this.findOne(id);
        const totalSalesAllTime = await this.prisma.sale.aggregate({
            where: { vendorId: id },
            _sum: { quantity: true },
            _count: true,
        });
        const totalCommissionAllTime = await this.prisma.paymentPeriod.aggregate({
            where: { vendorId: id },
            _sum: { totalCommission: true },
        });
        const paidCommission = await this.prisma.paymentPeriod.aggregate({
            where: { vendorId: id, status: 'paid' },
            _sum: { totalCommission: true },
        });
        const pendingCommission = await this.prisma.paymentPeriod.aggregate({
            where: { vendorId: id, status: 'pending' },
            _sum: { totalCommission: true },
        });
        return {
            vendor,
            stats: {
                totalQuantitySold: totalSalesAllTime._sum.quantity || 0,
                totalSaleCount: totalSalesAllTime._count || 0,
                totalCommissionEarned: totalCommissionAllTime._sum.totalCommission || 0,
                paidCommission: paidCommission._sum.totalCommission || 0,
                pendingCommission: pendingCommission._sum.totalCommission || 0,
                registrationBonus: vendor.registrationBonus ? 200 : 0,
            },
        };
    }
};
exports.VendorsService = VendorsService;
exports.VendorsService = VendorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        qr_codes_service_1.QrCodesService])
], VendorsService);
//# sourceMappingURL=vendors.service.js.map