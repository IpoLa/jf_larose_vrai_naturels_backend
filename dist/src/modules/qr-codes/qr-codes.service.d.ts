import { PrismaService } from '../../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
export declare class QrCodesService {
    private prisma;
    private configService;
    constructor(prisma: PrismaService, configService: ConfigService);
    private getBaseUrl;
    generateQrCode(vendorId: string): Promise<{
        id: string;
        isActive: boolean;
        uniqueKey: string;
        qrUrl: string;
        qrImageData: string | null;
        generatedAt: Date;
        vendorId: string;
    }>;
    regenerateQrCode(vendorId: string): Promise<{
        id: string;
        isActive: boolean;
        uniqueKey: string;
        qrUrl: string;
        qrImageData: string | null;
        generatedAt: Date;
        vendorId: string;
    }>;
    getVendorQrCode(vendorId: string): Promise<{
        id: string;
        isActive: boolean;
        uniqueKey: string;
        qrUrl: string;
        qrImageData: string | null;
        generatedAt: Date;
        vendorId: string;
    }>;
    getAllQrCodes(): Promise<({
        vendor: {
            id: string;
            name: string;
            pharmacy: {
                name: string;
            };
        };
    } & {
        id: string;
        isActive: boolean;
        uniqueKey: string;
        qrUrl: string;
        qrImageData: string | null;
        generatedAt: Date;
        vendorId: string;
    })[]>;
}
