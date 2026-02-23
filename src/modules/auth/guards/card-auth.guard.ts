import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class CardAuthGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const cardNumber =
      request.headers['x-card-number'] ||
      request.query['card_number'] ||
      request.body?.card_number;

    if (!cardNumber) {
      throw new UnauthorizedException(
        'Numéro de carte requis. Veuillez scanner votre QR code.',
      );
    }

    // Check vendor first
    const vendor = await this.prisma.vendor.findUnique({
      where: { uniqueCardNumber: cardNumber },
      include: { pharmacy: true },
    });

    if (vendor) {
      if (vendor.status !== 'active') {
        throw new UnauthorizedException('Votre compte vendeur est inactif');
      }
      request.cardHolder = { ...vendor, role: 'vendor' };
      request.vendor = vendor;
      return true;
    }

    // Check delegue
    const delegue = await this.prisma.delegue.findUnique({
      where: { uniqueCardNumber: cardNumber },
    });

    if (delegue) {
      if (delegue.status !== 'active') {
        throw new UnauthorizedException('Votre compte délégué est inactif');
      }
      request.cardHolder = { ...delegue, role: 'delegue' };
      request.delegue = delegue;
      return true;
    }

    throw new UnauthorizedException('Numéro de carte invalide');
  }
}

// Keep backward compatibility alias
export { CardAuthGuard as VendorAuthGuard };
