import { QrCodesService } from './qr-codes.service';
export declare class QrCodesController {
    private readonly qrCodesService;
    constructor(qrCodesService: QrCodesService);
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
    getVendorQrCode(vendorId: string): Promise<{
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
}
