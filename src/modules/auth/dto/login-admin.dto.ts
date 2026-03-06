import { IsString, IsNotEmpty, IsMobilePhone } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginAdminDto {
  @ApiProperty({
    description: 'Numéro de téléphone de l\'administrateur',
    example: '0770000000',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'Mot de passe',
    example: 'Admin@2026',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
