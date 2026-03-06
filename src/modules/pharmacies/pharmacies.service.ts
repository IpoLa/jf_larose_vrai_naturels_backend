import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

export class CreatePharmacyDto {
  name: string;
  address?: string;
  phone?: string;
  region?: string;
}

@Injectable()
export class PharmaciesService {
  constructor(private prisma: PrismaService) {}

  async findAll(query?: { region?: string; status?: string; search?: string }) {
    const where: any = {};
    if (query?.region) where.region = query.region;
    if (query?.status) where.status = query.status;
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

  async findOne(id: string) {
    const pharmacy = await this.prisma.pharmacy.findUnique({
      where: { id },
      include: {
        vendors: {
          include: { _count: { select: { sales: true } } },
        },
      },
    });
    if (!pharmacy) throw new NotFoundException('Pharmacie non trouvée');
    return pharmacy;
  }

  async create(dto: CreatePharmacyDto) {
    return this.prisma.pharmacy.create({ data: { ...dto, status: 'active' } });
  }

  async update(id: string, dto: Partial<CreatePharmacyDto> & { status?: string }) {
    await this.findOne(id);
    return this.prisma.pharmacy.update({
      where: { id },
      data: { ...dto, updatedAt: new Date() },
    });
  }

  async remove(id: string) {
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
      const totalSales = p.vendors.reduce(
          (sum, v) => sum + v.sales.reduce((s, sale) => s + sale.quantity, 0),
          0,
      );
      const totalCommission = p.vendors.reduce(
          (sum, v) => sum + v.paymentPeriods.reduce((s, period) => s + period.totalCommission, 0),
          0,
      );
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
}