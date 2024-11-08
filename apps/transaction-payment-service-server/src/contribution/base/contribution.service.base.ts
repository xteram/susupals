/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Contribution as PrismaContribution } from "@prisma/client";

export class ContributionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ContributionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.contribution.count(args);
  }

  async contributions(
    args: Prisma.ContributionFindManyArgs
  ): Promise<PrismaContribution[]> {
    return this.prisma.contribution.findMany(args);
  }
  async contribution(
    args: Prisma.ContributionFindUniqueArgs
  ): Promise<PrismaContribution | null> {
    return this.prisma.contribution.findUnique(args);
  }
  async createContribution(
    args: Prisma.ContributionCreateArgs
  ): Promise<PrismaContribution> {
    return this.prisma.contribution.create(args);
  }
  async updateContribution(
    args: Prisma.ContributionUpdateArgs
  ): Promise<PrismaContribution> {
    return this.prisma.contribution.update(args);
  }
  async deleteContribution(
    args: Prisma.ContributionDeleteArgs
  ): Promise<PrismaContribution> {
    return this.prisma.contribution.delete(args);
  }
}
