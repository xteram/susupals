import * as graphql from "@nestjs/graphql";
import { PayoutScheduleResolverBase } from "./base/payoutSchedule.resolver.base";
import { PayoutSchedule } from "./base/PayoutSchedule";
import { PayoutScheduleService } from "./payoutSchedule.service";

@graphql.Resolver(() => PayoutSchedule)
export class PayoutScheduleResolver extends PayoutScheduleResolverBase {
  constructor(protected readonly service: PayoutScheduleService) {
    super(service);
  }
}
