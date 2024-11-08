import { Group as TGroup } from "../api/group/Group";

export const GROUP_TITLE_FIELD = "groupName";

export const GroupTitle = (record: TGroup): string => {
  return record.groupName?.toString() || String(record.id);
};
