import { PrismaService } from '../../prisma/prisma.service';
declare class CreateNotificationDto {
    title: string;
    message: string;
    type?: string;
    targetType?: string;
}
export declare class NotificationsService {
    private prisma;
    constructor(prisma: PrismaService);
    createAndBroadcast(dto: CreateNotificationDto): Promise<{
        notification: {
            id: string;
            createdAt: Date;
            type: string;
            title: string;
            message: string;
            targetType: string;
        };
        sent: boolean;
    }>;
    getForVendor(vendorId: string): Promise<({
        notification: {
            id: string;
            createdAt: Date;
            type: string;
            title: string;
            message: string;
            targetType: string;
        };
    } & {
        id: string;
        vendorId: string;
        notificationId: string;
        isRead: boolean;
        readAt: Date | null;
    })[]>;
    getForDelegue(delegueId: string): Promise<({
        notification: {
            id: string;
            createdAt: Date;
            type: string;
            title: string;
            message: string;
            targetType: string;
        };
    } & {
        id: string;
        delegueId: string;
        notificationId: string;
        isRead: boolean;
        readAt: Date | null;
    })[]>;
    markReadVendor(vendorId: string, notifId: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    markReadDelegue(delegueId: string, notifId: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    markAllReadVendor(vendorId: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getAdminAll(): Promise<({
        _count: {
            vendorNotifications: number;
            delegueNotifications: number;
        };
    } & {
        id: string;
        createdAt: Date;
        type: string;
        title: string;
        message: string;
        targetType: string;
    })[]>;
    getUnreadCountVendor(vendorId: string): Promise<number>;
}
export declare class AdminNotificationsController {
    private service;
    constructor(service: NotificationsService);
    findAll(): Promise<({
        _count: {
            vendorNotifications: number;
            delegueNotifications: number;
        };
    } & {
        id: string;
        createdAt: Date;
        type: string;
        title: string;
        message: string;
        targetType: string;
    })[]>;
    broadcast(dto: CreateNotificationDto): Promise<{
        notification: {
            id: string;
            createdAt: Date;
            type: string;
            title: string;
            message: string;
            targetType: string;
        };
        sent: boolean;
    }>;
}
export declare class ClientNotificationsController {
    private service;
    constructor(service: NotificationsService);
    getMyNotifications(req: any): Promise<({
        notification: {
            id: string;
            createdAt: Date;
            type: string;
            title: string;
            message: string;
            targetType: string;
        };
    } & {
        id: string;
        delegueId: string;
        notificationId: string;
        isRead: boolean;
        readAt: Date | null;
    })[]> | Promise<({
        notification: {
            id: string;
            createdAt: Date;
            type: string;
            title: string;
            message: string;
            targetType: string;
        };
    } & {
        id: string;
        vendorId: string;
        notificationId: string;
        isRead: boolean;
        readAt: Date | null;
    })[]>;
    unreadCount(req: any): Promise<{
        count: number;
    }>;
    markRead(req: any, notifId: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    markAllRead(req: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
export declare class NotificationsModule {
}
export {};
