import { CommissionsService } from './commissions.service';
import { CreateCommissionRuleDto, UpdateCommissionRuleDto } from './dto/commission-rule.dto';
export declare class CommissionsController {
    private readonly commissionsService;
    constructor(commissionsService: CommissionsService);
    getAllRules(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        periodType: string;
        quantityFrom: number;
        quantityTo: number | null;
        commissionPerProduct: number;
        bonusPerProduct: number;
        label: string | null;
    }[]>;
    createRule(dto: CreateCommissionRuleDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        periodType: string;
        quantityFrom: number;
        quantityTo: number | null;
        commissionPerProduct: number;
        bonusPerProduct: number;
        label: string | null;
    }>;
    updateRule(id: string, dto: UpdateCommissionRuleDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        periodType: string;
        quantityFrom: number;
        quantityTo: number | null;
        commissionPerProduct: number;
        bonusPerProduct: number;
        label: string | null;
    }>;
    deleteRule(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        periodType: string;
        quantityFrom: number;
        quantityTo: number | null;
        commissionPerProduct: number;
        bonusPerProduct: number;
        label: string | null;
    }>;
}
