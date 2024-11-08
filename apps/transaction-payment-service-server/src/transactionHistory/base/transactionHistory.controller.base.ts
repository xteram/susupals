/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TransactionHistoryService } from "../transactionHistory.service";
import { TransactionHistoryCreateInput } from "./TransactionHistoryCreateInput";
import { TransactionHistory } from "./TransactionHistory";
import { TransactionHistoryFindManyArgs } from "./TransactionHistoryFindManyArgs";
import { TransactionHistoryWhereUniqueInput } from "./TransactionHistoryWhereUniqueInput";
import { TransactionHistoryUpdateInput } from "./TransactionHistoryUpdateInput";

export class TransactionHistoryControllerBase {
  constructor(protected readonly service: TransactionHistoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TransactionHistory })
  async createTransactionHistory(
    @common.Body() data: TransactionHistoryCreateInput
  ): Promise<TransactionHistory> {
    return await this.service.createTransactionHistory({
      data: data,
      select: {
        createdAt: true,
        details: true,
        id: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [TransactionHistory] })
  @ApiNestedQuery(TransactionHistoryFindManyArgs)
  async transactionHistories(
    @common.Req() request: Request
  ): Promise<TransactionHistory[]> {
    const args = plainToClass(TransactionHistoryFindManyArgs, request.query);
    return this.service.transactionHistories({
      ...args,
      select: {
        createdAt: true,
        details: true,
        id: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TransactionHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async transactionHistory(
    @common.Param() params: TransactionHistoryWhereUniqueInput
  ): Promise<TransactionHistory | null> {
    const result = await this.service.transactionHistory({
      where: params,
      select: {
        createdAt: true,
        details: true,
        id: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: TransactionHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTransactionHistory(
    @common.Param() params: TransactionHistoryWhereUniqueInput,
    @common.Body() data: TransactionHistoryUpdateInput
  ): Promise<TransactionHistory | null> {
    try {
      return await this.service.updateTransactionHistory({
        where: params,
        data: data,
        select: {
          createdAt: true,
          details: true,
          id: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: TransactionHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTransactionHistory(
    @common.Param() params: TransactionHistoryWhereUniqueInput
  ): Promise<TransactionHistory | null> {
    try {
      return await this.service.deleteTransactionHistory({
        where: params,
        select: {
          createdAt: true,
          details: true,
          id: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}