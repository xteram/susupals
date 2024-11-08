import { JsonValue } from "type-fest";

export type TransactionHistory = {
  createdAt: Date;
  details: JsonValue;
  id: string;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
