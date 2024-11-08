import { JsonValue } from "type-fest";

export type UserProfile = {
  bankAccountInfo: JsonValue;
  createdAt: Date;
  id: string;
  momoNumber: string | null;
  notificationPreferences: JsonValue;
  phoneNumber: string | null;
  updatedAt: Date;
};
