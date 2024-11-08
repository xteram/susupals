import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InvitationWhereInput = {
  emailOrPhone?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
};
