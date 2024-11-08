import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PayoutScheduleWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  member?: StringNullableFilter;
};
