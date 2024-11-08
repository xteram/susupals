import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const GroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="contributionAmount" source="contributionAmount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="frequency" source="frequency" />
        <TextField label="groupName" source="groupName" />
        <TextField label="ID" source="id" />
        <TextField label="payoutDates" source="payoutDates" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
