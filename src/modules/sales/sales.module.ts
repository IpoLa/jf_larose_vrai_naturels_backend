import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CommissionsModule } from '../commissions/commissions.module';
import { PeriodsModule } from '../periods/periods.module';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [CommissionsModule, PeriodsModule, ProductsModule],
  providers: [SalesService],
  exports: [SalesService],
})
export class SalesModule {}
