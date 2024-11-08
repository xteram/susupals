import * as graphql from "@nestjs/graphql";
import { ContributionResolverBase } from "./base/contribution.resolver.base";
import { Contribution } from "./base/Contribution";
import { ContributionService } from "./contribution.service";

@graphql.Resolver(() => Contribution)
export class ContributionResolver extends ContributionResolverBase {
  constructor(protected readonly service: ContributionService) {
    super(service);
  }
}
