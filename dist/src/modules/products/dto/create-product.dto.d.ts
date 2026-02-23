export declare class CreateProductDto {
    name: string;
    slug?: string;
    indication: string;
    description?: string;
    argumentKey?: string;
    whyItWorks?: string;
    imageUrl?: string;
    sortOrder?: number;
    isActive?: boolean;
}
declare const UpdateProductDto_base: import("@nestjs/common").Type<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
}
export declare class ReorderProductsDto {
    items: {
        id: string;
        sortOrder: number;
    }[];
}
export {};
