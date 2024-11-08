import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GroupList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Groups"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="contributionAmount" source="contributionAmount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="frequency" source="frequency" />
        <TextField label="groupName" source="groupName" />
        <TextField label="ID" source="id" />
        <TextField label="payoutDates" source="payoutDates" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
