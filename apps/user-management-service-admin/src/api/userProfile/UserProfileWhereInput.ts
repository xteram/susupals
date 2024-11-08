import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserProfileWhereInput = {
  bankAccountInfo?: JsonFilter;
  id?: StringFilter;
  momoNumber?: StringNullableFilter;
  notificationPreferences?: JsonFilter;
  phoneNumber?: StringNullableFilter;
};
