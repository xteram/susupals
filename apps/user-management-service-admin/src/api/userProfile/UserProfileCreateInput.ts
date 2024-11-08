import { InputJsonValue } from "../../types";

export type UserProfileCreateInput = {
  bankAccountInfo?: InputJsonValue;
  momoNumber?: string | null;
  notificationPreferences?: InputJsonValue;
  phoneNumber?: string | null;
};
