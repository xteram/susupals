import { InputJsonValue } from "../../types";

export type GroupCreateInput = {
  contributionAmount?: number | null;
  frequency?: "Option1" | null;
  groupName?: string | null;
  payoutDates?: InputJsonValue;
};
