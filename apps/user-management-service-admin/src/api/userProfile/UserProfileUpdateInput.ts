import { InputJsonValue } from "../../types";

export type UserProfileUpdateInput = {
  bankAccountInfo?: InputJsonValue;
  momoNumber?: string | null;
  notificationPreferences?: InputJsonValue;
  phoneNumber?: string | null;
};
