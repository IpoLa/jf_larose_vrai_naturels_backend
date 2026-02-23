import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';
import { LoginAdminDto } from './dto/login-admin.dto';

@Injectable()
export class AdminAuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginAdminDto) {
    const admin = await this.prisma.adminUser.findUnique({
      where: { phone: loginDto.phone },
    });

    if (!admin) {
      throw new UnauthorizedException('Numéro de téléphone ou mot de passe incorrect');
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, admin.passwordHash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Numéro de téléphone ou mot de passe incorrect');
    }

    const payload = { sub: admin.id, phone: admin.phone, role: admin.role };
    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
      admin: {
        id: admin.id,
        name: admin.name,
        phone: admin.phone,
        role: admin.role,
      },
    };
  }

  async validateAdmin(adminId: string) {
    return this.prisma.adminUser.findUnique({ where: { id: adminId } });
  }
}
