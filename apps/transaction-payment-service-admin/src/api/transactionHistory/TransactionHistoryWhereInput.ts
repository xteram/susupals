import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type TransactionHistoryWhereInput = {
  details?: JsonFilter;
  id?: StringFilter;
  typeField?: "Option1";
};
