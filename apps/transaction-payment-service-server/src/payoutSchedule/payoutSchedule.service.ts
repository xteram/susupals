import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PayoutScheduleServiceBase } from "./base/payoutSchedule.service.base";

@Injectable()
export class PayoutScheduleService extends PayoutScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
