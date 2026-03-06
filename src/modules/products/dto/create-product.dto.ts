import { IsString, IsOptional, IsBoolean, IsNumber, Min, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'Nom du produit (sera mis en majuscules)', example: 'CALMOTRIN' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ description: 'Slug URL unique (généré automatiquement si absent)', example: 'calmotrin' })
  @IsOptional()
  @IsString()
  slug?: string;

  @ApiProperty({ description: 'Indication thérapeutique', example: 'Douleurs articulaires et musculaires' })
  @IsString()
  @IsNotEmpty()
  indication: string;

  @ApiPropertyOptional({ description: 'Description détaillée du produit' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Argument clé vendeur (argumentaire flash)' })
  @IsOptional()
  @IsString()
  argumentKey?: string;

  @ApiPropertyOptional({ description: 'Explication de l\'efficacité (pourquoi ça marche)' })
  @IsOptional()
  @IsString()
  whyItWorks?: string;

  @ApiPropertyOptional({ description: 'URL de l\'image produit' })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiPropertyOptional({ description: 'Ordre d\'affichage', example: 1, default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  sortOrder?: number;

  @ApiPropertyOptional({ description: 'Produit actif', default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

export class ReorderProductsDto {
  @ApiProperty({
    description: 'Tableau des produits avec leur nouvel ordre',
    example: [{ id: 'uuid', sortOrder: 1 }],
    isArray: true,
  })
  items: { id: string; sortOrder: number }[];
}
