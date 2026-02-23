import { IsString, IsNumber, IsOptional, IsBoolean, Min, IsIn } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';

export class CreateCommissionRuleDto {
  @ApiProperty({
    description: 'Type de période',
    enum: ['15_days', 'monthly'],
    example: '15_days',
  })
  @IsString()
  @IsIn(['15_days', 'monthly'])
  periodType: string;

  @ApiProperty({ description: 'Quantité minimale', example: 10 })
  @IsNumber()
  @Min(0)
  quantityFrom: number;

  @ApiPropertyOptional({ description: 'Quantité maximale (null = pas de limite)', example: 14 })
  @IsOptional()
  @IsNumber()
  quantityTo?: number | null;

  @ApiProperty({ description: 'Commission par produit (DA)', example: 50 })
  @IsNumber()
  @Min(0)
  commissionPerProduct: number;

  @ApiPropertyOptional({ description: 'Bonus par produit (DA)', example: 100 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  bonusPerProduct?: number;

  @ApiPropertyOptional({ description: 'Libellé du palier', example: '10-14 produits : 50 DA/produit' })
  @IsOptional()
  @IsString()
  label?: string;
}

export class UpdateCommissionRuleDto extends PartialType(CreateCommissionRuleDto) {
  @ApiPropertyOptional({ description: 'Règle active ou non' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
