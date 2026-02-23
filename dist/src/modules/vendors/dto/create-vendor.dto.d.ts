export declare class CreateVendorDto {
    name?: string;
    email?: string;
    phone?: string;
    ccp?: string;
    ccpKey?: string;
    rip?: string;
    pharmacyId?: string;
    actionDate?: string;
}
declare const UpdateVendorDto_base: import("@nestjs/common").Type<Partial<CreateVendorDto>>;
export declare class UpdateVendorDto extends UpdateVendorDto_base {
    status?: string;
}
export {};
