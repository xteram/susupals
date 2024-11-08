/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Member } from "./Member";
import { MemberCountArgs } from "./MemberCountArgs";
import { MemberFindManyArgs } from "./MemberFindManyArgs";
import { MemberFindUniqueArgs } from "./MemberFindUniqueArgs";
import { CreateMemberArgs } from "./CreateMemberArgs";
import { UpdateMemberArgs } from "./UpdateMemberArgs";
import { DeleteMemberArgs } from "./DeleteMemberArgs";
import { MemberService } from "../member.service";
@graphql.Resolver(() => Member)
export class MemberResolverBase {
  constructor(protected readonly service: MemberService) {}

  async _membersMeta(
    @graphql.Args() args: MemberCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Member])
  async members(@graphql.Args() args: MemberFindManyArgs): Promise<Member[]> {
    return this.service.members(args);
  }

  @graphql.Query(() => Member, { nullable: true })
  async member(
    @graphql.Args() args: MemberFindUniqueArgs
  ): Promise<Member | null> {
    const result = await this.service.member(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Member)
  async createMember(@graphql.Args() args: CreateMemberArgs): Promise<Member> {
    return await this.service.createMember({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Member)
  async updateMember(
    @graphql.Args() args: UpdateMemberArgs
  ): Promise<Member | null> {
    try {
      return await this.service.updateMember({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Member)
  async deleteMember(
    @graphql.Args() args: DeleteMemberArgs
  ): Promise<Member | null> {
    try {
      return await this.service.deleteMember(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
