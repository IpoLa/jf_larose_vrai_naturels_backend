import { PrismaService } from '../../prisma/prisma.service';
import { CommissionsService } from '../commissions/commissions.service';
import { PeriodsService } from '../periods/periods.service';
import { ProductsService } from '../products/products.service';
export declare class SalesService {
    private prisma;
    private commissionsService;
    private periodsService;
    private productsService;
    constructor(prisma: PrismaService, commissionsService: CommissionsService, periodsService: PeriodsService, productsService: ProductsService);
    addSale(vendorId: string, productIdentifier: string, quantity: number): Promise<{
        sale: {
            product: {
                name: string;
                indication: string;
                imageUrl: string;
            };
        } & {
            id: string;
            vendorId: string;
            createdAt: Date;
            productId: string | null;
            productName: string;
            quantity: number;
            unitPrice: number;
            saleDate: Date;
            periodId: string | null;
        };
        period: {
            id: string;
            totalSales: number;
            commission: number;
            commissionPerProduct: number;
            tier: string;
        };
        monthlyBonus: {
            quantity: number;
            bonus: number;
            tier: string;
        };
        nextTier: {
            nextTier: number | null;
            remaining: number | null;
            nextCommission: number | null;
            message: string;
        };
    }>;
    getVendorSalesHistory(vendorId: string, limit?: number): Promise<({
        product: {
            name: string;
            indication: string;
            imageUrl: string;
        };
        period: {
            periodType: string;
            startDate: Date;
            endDate: Date;
            totalCommission: number;
            status: string;
        };
    } & {
        id: string;
        vendorId: string;
        createdAt: Date;
        productId: string | null;
        productName: string;
        quantity: number;
        unitPrice: number;
        saleDate: Date;
        periodId: string | null;
    })[]>;
    getAdminSalesHistory(query?: {
        vendorId?: string;
        pharmacyId?: string;
        productName?: string;
        productId?: string;
        from?: string;
        to?: string;
    }): Promise<({
        vendor: {
            id: string;
            name: string;
            phone: string;
            pharmacy: {
                name: string;
            };
        };
        product: {
            name: string;
            indication: string;
        };
        period: {
            periodType: string;
            startDate: Date;
            endDate: Date;
            status: string;
        };
    } & {
        id: string;
        vendorId: string;
        createdAt: Date;
        productId: string | null;
        productName: string;
        quantity: number;
        unitPrice: number;
        saleDate: Date;
        periodId: string | null;
    })[]>;
    getAvailableProducts(): Promise<{
        id: string;
        name: string;
        slug: string;
        indication: string;
        description: string;
        argumentKey: string;
        whyItWorks: string;
        imageUrl: string;
        sortOrder: number;
    }[]>;
}
