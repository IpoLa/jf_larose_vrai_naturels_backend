import { PrismaService } from '../../prisma/prisma.service';
import { SalesService } from '../sales/sales.service';
import { CommissionsService } from '../commissions/commissions.service';
import { PeriodsService } from '../periods/periods.service';
import { PaymentsService } from '../payments/payments.service';
declare class AddSaleDto {
    productName: string;
    quantity: number;
}
declare class UpdateProfileDto {
    name?: string;
    email?: string;
    phone?: string;
    ccp?: string;
    ccpKey?: string;
    rip?: string;
}
export declare class ClientAuthController {
    private prisma;
    constructor(prisma: PrismaService);
    verify(cardNumber: string): Promise<{
        authenticated: boolean;
        message: string;
        card_number?: undefined;
        role?: undefined;
        profile?: undefined;
    } | {
        authenticated: boolean;
        card_number: string;
        role: string;
        profile: {
            id: string;
            name: string;
            phone: string;
            email: string;
            pharmacyName: string;
            registrationBonus: boolean;
            region?: undefined;
            sector?: undefined;
        };
        message?: undefined;
    } | {
        authenticated: boolean;
        card_number: string;
        role: string;
        profile: {
            id: string;
            name: string;
            phone: string;
            email: string;
            region: string[];
            sector: string;
            pharmacyName?: undefined;
            registrationBonus?: undefined;
        };
        message?: undefined;
    }>;
}
export declare class ClientProfileController {
    private prisma;
    constructor(prisma: PrismaService);
    getProfile(req: any): {
        id: any;
        name: any;
        email: any;
        phone: any;
        ccp: any;
        ccpKey: any;
        rip: any;
        pharmacy: any;
        status: any;
        actionDate: any;
        registrationBonus: number;
        uniqueCardNumber: any;
    };
    updateProfile(req: any, dto: UpdateProfileDto): Promise<{
        pharmacy: {
            name: string;
        };
    } & {
        id: string;
        uniqueCardNumber: string;
        name: string | null;
        email: string | null;
        phone: string | null;
        ccp: string | null;
        ccpKey: string | null;
        rip: string | null;
        pharmacyId: string | null;
        status: string;
        actionDate: Date;
        registrationBonus: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export declare class ClientSalesController {
    private salesService;
    private commissionsService;
    constructor(salesService: SalesService, commissionsService: CommissionsService);
    addSale(req: any, dto: AddSaleDto): Promise<{
        sale: {
            product: {
                name: string;
                indication: string;
                imageUrl: string;
            };
        } & {
            id: string;
            createdAt: Date;
            productName: string;
            quantity: number;
            unitPrice: number;
            saleDate: Date;
            vendorId: string;
            productId: string | null;
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
    getHistory(req: any, limit?: number): Promise<({
        product: {
            name: string;
            indication: string;
            imageUrl: string;
        };
        period: {
            status: string;
            periodType: string;
            startDate: Date;
            endDate: Date;
            totalCommission: number;
        };
    } & {
        id: string;
        createdAt: Date;
        productName: string;
        quantity: number;
        unitPrice: number;
        saleDate: Date;
        vendorId: string;
        productId: string | null;
        periodId: string | null;
    })[]>;
    getProducts(): Promise<{
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
export declare class ClientDashboardController {
    private prisma;
    private commissionsService;
    private periodsService;
    private paymentsService;
    constructor(prisma: PrismaService, commissionsService: CommissionsService, periodsService: PeriodsService, paymentsService: PaymentsService);
    getDashboard(req: any): Promise<{
        vendor: {
            id: any;
            name: any;
            registrationBonus: number;
        };
        currentPeriod: {
            currentQuantity: number;
            nextTier: {
                nextTier: number | null;
                remaining: number | null;
                nextCommission: number | null;
                message: string;
            };
            daysRemaining: number;
            id: string;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            vendorId: string;
            periodType: string;
            startDate: Date;
            endDate: Date;
            totalSales: number;
            totalCommission: number;
            paidAt: Date | null;
        };
        monthlyPeriod: {
            daysRemaining: number;
            id: string;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            vendorId: string;
            periodType: string;
            startDate: Date;
            endDate: Date;
            totalSales: number;
            totalCommission: number;
            paidAt: Date | null;
        };
        totals: {
            allTimeSalesQuantity: number;
            allTimeSalesCount: number;
            totalCommissionEarned: number;
            paidCommission: number;
            pendingCommission: number;
        };
        recentPayments: {
            id: string;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            vendorId: string;
            periodType: string;
            startDate: Date;
            endDate: Date;
            totalSales: number;
            totalCommission: number;
            paidAt: Date | null;
        }[];
    }>;
}
export declare class ClientNotificationsController {
    private prisma;
    constructor(prisma: PrismaService);
    getNotifications(req: any): Promise<({
        notification: {
            id: string;
            createdAt: Date;
            message: string;
            title: string;
            type: string;
            targetType: string;
        };
    } & {
        id: string;
        notificationId: string;
        delegueId: string;
        isRead: boolean;
        readAt: Date | null;
    })[] | ({
        notification: {
            id: string;
            createdAt: Date;
            message: string;
            title: string;
            type: string;
            targetType: string;
        };
    } & {
        id: string;
        vendorId: string;
        notificationId: string;
        isRead: boolean;
        readAt: Date | null;
    })[]>;
    getUnreadCount(req: any): Promise<{
        count: number;
    }>;
    markRead(req: any, id: string): Promise<{
        success: boolean;
    }>;
    markAllRead(req: any): Promise<{
        success: boolean;
    }>;
}
export declare class ClientDelegueController {
    private prisma;
    constructor(prisma: PrismaService);
    getDelegueStats(req: any): Promise<{
        delegue: {
            id: any;
            name: any;
            region: any;
            sector: any;
        };
        summary: {
            activeVendors: number;
            pharmacies: number;
            monthlySales: number;
            totalCommissions: number;
        };
        topVendors: {
            id: string;
            name: string;
            phone: string;
            status: string;
            pharmacy: {
                id: string;
                name: string;
                region: string;
            };
            currentPeriodQty: number;
            pendingCommission: number;
        }[];
        vendors: {
            id: string;
            name: string;
            phone: string;
            status: string;
            pharmacy: {
                id: string;
                name: string;
                region: string;
            };
            currentPeriodQty: number;
            pendingCommission: number;
        }[];
        pharmacyStats: {
            vendorCount: number;
            id: string;
            name: string;
            region: string;
        }[];
    }>;
}
export declare class ClientModule {
}
export {};
