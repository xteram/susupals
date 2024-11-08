import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  bankAccountInfo?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  momoNumber?: SortOrder;
  notificationPreferences?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
