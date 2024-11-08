import { Module } from "@nestjs/common";
import { PayoutScheduleModuleBase } from "./base/payoutSchedule.module.base";
import { PayoutScheduleService } from "./payoutSchedule.service";
import { PayoutScheduleController } from "./payoutSchedule.controller";
import { PayoutScheduleResolver } from "./payoutSchedule.resolver";

@Module({
  imports: [PayoutScheduleModuleBase],
  controllers: [PayoutScheduleController],
  providers: [PayoutScheduleService, PayoutScheduleResolver],
  exports: [PayoutScheduleService],
})
export class PayoutScheduleModule {}
