import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { VendorsModule } from './modules/vendors/vendors.module';
import { PharmaciesModule } from './modules/pharmacies/pharmacies.module';
import { SalesModule } from './modules/sales/sales.module';
import { CommissionsModule } from './modules/commissions/commissions.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { PeriodsModule } from './modules/periods/periods.module';
import { QrCodesModule } from './modules/qr-codes/qr-codes.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { RulesModule } from './modules/rules/rules.module';
import { ClientModule } from './modules/client/client.module';
import { ProductsModule } from './modules/products/products.module';
import { DeleguesModule } from './modules/delegues/delegues.module';
import { NotificationsModule } from './modules/notifications/notifications.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    ProductsModule,
    VendorsModule,
    PharmaciesModule,
    SalesModule,
    CommissionsModule,
    PaymentsModule,
    PeriodsModule,
    QrCodesModule,
    DashboardModule,
    RulesModule,
    DeleguesModule,
    NotificationsModule,
    ClientModule,
  ],
})
export class AppModule {}
