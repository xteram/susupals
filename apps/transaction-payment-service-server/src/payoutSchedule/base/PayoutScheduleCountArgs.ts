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
import { PayoutScheduleWhereInput } from "./PayoutScheduleWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PayoutScheduleCountArgs {
  @ApiProperty({
    required: false,
    type: () => PayoutScheduleWhereInput,
  })
  @Field(() => PayoutScheduleWhereInput, { nullable: true })
  @Type(() => PayoutScheduleWhereInput)
  where?: PayoutScheduleWhereInput;
}

export { PayoutScheduleCountArgs as PayoutScheduleCountArgs };
