import { ContributionWhereInput } from "./ContributionWhereInput";
import { ContributionOrderByInput } from "./ContributionOrderByInput";

export type ContributionFindManyArgs = {
  where?: ContributionWhereInput;
  orderBy?: Array<ContributionOrderByInput>;
  skip?: number;
  take?: number;
};
