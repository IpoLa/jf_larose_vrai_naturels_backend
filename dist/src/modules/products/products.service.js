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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(activeOnly = false) {
        return this.prisma.product.findMany({
            where: activeOnly ? { isActive: true } : undefined,
            include: {
                _count: { select: { sales: true } },
            },
            orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
        });
    }
    async findActive() {
        return this.prisma.product.findMany({
            where: { isActive: true },
            select: {
                id: true,
                name: true,
                slug: true,
                indication: true,
                description: true,
                argumentKey: true,
                whyItWorks: true,
                imageUrl: true,
                sortOrder: true,
            },
            orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
        });
    }
    async findOne(id) {
        const product = await this.prisma.product.findUnique({
            where: { id },
            include: { _count: { select: { sales: true } } },
        });
        if (!product)
            throw new common_1.NotFoundException('Produit non trouvé');
        return product;
    }
    async findByNameOrSlug(nameOrSlug) {
        return this.prisma.product.findFirst({
            where: {
                isActive: true,
                OR: [
                    { name: { equals: nameOrSlug.toUpperCase() } },
                    { slug: { equals: nameOrSlug.toLowerCase() } },
                ],
            },
        });
    }
    async create(dto) {
        const slug = dto.slug || dto.name.toLowerCase().replace(/\s+/g, '-');
        const existing = await this.prisma.product.findFirst({
            where: { OR: [{ name: dto.name.toUpperCase() }, { slug }] },
        });
        if (existing)
            throw new common_1.ConflictException('Un produit avec ce nom ou slug existe déjà');
        return this.prisma.product.create({
            data: {
                name: dto.name.toUpperCase(),
                slug,
                indication: dto.indication,
                description: dto.description,
                argumentKey: dto.argumentKey,
                whyItWorks: dto.whyItWorks,
                imageUrl: dto.imageUrl,
                sortOrder: dto.sortOrder ?? 0,
                isActive: dto.isActive ?? true,
            },
        });
    }
    async update(id, dto) {
        await this.findOne(id);
        const data = { ...dto, updatedAt: new Date() };
        if (dto.name)
            data.name = dto.name.toUpperCase();
        if (dto.slug)
            data.slug = dto.slug.toLowerCase();
        return this.prisma.product.update({ where: { id }, data });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.product.update({
            where: { id },
            data: { isActive: false, updatedAt: new Date() },
        });
    }
    async reorder(items) {
        await Promise.all(items.map((item) => this.prisma.product.update({
            where: { id: item.id },
            data: { sortOrder: item.sortOrder },
        })));
        return this.findAll();
    }
    async getProductStats() {
        const products = await this.prisma.product.findMany({
            include: {
                _count: { select: { sales: true } },
                sales: { select: { quantity: true } },
            },
            orderBy: { sortOrder: 'asc' },
        });
        return products.map((p) => ({
            id: p.id,
            name: p.name,
            indication: p.indication,
            isActive: p.isActive,
            totalTransactions: p._count.sales,
            totalQuantitySold: p.sales.reduce((sum, s) => sum + s.quantity, 0),
        }));
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map