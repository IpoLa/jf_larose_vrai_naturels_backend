import { PrismaService } from '../../prisma/prisma.service';
declare class RulesService {
    private prisma;
    constructor(prisma: PrismaService);
    getRules(): Promise<{
        title: string;
        validity: string;
        registrationBonus: {
            amount: number;
            description: string;
        };
        fifteenDayRules: {
            description: string;
            validityNote: string;
            tiers: {
                quantityFrom: number;
                quantityTo: number;
                commissionPerProduct: number;
                bonusPerProduct: number;
                label: string;
                example: string;
            }[];
        };
        monthlyRules: {
            description: string;
            tiers: {
                quantityFrom: number;
                quantityTo: number;
                bonusPerProduct: number;
                label: string;
            }[];
        };
        pharmacyBonus: {
            description: string;
            condition: string;
            reward: string;
        };
        products: {
            name: string;
            indication: string;
            argumentKey: string;
            whyItWorks: string;
            sortOrder: number;
        }[];
    }>;
}
export declare class ClientRulesController {
    private rulesService;
    constructor(rulesService: RulesService);
    getRules(): Promise<{
        title: string;
        validity: string;
        registrationBonus: {
            amount: number;
            description: string;
        };
        fifteenDayRules: {
            description: string;
            validityNote: string;
            tiers: {
                quantityFrom: number;
                quantityTo: number;
                commissionPerProduct: number;
                bonusPerProduct: number;
                label: string;
                example: string;
            }[];
        };
        monthlyRules: {
            description: string;
            tiers: {
                quantityFrom: number;
                quantityTo: number;
                bonusPerProduct: number;
                label: string;
            }[];
        };
        pharmacyBonus: {
            description: string;
            condition: string;
            reward: string;
        };
        products: {
            name: string;
            indication: string;
            argumentKey: string;
            whyItWorks: string;
            sortOrder: number;
        }[];
    }>;
}
export declare class AdminRulesController {
    private rulesService;
    constructor(rulesService: RulesService);
    getRules(): Promise<{
        title: string;
        validity: string;
        registrationBonus: {
            amount: number;
            description: string;
        };
        fifteenDayRules: {
            description: string;
            validityNote: string;
            tiers: {
                quantityFrom: number;
                quantityTo: number;
                commissionPerProduct: number;
                bonusPerProduct: number;
                label: string;
                example: string;
            }[];
        };
        monthlyRules: {
            description: string;
            tiers: {
                quantityFrom: number;
                quantityTo: number;
                bonusPerProduct: number;
                label: string;
            }[];
        };
        pharmacyBonus: {
            description: string;
            condition: string;
            reward: string;
        };
        products: {
            name: string;
            indication: string;
            argumentKey: string;
            whyItWorks: string;
            sortOrder: number;
        }[];
    }>;
}
export declare class RulesModule {
}
export {};
