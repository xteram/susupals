import { Contribution as TContribution } from "../api/contribution/Contribution";

export const CONTRIBUTION_TITLE_FIELD = "id";

export const ContributionTitle = (record: TContribution): string => {
  return record.id?.toString() || String(record.id);
};
