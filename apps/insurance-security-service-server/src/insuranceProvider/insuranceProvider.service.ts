import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InsuranceProviderServiceBase } from "./base/insuranceProvider.service.base";

@Injectable()
export class InsuranceProviderService extends InsuranceProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
