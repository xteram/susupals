import { PayoutScheduleWhereInput } from "./PayoutScheduleWhereInput";
import { PayoutScheduleOrderByInput } from "./PayoutScheduleOrderByInput";

export type PayoutScheduleFindManyArgs = {
  where?: PayoutScheduleWhereInput;
  orderBy?: Array<PayoutScheduleOrderByInput>;
  skip?: number;
  take?: number;
};
