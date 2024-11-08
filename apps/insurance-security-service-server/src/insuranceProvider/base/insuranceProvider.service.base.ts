/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  InsuranceProvider as PrismaInsuranceProvider,
} from "@prisma/client";

export class InsuranceProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.InsuranceProviderCountArgs, "select">
  ): Promise<number> {
    return this.prisma.insuranceProvider.count(args);
  }

  async insuranceProviders(
    args: Prisma.InsuranceProviderFindManyArgs
  ): Promise<PrismaInsuranceProvider[]> {
    return this.prisma.insuranceProvider.findMany(args);
  }
  async insuranceProvider(
    args: Prisma.InsuranceProviderFindUniqueArgs
  ): Promise<PrismaInsuranceProvider | null> {
    return this.prisma.insuranceProvider.findUnique(args);
  }
  async createInsuranceProvider(
    args: Prisma.InsuranceProviderCreateArgs
  ): Promise<PrismaInsuranceProvider> {
    return this.prisma.insuranceProvider.create(args);
  }
  async updateInsuranceProvider(
    args: Prisma.InsuranceProviderUpdateArgs
  ): Promise<PrismaInsuranceProvider> {
    return this.prisma.insuranceProvider.update(args);
  }
  async deleteInsuranceProvider(
    args: Prisma.InsuranceProviderDeleteArgs
  ): Promise<PrismaInsuranceProvider> {
    return this.prisma.insuranceProvider.delete(args);
  }
}