import { Invitation as TInvitation } from "../api/invitation/Invitation";

export const INVITATION_TITLE_FIELD = "emailOrPhone";

export const InvitationTitle = (record: TInvitation): string => {
  return record.emailOrPhone?.toString() || String(record.id);
};
