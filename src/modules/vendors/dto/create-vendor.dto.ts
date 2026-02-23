import { IsString, IsEmail, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';

export class CreateVendorDto {
  @ApiPropertyOptional({ description: 'Nom complet du vendeur', example: 'Ahmed Benali' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ description: 'Email', example: 'ahmed@email.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ description: 'Numéro de téléphone / WhatsApp', example: '0555000000' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ description: 'Numéro CCP', example: '0123456789' })
  @IsOptional()
  @IsString()
  ccp?: string;

  @ApiPropertyOptional({ description: 'Clé CCP', example: '12' })
  @IsOptional()
  @IsString()
  ccpKey?: string;

  @ApiPropertyOptional({ description: 'RIP bancaire (optionnel)', example: '00799999000000000000' })
  @IsOptional()
  @IsString()
  rip?: string;

  @ApiPropertyOptional({ description: 'ID de la pharmacie', example: 'uuid' })
  @IsOptional()
  @IsString()
  pharmacyId?: string;

  @ApiPropertyOptional({ description: 'Date d\'action (début calcul 15 jours)', example: '2026-01-01' })
  @IsOptional()
  @IsString()
  actionDate?: string;
}

export class UpdateVendorDto extends PartialType(CreateVendorDto) {
  @ApiPropertyOptional({ description: 'Statut du vendeur', enum: ['active', 'inactive'] })
  @IsOptional()
  @IsString()
  status?: string;
}
