"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./modules/auth/auth.module");
const vendors_module_1 = require("./modules/vendors/vendors.module");
const pharmacies_module_1 = require("./modules/pharmacies/pharmacies.module");
const sales_module_1 = require("./modules/sales/sales.module");
const commissions_module_1 = require("./modules/commissions/commissions.module");
const payments_module_1 = require("./modules/payments/payments.module");
const periods_module_1 = require("./modules/periods/periods.module");
const qr_codes_module_1 = require("./modules/qr-codes/qr-codes.module");
const dashboard_module_1 = require("./modules/dashboard/dashboard.module");
const rules_module_1 = require("./modules/rules/rules.module");
const client_module_1 = require("./modules/client/client.module");
const products_module_1 = require("./modules/products/products.module");
const delegues_module_1 = require("./modules/delegues/delegues.module");
const notifications_module_1 = require("./modules/notifications/notifications.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            products_module_1.ProductsModule,
            vendors_module_1.VendorsModule,
            pharmacies_module_1.PharmaciesModule,
            sales_module_1.SalesModule,
            commissions_module_1.CommissionsModule,
            payments_module_1.PaymentsModule,
            periods_module_1.PeriodsModule,
            qr_codes_module_1.QrCodesModule,
            dashboard_module_1.DashboardModule,
            rules_module_1.RulesModule,
            delegues_module_1.DeleguesModule,
            notifications_module_1.NotificationsModule,
            client_module_1.ClientModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map