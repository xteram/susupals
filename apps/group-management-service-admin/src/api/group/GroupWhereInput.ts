import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type GroupWhereInput = {
  contributionAmount?: FloatNullableFilter;
  frequency?: "Option1";
  groupName?: StringNullableFilter;
  id?: StringFilter;
  payoutDates?: JsonFilter;
};
