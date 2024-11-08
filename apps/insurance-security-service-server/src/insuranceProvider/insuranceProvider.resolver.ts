import * as graphql from "@nestjs/graphql";
import { InsuranceProviderResolverBase } from "./base/insuranceProvider.resolver.base";
import { InsuranceProvider } from "./base/InsuranceProvider";
import { InsuranceProviderService } from "./insuranceProvider.service";

@graphql.Resolver(() => InsuranceProvider)
export class InsuranceProviderResolver extends InsuranceProviderResolverBase {
  constructor(protected readonly service: InsuranceProviderService) {
    super(service);
  }
}
