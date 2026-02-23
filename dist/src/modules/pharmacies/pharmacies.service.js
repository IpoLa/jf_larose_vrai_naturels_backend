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
exports.PharmaciesService = exports.CreatePharmacyDto = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
class CreatePharmacyDto {
}
exports.CreatePharmacyDto = CreatePharmacyDto;
let PharmaciesService = class PharmaciesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(query) {
        const where = {};
        if (query?.region)
            where.region = query.region;
        if (query?.status)
            where.status = query.status;
        if (query?.search) {
            where.OR = [
                { name: { contains: query.search, mode: 'insensitive' } },
                { region: { contains: query.search, mode: 'insensitive' } },
            ];
        }
        return this.prisma.pharmacy.findMany({
            where,
            include: {
                _count: { select: { vendors: true } },
                vendors: {
                    where: { status: 'active' },
                    select: { id: true, name: true },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const pharmacy = await this.prisma.pharmacy.findUnique({
            where: { id },
            include: {
                vendors: {
                    include: { _count: { select: { sales: true } } },
                },
            },
        });
        if (!pharmacy)
            throw new common_1.NotFoundException('Pharmacie non trouvée');
        return pharmacy;
    }
    async create(dto) {
        return this.prisma.pharmacy.create({ data: { ...dto, status: 'active' } });
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.pharmacy.update({
            where: { id },
            data: { ...dto, updatedAt: new Date() },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.pharmacy.update({ where: { id }, data: { status: 'inactive' } });
    }
    async getTopPharmacies(limit = 10) {
        const pharmacies = await this.prisma.pharmacy.findMany({
            where: { status: 'active' },
            include: {
                vendors: {
                    include: {
                        sales: { select: { quantity: true } },
                        paymentPeriods: { select: { totalCommission: true } },
                    },
                },
            },
        });
        const ranked = pharmacies.map((p) => {
            const totalSales = p.vendors.reduce((sum, v) => sum + v.sales.reduce((s, sale) => s + sale.quantity, 0), 0);
            const totalCommission = p.vendors.reduce((sum, v) => sum + v.paymentPeriods.reduce((s, period) => s + period.totalCommission, 0), 0);
            return {
                id: p.id,
                name: p.name,
                region: p.region,
                vendorCount: p.vendors.length,
                totalSales,
                totalCommission,
            };
        });
        return ranked.sort((a, b) => b.totalSales - a.totalSales).slice(0, limit);
    }
};
exports.PharmaciesService = PharmaciesService;
exports.PharmaciesService = PharmaciesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PharmaciesService);
//# sourceMappingURL=pharmacies.service.js.map