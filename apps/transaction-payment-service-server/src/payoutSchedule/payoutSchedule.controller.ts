import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PayoutScheduleService } from "./payoutSchedule.service";
import { PayoutScheduleControllerBase } from "./base/payoutSchedule.controller.base";

@swagger.ApiTags("payoutSchedules")
@common.Controller("payoutSchedules")
export class PayoutScheduleController extends PayoutScheduleControllerBase {
  constructor(protected readonly service: PayoutScheduleService) {
    super(service);
  }
}
