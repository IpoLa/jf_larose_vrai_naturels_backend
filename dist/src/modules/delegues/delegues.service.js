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
exports.DeleguesService = exports.UpdateDelegueDto = exports.CreateDelegueDto = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const QRCode = require("qrcode");
const uuid_1 = require("uuid");
const config_1 = require("@nestjs/config");
class CreateDelegueDto {
}
exports.CreateDelegueDto = CreateDelegueDto;
class UpdateDelegueDto {
}
exports.UpdateDelegueDto = UpdateDelegueDto;
let DeleguesService = class DeleguesService {
    constructor(prisma, config) {
        this.prisma = prisma;
        this.config = config;
    }
    async findAll(region) {
        return this.prisma.delegue.findMany({
            where: region ? { region: { has: region } } : undefined,
            include: {
                qrCodes: { where: { isActive: true }, take: 1 },
                _count: { select: { notifications: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const d = await this.prisma.delegue.findUnique({
            where: { id },
            include: { qrCodes: { where: { isActive: true } } },
        });
        if (!d)
            throw new common_1.NotFoundException('Délégué non trouvé');
        return d;
    }
    async create(dto) {
        const uniqueKey = (0, uuid_1.v4)();
        const clientBase = this.config.get('CLIENT_BASE_URL') || 'http://localhost:3000';
        const qrUrl = `${clientBase}/auth?card=${uniqueKey}&role=delegue`;
        const qrImageData = await QRCode.toDataURL(qrUrl, {
            width: 300,
            color: { dark: '#FFFFFF', light: '#C41230' },
            margin: 1,
        });
        const delegue = await this.prisma.delegue.create({
            data: {
                uniqueCardNumber: uniqueKey,
                name: dto.name,
                email: dto.email,
                phone: dto.phone,
                region: dto.region || [],
                sector: dto.sector,
                qrCodes: {
                    create: { uniqueKey, qrUrl, qrImageData, isActive: true },
                },
            },
            include: { qrCodes: true },
        });
        return delegue;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.delegue.update({ where: { id }, data: dto });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.delegue.update({ where: { id }, data: { status: 'inactive' } });
    }
    async regenerateQr(id) {
        await this.findOne(id);
        const uniqueKey = (0, uuid_1.v4)();
        const clientBase = this.config.get('CLIENT_BASE_URL') || 'http://localhost:3000';
        const qrUrl = `${clientBase}/auth?card=${uniqueKey}&role=delegue`;
        const qrImageData = await QRCode.toDataURL(qrUrl, {
            width: 300,
            color: { dark: '#FFFFFF', light: '#C41230' },
            margin: 1,
        });
        await this.prisma.delegueQrCode.updateMany({
            where: { delegueId: id, isActive: true },
            data: { isActive: false },
        });
        const qr = await this.prisma.delegueQrCode.create({
            data: { delegueId: id, uniqueKey, qrUrl, qrImageData, isActive: true },
        });
        await this.prisma.delegue.update({
            where: { id },
            data: { uniqueCardNumber: uniqueKey },
        });
        return qr;
    }
    async getRegionStats(regions) {
        if (!regions?.length)
            throw new common_1.BadRequestException('Aucune région assignée');
        const [vendors, pharmacies] = await Promise.all([
            this.prisma.vendor.findMany({
                where: { pharmacy: { region: { in: regions } }, status: 'active' },
                include: {
                    pharmacy: { select: { name: true, region: true } },
                    paymentPeriods: {
                        where: { status: 'pending', periodType: '15_days' },
                        select: { totalCommission: true, totalSales: true },
                    },
                },
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.pharmacy.findMany({
                where: { region: { in: regions }, status: 'active' },
                include: { _count: { select: { vendors: true } } },
            }),
        ]);
        const totalSales = await this.prisma.sale.aggregate({
            where: { vendor: { pharmacy: { region: { in: regions } } } },
            _sum: { quantity: true },
        });
        return {
            regions,
            totalVendors: vendors.length,
            totalPharmacies: pharmacies.length,
            totalSalesQuantity: totalSales._sum.quantity || 0,
            vendors: vendors.map((v) => ({
                id: v.id,
                name: v.name,
                phone: v.phone,
                pharmacyName: v.pharmacy?.name,
                pendingCommission: v.paymentPeriods.reduce((s, p) => s + p.totalCommission, 0),
                periodSales: v.paymentPeriods.reduce((s, p) => s + p.totalSales, 0),
            })),
            pharmacies,
        };
    }
};
exports.DeleguesService = DeleguesService;
exports.DeleguesService = DeleguesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], DeleguesService);
//# sourceMappingURL=delegues.service.js.map