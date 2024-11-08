import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InsuranceProviderService } from "./insuranceProvider.service";
import { InsuranceProviderControllerBase } from "./base/insuranceProvider.controller.base";

@swagger.ApiTags("insuranceProviders")
@common.Controller("insuranceProviders")
export class InsuranceProviderController extends InsuranceProviderControllerBase {
  constructor(protected readonly service: InsuranceProviderService) {
    super(service);
  }
}
