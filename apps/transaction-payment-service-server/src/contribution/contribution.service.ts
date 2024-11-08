import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContributionServiceBase } from "./base/contribution.service.base";

@Injectable()
export class ContributionService extends ContributionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
