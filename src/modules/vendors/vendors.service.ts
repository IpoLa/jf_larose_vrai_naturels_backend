import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { QrCodesService } from '../qr-codes/qr-codes.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Injectable()
export class VendorsService {
  constructor(
      private prisma: PrismaService,
      private qrCodesService: QrCodesService,
  ) {}

  async findAll(query?: { pharmacyId?: string; status?: string; search?: string }) {
    const where: any = {};
    if (query?.pharmacyId) where.pharmacyId = query.pharmacyId;
    if (query?.status) where.status = query.status;
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

  async findOne(id: string) {
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
    if (!vendor) throw new NotFoundException('Vendeur non trouvé');
    return vendor;
  }

  async create(dto: CreateVendorDto) {
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

    // Generate QR code immediately (this sets the uniqueCardNumber)
    await this.qrCodesService.generateQrCode(vendor.id);

    // Apply registration bonus flag
    await this.prisma.vendor.update({
      where: { id: vendor.id },
      data: { registrationBonus: true },
    });

    // Create a pending paymentPeriod entry for the 200 DA registration bonus
    // so it appears in pending payments and is tracked correctly.
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

  async update(id: string, dto: UpdateVendorDto) {
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

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.vendor.update({
      where: { id },
      data: { status: 'inactive' },
    });
  }

  async getVendorStats(id: string) {
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
        // registrationBonus is now included in pendingCommission via its paymentPeriod entry
        registrationBonus: vendor.registrationBonus ? 200 : 0,
      },
    };
  }
}