import { InputJsonValue } from "../../types";

export type GroupUpdateInput = {
  contributionAmount?: number | null;
  frequency?: "Option1" | null;
  groupName?: string | null;
  payoutDates?: InputJsonValue;
};
