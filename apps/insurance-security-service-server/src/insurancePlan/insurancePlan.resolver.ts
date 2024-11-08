import * as graphql from "@nestjs/graphql";
import { InsurancePlanResolverBase } from "./base/insurancePlan.resolver.base";
import { InsurancePlan } from "./base/InsurancePlan";
import { InsurancePlanService } from "./insurancePlan.service";

@graphql.Resolver(() => InsurancePlan)
export class InsurancePlanResolver extends InsurancePlanResolverBase {
  constructor(protected readonly service: InsurancePlanService) {
    super(service);
  }
}
