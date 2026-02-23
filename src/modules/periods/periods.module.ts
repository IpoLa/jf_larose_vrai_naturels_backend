import { Module } from '@nestjs/common';
import { PeriodsService } from './periods.service';

@Module({
  providers: [PeriodsService],
  exports: [PeriodsService],
})
export class PeriodsModule {}
