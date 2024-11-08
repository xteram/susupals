import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InsurancePlanService } from "./insurancePlan.service";
import { InsurancePlanControllerBase } from "./base/insurancePlan.controller.base";

@swagger.ApiTags("insurancePlans")
@common.Controller("insurancePlans")
export class InsurancePlanController extends InsurancePlanControllerBase {
  constructor(protected readonly service: InsurancePlanService) {
    super(service);
  }
}
