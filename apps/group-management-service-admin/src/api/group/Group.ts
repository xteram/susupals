import { JsonValue } from "type-fest";

export type Group = {
  contributionAmount: number | null;
  createdAt: Date;
  frequency?: "Option1" | null;
  groupName: string | null;
  id: string;
  payoutDates: JsonValue;
  updatedAt: Date;
};
