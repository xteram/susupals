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
import { ContributionWhereInput } from "./ContributionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ContributionOrderByInput } from "./ContributionOrderByInput";

@ArgsType()
class ContributionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ContributionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ContributionWhereInput, { nullable: true })
  @Type(() => ContributionWhereInput)
  where?: ContributionWhereInput;

  @ApiProperty({
    required: false,
    type: [ContributionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ContributionOrderByInput], { nullable: true })
  @Type(() => ContributionOrderByInput)
  orderBy?: Array<ContributionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ContributionFindManyArgs as ContributionFindManyArgs };