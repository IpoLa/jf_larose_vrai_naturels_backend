import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { AdminAuthService } from '../admin-auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private authService: AdminAuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET') || 'jf-larose-secret-2026',
    });
  }

  async validate(payload: any) {
    const admin = await this.authService.validateAdmin(payload.sub);
    if (!admin) {
      throw new UnauthorizedException('Token invalide');
    }
    return { id: payload.sub, phone: payload.phone, role: payload.role };
  }
}
