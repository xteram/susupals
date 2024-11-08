import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContributionService } from "./contribution.service";
import { ContributionControllerBase } from "./base/contribution.controller.base";

@swagger.ApiTags("contributions")
@common.Controller("contributions")
export class ContributionController extends ContributionControllerBase {
  constructor(protected readonly service: ContributionService) {
    super(service);
  }
}
