import {
  Controller, Get, Post, Body, Param, Req,
  UseGuards, Injectable, Module, Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiSecurity, ApiBody } from '@nestjs/swagger';
import { IsString, IsOptional, IsIn, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CardAuthGuard } from '../auth/guards/card-auth.guard';
import { PrismaService } from '../../prisma/prisma.service';

class CreateNotificationDto {
  @ApiProperty({ example: '🎯 Nouveau palier atteint !' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Bravo ! Vous avez atteint le palier de 30 produits.' })
  @IsString()
  message: string;

  @ApiPropertyOptional({ enum: ['info', 'success', 'warning', 'alert'], default: 'info' })
  @IsOptional()
  @IsIn(['info', 'success', 'warning', 'alert'])
  type?: string;

  @ApiPropertyOptional({ enum: ['all', 'vendor', 'delegue'], default: 'all' })
  @IsOptional()
  @IsIn(['all', 'vendor', 'delegue'])
  targetType?: string;
}

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  async createAndBroadcast(dto: CreateNotificationDto) {
    const notif = await this.prisma.notification.create({
      data: {
        title: dto.title,
        message: dto.message,
        type: dto.type || 'info',
        targetType: dto.targetType || 'all',
      },
    });

    const shouldNotifyVendors = dto.targetType === 'all' || dto.targetType === 'vendor' || !dto.targetType;
    const shouldNotifyDelegues = dto.targetType === 'all' || dto.targetType === 'delegue' || !dto.targetType;

    if (shouldNotifyVendors) {
      const vendors = await this.prisma.vendor.findMany({
        where: { status: 'active' },
        select: { id: true },
      });
      await this.prisma.vendorNotification.createMany({
        data: vendors.map((v) => ({ notificationId: notif.id, vendorId: v.id })),
        skipDuplicates: true,
      });
    }

    if (shouldNotifyDelegues) {
      const delegues = await this.prisma.delegue.findMany({
        where: { status: 'active' },
        select: { id: true },
      });
      await this.prisma.delegueNotification.createMany({
        data: delegues.map((d) => ({ notificationId: notif.id, delegueId: d.id })),
        skipDuplicates: true,
      });
    }

    return { notification: notif, sent: true };
  }

  async getForVendor(vendorId: string) {
    return this.prisma.vendorNotification.findMany({
      where: { vendorId },
      include: { notification: true },
      orderBy: { notification: { createdAt: 'desc' } },
      take: 50,
    });
  }

  async getForDelegue(delegueId: string) {
    return this.prisma.delegueNotification.findMany({
      where: { delegueId },
      include: { notification: true },
      orderBy: { notification: { createdAt: 'desc' } },
      take: 50,
    });
  }

  async markReadVendor(vendorId: string, notifId: string) {
    return this.prisma.vendorNotification.updateMany({
      where: { vendorId, notificationId: notifId },
      data: { isRead: true, readAt: new Date() },
    });
  }

  async markReadDelegue(delegueId: string, notifId: string) {
    return this.prisma.delegueNotification.updateMany({
      where: { delegueId, notificationId: notifId },
      data: { isRead: true, readAt: new Date() },
    });
  }

  async markAllReadVendor(vendorId: string) {
    return this.prisma.vendorNotification.updateMany({
      where: { vendorId, isRead: false },
      data: { isRead: true, readAt: new Date() },
    });
  }

  async getAdminAll() {
    return this.prisma.notification.findMany({
      include: {
        _count: {
          select: { vendorNotifications: true, delegueNotifications: true },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
  }

  async getUnreadCountVendor(vendorId: string) {
    return this.prisma.vendorNotification.count({ where: { vendorId, isRead: false } });
  }
}

// Admin controller
@ApiTags('Admin - Notifications')
@ApiBearerAuth('JWT-Admin')
@UseGuards(JwtAuthGuard)
@Controller('admin/notifications')
export class AdminNotificationsController {
  constructor(private service: NotificationsService) {}

  @Get()
  @ApiOperation({ summary: 'Toutes les notifications envoyées' })
  findAll() { return this.service.getAdminAll(); }

  @Post('broadcast')
  @ApiOperation({ summary: 'Envoyer une notification à tous / type ciblé' })
  broadcast(@Body() dto: CreateNotificationDto) { return this.service.createAndBroadcast(dto); }
}

// Client controller - vendor
@ApiTags('Client - Notifications')
@ApiSecurity('Card-Number')
@UseGuards(CardAuthGuard)
@Controller('client/notifications')
export class ClientNotificationsController {
  constructor(private service: NotificationsService) {}

  @Get()
  @ApiOperation({ summary: 'Mes notifications' })
  getMyNotifications(@Req() req: any) {
    if (req.cardHolder?.role === 'delegue') {
      return this.service.getForDelegue(req.cardHolder.id);
    }
    return this.service.getForVendor(req.cardHolder.id);
  }

  @Get('unread-count')
  @ApiOperation({ summary: 'Nombre de notifications non lues' })
  async unreadCount(@Req() req: any) {
    const count = await this.service.getUnreadCountVendor(req.cardHolder.id);
    return { count };
  }

  @Post(':id/read')
  @ApiOperation({ summary: 'Marquer une notification comme lue' })
  async markRead(@Req() req: any, @Param('id') notifId: string) {
    if (req.cardHolder?.role === 'delegue') {
      return this.service.markReadDelegue(req.cardHolder.id, notifId);
    }
    return this.service.markReadVendor(req.cardHolder.id, notifId);
  }

  @Post('mark-all-read')
  @ApiOperation({ summary: 'Tout marquer comme lu' })
  async markAllRead(@Req() req: any) {
    return this.service.markAllReadVendor(req.cardHolder.id);
  }
}

@Module({
  controllers: [AdminNotificationsController, ClientNotificationsController],
  providers: [NotificationsService],
  exports: [NotificationsService],
})
export class NotificationsModule {}
