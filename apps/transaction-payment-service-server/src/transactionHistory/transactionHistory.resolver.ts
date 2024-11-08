import * as graphql from "@nestjs/graphql";
import { TransactionHistoryResolverBase } from "./base/transactionHistory.resolver.base";
import { TransactionHistory } from "./base/TransactionHistory";
import { TransactionHistoryService } from "./transactionHistory.service";

@graphql.Resolver(() => TransactionHistory)
export class TransactionHistoryResolver extends TransactionHistoryResolverBase {
  constructor(protected readonly service: TransactionHistoryService) {
    super(service);
  }
}
