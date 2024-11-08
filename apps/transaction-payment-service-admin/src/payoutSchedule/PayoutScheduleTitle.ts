import { PayoutSchedule as TPayoutSchedule } from "../api/payoutSchedule/PayoutSchedule";

export const PAYOUTSCHEDULE_TITLE_FIELD = "member";

export const PayoutScheduleTitle = (record: TPayoutSchedule): string => {
  return record.member?.toString() || String(record.id);
};
