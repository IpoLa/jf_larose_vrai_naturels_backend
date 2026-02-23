import { PrismaService } from '../../prisma/prisma.service';
export declare class DashboardService {
    private prisma;
    constructor(prisma: PrismaService);
    getAdminDashboard(): Promise<{
        vendors: number;
        pharmacies: number;
        totalSalesQuantity: number;
        totalSalesTransactions: number;
        pendingCommissions: number;
        pendingPaymentsCount: number;
    }>;
    getTopVendors(limit?: number, periodType?: string): Promise<{
        id: string;
        name: string;
        phone: string;
        pharmacy: {
            name: string;
            region: string;
        };
        totalQuantitySold: number;
        totalCommission: number;
        paidCommission: number;
        pendingCommission: number;
    }[]>;
    getTopPharmacies(limit?: number): Promise<{
        id: string;
        name: string;
        region: string;
        activeVendors: number;
        totalSales: number;
        totalCommission: number;
    }[]>;
    getRecentActivity(): Promise<({
        vendor: {
            name: string;
            pharmacy: {
                name: string;
            };
        };
    } & {
        quantity: number;
        unitPrice: number;
        id: string;
        createdAt: Date;
        vendorId: string;
        productId: string | null;
        productName: string;
        saleDate: Date;
        periodId: string | null;
    })[]>;
}
