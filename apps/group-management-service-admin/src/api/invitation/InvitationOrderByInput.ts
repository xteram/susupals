import { SortOrder } from "../../util/SortOrder";

export type InvitationOrderByInput = {
  createdAt?: SortOrder;
  emailOrPhone?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
