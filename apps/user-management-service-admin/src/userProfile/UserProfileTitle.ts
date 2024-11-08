import { UserProfile as TUserProfile } from "../api/userProfile/UserProfile";

export const USERPROFILE_TITLE_FIELD = "momoNumber";

export const UserProfileTitle = (record: TUserProfile): string => {
  return record.momoNumber?.toString() || String(record.id);
};
