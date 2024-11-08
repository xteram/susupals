/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumMemberRole } from "./EnumMemberRole";
import { IsEnum, IsOptional } from "class-validator";

@InputType()
class MemberUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumMemberRole,
  })
  @IsEnum(EnumMemberRole)
  @IsOptional()
  @Field(() => EnumMemberRole, {
    nullable: true,
  })
  role?: "Option1" | null;
}

export { MemberUpdateInput as MemberUpdateInput };
