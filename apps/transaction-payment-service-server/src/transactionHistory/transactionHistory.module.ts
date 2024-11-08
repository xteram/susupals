import { Module } from "@nestjs/common";
import { TransactionHistoryModuleBase } from "./base/transactionHistory.module.base";
import { TransactionHistoryService } from "./transactionHistory.service";
import { TransactionHistoryController } from "./transactionHistory.controller";
import { TransactionHistoryResolver } from "./transactionHistory.resolver";

@Module({
  imports: [TransactionHistoryModuleBase],
  controllers: [TransactionHistoryController],
  providers: [TransactionHistoryService, TransactionHistoryResolver],
  exports: [TransactionHistoryService],
})
export class TransactionHistoryModule {}
