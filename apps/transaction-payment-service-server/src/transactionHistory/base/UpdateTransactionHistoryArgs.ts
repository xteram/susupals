/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TransactionHistoryWhereUniqueInput } from "./TransactionHistoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TransactionHistoryUpdateInput } from "./TransactionHistoryUpdateInput";

@ArgsType()
class UpdateTransactionHistoryArgs {
  @ApiProperty({
    required: true,
    type: () => TransactionHistoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TransactionHistoryWhereUniqueInput)
  @Field(() => TransactionHistoryWhereUniqueInput, { nullable: false })
  where!: TransactionHistoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TransactionHistoryUpdateInput,
  })
  @ValidateNested()
  @Type(() => TransactionHistoryUpdateInput)
  @Field(() => TransactionHistoryUpdateInput, { nullable: false })
  data!: TransactionHistoryUpdateInput;
}

export { UpdateTransactionHistoryArgs as UpdateTransactionHistoryArgs };
