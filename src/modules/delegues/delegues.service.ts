// src/modules/delegues/delegues.service.ts

import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';
import { ConfigService } from '@nestjs/config';

export class CreateDelegueDto {
    name: string;
    email?: string;
    phone?: string;
    region?: string[];
    sector?: string;
}

export class UpdateDelegueDto {
    name?: string;
    email?: string;
    phone?: string;
    region?: string[];
    sector?: string;
    status?: string;
}

@Injectable()
export class DeleguesService {
    constructor(
        private prisma: PrismaService,
        private config: ConfigService,
    ) {}

    async findAll(region?: string) {
        // For MySQL + Prisma: use Json filter syntax (array_contains)
        return this.prisma.delegue.findMany({
            where: region
                ? {
                    region: {
                        array_contains: [region],
                    },
                }
                : undefined,
            include: {
                qrCodes: { where: { isActive: true }, take: 1 },
                _count: { select: { notifications: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }

    async findOne(id: string) {
        const d = await this.prisma.delegue.findUnique({
            where: { id },
            include: { qrCodes: { where: { isActive: true } } },
        });
        if (!d) throw new NotFoundException('Délégué non trouvé');
        return d;
    }

    async create(dto: CreateDelegueDto) {
        const uniqueKey = uuidv4();
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
                region: dto.region || [], // Prisma will store as Json array
                sector: dto.sector,
                qrCodes: {
                    create: { uniqueKey, qrUrl, qrImageData, isActive: true },
                },
            },
            include: { qrCodes: true },
        });
        return delegue;
    }

    async update(id: string, dto: UpdateDelegueDto) {
        await this.findOne(id);
        return this.prisma.delegue.update({ where: { id }, data: dto });
    }

    async remove(id: string) {
        await this.findOne(id);
        return this.prisma.delegue.update({ where: { id }, data: { status: 'inactive' } });
    }

    async regenerateQr(id: string) {
        await this.findOne(id);
        const uniqueKey = uuidv4();
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

    async getRegionStats(regions: string[]) {
        if (!regions?.length) throw new BadRequestException('Aucune région assignée');

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
                pendingCommission: v.paymentPeriods.reduce((s, p) => s + (p.totalCommission || 0), 0),
                periodSales: v.paymentPeriods.reduce((s, p) => s + (p.totalSales || 0), 0),
            })),
            pharmacies,
        };
    }
}