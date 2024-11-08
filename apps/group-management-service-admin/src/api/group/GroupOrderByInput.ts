import { SortOrder } from "../../util/SortOrder";

export type GroupOrderByInput = {
  contributionAmount?: SortOrder;
  createdAt?: SortOrder;
  frequency?: SortOrder;
  groupName?: SortOrder;
  id?: SortOrder;
  payoutDates?: SortOrder;
  updatedAt?: SortOrder;
};
