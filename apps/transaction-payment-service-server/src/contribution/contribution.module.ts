import { Module } from "@nestjs/common";
import { ContributionModuleBase } from "./base/contribution.module.base";
import { ContributionService } from "./contribution.service";
import { ContributionController } from "./contribution.controller";
import { ContributionResolver } from "./contribution.resolver";

@Module({
  imports: [ContributionModuleBase],
  controllers: [ContributionController],
  providers: [ContributionService, ContributionResolver],
  exports: [ContributionService],
})
export class ContributionModule {}
