/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, InsurancePlan as PrismaInsurancePlan } from "@prisma/client";

export class InsurancePlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.InsurancePlanCountArgs, "select">
  ): Promise<number> {
    return this.prisma.insurancePlan.count(args);
  }

  async insurancePlans(
    args: Prisma.InsurancePlanFindManyArgs
  ): Promise<PrismaInsurancePlan[]> {
    return this.prisma.insurancePlan.findMany(args);
  }
  async insurancePlan(
    args: Prisma.InsurancePlanFindUniqueArgs
  ): Promise<PrismaInsurancePlan | null> {
    return this.prisma.insurancePlan.findUnique(args);
  }
  async createInsurancePlan(
    args: Prisma.InsurancePlanCreateArgs
  ): Promise<PrismaInsurancePlan> {
    return this.prisma.insurancePlan.create(args);
  }
  async updateInsurancePlan(
    args: Prisma.InsurancePlanUpdateArgs
  ): Promise<PrismaInsurancePlan> {
    return this.prisma.insurancePlan.update(args);
  }
  async deleteInsurancePlan(
    args: Prisma.InsurancePlanDeleteArgs
  ): Promise<PrismaInsurancePlan> {
    return this.prisma.insurancePlan.delete(args);
  }
}