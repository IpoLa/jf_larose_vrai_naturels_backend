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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsModule = exports.ClientNotificationsController = exports.AdminNotificationsController = exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_2 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const card_auth_guard_1 = require("../auth/guards/card-auth.guard");
const prisma_service_1 = require("../../prisma/prisma.service");
class CreateNotificationDto {
}
__decorate([
    (0, swagger_2.ApiProperty)({ example: '🎯 Nouveau palier atteint !' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNotificationDto.prototype, "title", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({ example: 'Bravo ! Vous avez atteint le palier de 30 produits.' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNotificationDto.prototype, "message", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ enum: ['info', 'success', 'warning', 'alert'], default: 'info' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['info', 'success', 'warning', 'alert']),
    __metadata("design:type", String)
], CreateNotificationDto.prototype, "type", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ enum: ['all', 'vendor', 'delegue'], default: 'all' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['all', 'vendor', 'delegue']),
    __metadata("design:type", String)
], CreateNotificationDto.prototype, "targetType", void 0);
let NotificationsService = class NotificationsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createAndBroadcast(dto) {
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
    async getForVendor(vendorId) {
        return this.prisma.vendorNotification.findMany({
            where: { vendorId },
            include: { notification: true },
            orderBy: { notification: { createdAt: 'desc' } },
            take: 50,
        });
    }
    async getForDelegue(delegueId) {
        return this.prisma.delegueNotification.findMany({
            where: { delegueId },
            include: { notification: true },
            orderBy: { notification: { createdAt: 'desc' } },
            take: 50,
        });
    }
    async markReadVendor(vendorId, notifId) {
        return this.prisma.vendorNotification.updateMany({
            where: { vendorId, notificationId: notifId },
            data: { isRead: true, readAt: new Date() },
        });
    }
    async markReadDelegue(delegueId, notifId) {
        return this.prisma.delegueNotification.updateMany({
            where: { delegueId, notificationId: notifId },
            data: { isRead: true, readAt: new Date() },
        });
    }
    async markAllReadVendor(vendorId) {
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
    async getUnreadCountVendor(vendorId) {
        return this.prisma.vendorNotification.count({ where: { vendorId, isRead: false } });
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationsService);
let AdminNotificationsController = class AdminNotificationsController {
    constructor(service) {
        this.service = service;
    }
    findAll() { return this.service.getAdminAll(); }
    broadcast(dto) { return this.service.createAndBroadcast(dto); }
};
exports.AdminNotificationsController = AdminNotificationsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Toutes les notifications envoyées' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminNotificationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('broadcast'),
    (0, swagger_1.ApiOperation)({ summary: 'Envoyer une notification à tous / type ciblé' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateNotificationDto]),
    __metadata("design:returntype", void 0)
], AdminNotificationsController.prototype, "broadcast", null);
exports.AdminNotificationsController = AdminNotificationsController = __decorate([
    (0, swagger_1.ApiTags)('Admin - Notifications'),
    (0, swagger_1.ApiBearerAuth)('JWT-Admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('admin/notifications'),
    __metadata("design:paramtypes", [NotificationsService])
], AdminNotificationsController);
let ClientNotificationsController = class ClientNotificationsController {
    constructor(service) {
        this.service = service;
    }
    getMyNotifications(req) {
        if (req.cardHolder?.role === 'delegue') {
            return this.service.getForDelegue(req.cardHolder.id);
        }
        return this.service.getForVendor(req.cardHolder.id);
    }
    async unreadCount(req) {
        const count = await this.service.getUnreadCountVendor(req.cardHolder.id);
        return { count };
    }
    async markRead(req, notifId) {
        if (req.cardHolder?.role === 'delegue') {
            return this.service.markReadDelegue(req.cardHolder.id, notifId);
        }
        return this.service.markReadVendor(req.cardHolder.id, notifId);
    }
    async markAllRead(req) {
        return this.service.markAllReadVendor(req.cardHolder.id);
    }
};
exports.ClientNotificationsController = ClientNotificationsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mes notifications' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientNotificationsController.prototype, "getMyNotifications", null);
__decorate([
    (0, common_1.Get)('unread-count'),
    (0, swagger_1.ApiOperation)({ summary: 'Nombre de notifications non lues' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientNotificationsController.prototype, "unreadCount", null);
__decorate([
    (0, common_1.Post)(':id/read'),
    (0, swagger_1.ApiOperation)({ summary: 'Marquer une notification comme lue' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ClientNotificationsController.prototype, "markRead", null);
__decorate([
    (0, common_1.Post)('mark-all-read'),
    (0, swagger_1.ApiOperation)({ summary: 'Tout marquer comme lu' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientNotificationsController.prototype, "markAllRead", null);
exports.ClientNotificationsController = ClientNotificationsController = __decorate([
    (0, swagger_1.ApiTags)('Client - Notifications'),
    (0, swagger_1.ApiSecurity)('Card-Number'),
    (0, common_1.UseGuards)(card_auth_guard_1.CardAuthGuard),
    (0, common_1.Controller)('client/notifications'),
    __metadata("design:paramtypes", [NotificationsService])
], ClientNotificationsController);
let NotificationsModule = class NotificationsModule {
};
exports.NotificationsModule = NotificationsModule;
exports.NotificationsModule = NotificationsModule = __decorate([
    (0, common_1.Module)({
        controllers: [AdminNotificationsController, ClientNotificationsController],
        providers: [NotificationsService],
        exports: [NotificationsService],
    })
], NotificationsModule);
//# sourceMappingURL=notifications.module.js.map