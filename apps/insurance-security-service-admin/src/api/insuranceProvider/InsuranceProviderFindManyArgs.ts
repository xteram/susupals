import { InsuranceProviderWhereInput } from "./InsuranceProviderWhereInput";
import { InsuranceProviderOrderByInput } from "./InsuranceProviderOrderByInput";

export type InsuranceProviderFindManyArgs = {
  where?: InsuranceProviderWhereInput;
  orderBy?: Array<InsuranceProviderOrderByInput>;
  skip?: number;
  take?: number;
};
