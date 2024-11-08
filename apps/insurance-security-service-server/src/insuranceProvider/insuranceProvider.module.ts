import { Module } from "@nestjs/common";
import { InsuranceProviderModuleBase } from "./base/insuranceProvider.module.base";
import { InsuranceProviderService } from "./insuranceProvider.service";
import { InsuranceProviderController } from "./insuranceProvider.controller";
import { InsuranceProviderResolver } from "./insuranceProvider.resolver";

@Module({
  imports: [InsuranceProviderModuleBase],
  controllers: [InsuranceProviderController],
  providers: [InsuranceProviderService, InsuranceProviderResolver],
  exports: [InsuranceProviderService],
})
export class InsuranceProviderModule {}
