"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommissionRuleDto = exports.CreateCommissionRuleDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateCommissionRuleDto {
}
exports.CreateCommissionRuleDto = CreateCommissionRuleDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Type de période',
        enum: ['15_days', 'monthly'],
        example: '15_days',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['15_days', 'monthly']),
    __metadata("design:type", String)
], CreateCommissionRuleDto.prototype, "periodType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantité minimale', example: 10 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateCommissionRuleDto.prototype, "quantityFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Quantité maximale (null = pas de limite)', example: 14 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCommissionRuleDto.prototype, "quantityTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Commission par produit (DA)', example: 50 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateCommissionRuleDto.prototype, "commissionPerProduct", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bonus par produit (DA)', example: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateCommissionRuleDto.prototype, "bonusPerProduct", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Libellé du palier', example: '10-14 produits : 50 DA/produit' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCommissionRuleDto.prototype, "label", void 0);
class UpdateCommissionRuleDto extends (0, swagger_1.PartialType)(CreateCommissionRuleDto) {
}
exports.UpdateCommissionRuleDto = UpdateCommissionRuleDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Règle active ou non' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateCommissionRuleDto.prototype, "isActive", void 0);
//# sourceMappingURL=commission-rule.dto.js.map