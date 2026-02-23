export declare class CreateCommissionRuleDto {
    periodType: string;
    quantityFrom: number;
    quantityTo?: number | null;
    commissionPerProduct: number;
    bonusPerProduct?: number;
    label?: string;
}
declare const UpdateCommissionRuleDto_base: import("@nestjs/common").Type<Partial<CreateCommissionRuleDto>>;
export declare class UpdateCommissionRuleDto extends UpdateCommissionRuleDto_base {
    isActive?: boolean;
}
export {};
