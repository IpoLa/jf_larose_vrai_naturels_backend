import { PrismaService } from '../../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
export declare class CreateDelegueDto {
    name: string;
    email?: string;
    phone?: string;
    region?: string[];
    sector?: string;
}
export declare class UpdateDelegueDto {
    name?: string;
    email?: string;
    phone?: string;
    region?: string[];
    sector?: string;
    status?: string;
}
export declare class DeleguesService {
    private prisma;
    private config;
    constructor(prisma: PrismaService, config: ConfigService);
    findAll(region?: string): Promise<({
        qrCodes: {
            id: string;
            isActive: boolean;
            uniqueKey: string;
            qrUrl: string;
            qrImageData: string | null;
            generatedAt: Date;
            delegueId: string;
        }[];
        _count: {
            notifications: number;
        };
    } & {
        id: string;
        phone: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        region: string[];
        status: string;
        uniqueCardNumber: string;
        email: string | null;
        sector: string | null;
    })[]>;
    findOne(id: string): Promise<{
        qrCodes: {
            id: string;
            isActive: boolean;
            uniqueKey: string;
            qrUrl: string;
            qrImageData: string | null;
            generatedAt: Date;
            delegueId: string;
        }[];
    } & {
        id: string;
        phone: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        region: string[];
        status: string;
        uniqueCardNumber: string;
        email: string | null;
        sector: string | null;
    }>;
    create(dto: CreateDelegueDto): Promise<{
        qrCodes: {
            id: string;
            isActive: boolean;
            uniqueKey: string;
            qrUrl: string;
            qrImageData: string | null;
            generatedAt: Date;
            delegueId: string;
        }[];
    } & {
        id: string;
        phone: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        region: string[];
        status: string;
        uniqueCardNumber: string;
        email: string | null;
        sector: string | null;
    }>;
    update(id: string, dto: UpdateDelegueDto): Promise<{
        id: string;
        phone: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        region: string[];
        status: string;
        uniqueCardNumber: string;
        email: string | null;
        sector: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        phone: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        region: string[];
        status: string;
        uniqueCardNumber: string;
        email: string | null;
        sector: string | null;
    }>;
    regenerateQr(id: string): Promise<{
        id: string;
        isActive: boolean;
        uniqueKey: string;
        qrUrl: string;
        qrImageData: string | null;
        generatedAt: Date;
        delegueId: string;
    }>;
    getRegionStats(regions: string[]): Promise<{
        regions: string[];
        totalVendors: number;
        totalPharmacies: number;
        totalSalesQuantity: number;
        vendors: {
            id: string;
            name: string;
            phone: string;
            pharmacyName: string;
            pendingCommission: number;
            periodSales: number;
        }[];
        pharmacies: ({
            _count: {
                vendors: number;
            };
        } & {
            id: string;
            phone: string | null;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            address: string | null;
            region: string | null;
            status: string;
        })[];
    }>;
}
