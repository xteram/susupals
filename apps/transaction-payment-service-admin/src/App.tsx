import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PayoutScheduleList } from "./payoutSchedule/PayoutScheduleList";
import { PayoutScheduleCreate } from "./payoutSchedule/PayoutScheduleCreate";
import { PayoutScheduleEdit } from "./payoutSchedule/PayoutScheduleEdit";
import { PayoutScheduleShow } from "./payoutSchedule/PayoutScheduleShow";
import { TransactionHistoryList } from "./transactionHistory/TransactionHistoryList";
import { TransactionHistoryCreate } from "./transactionHistory/TransactionHistoryCreate";
import { TransactionHistoryEdit } from "./transactionHistory/TransactionHistoryEdit";
import { TransactionHistoryShow } from "./transactionHistory/TransactionHistoryShow";
import { ContributionList } from "./contribution/ContributionList";
import { ContributionCreate } from "./contribution/ContributionCreate";
import { ContributionEdit } from "./contribution/ContributionEdit";
import { ContributionShow } from "./contribution/ContributionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Transaction & Payment Service-1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PayoutSchedule"
          list={PayoutScheduleList}
          edit={PayoutScheduleEdit}
          create={PayoutScheduleCreate}
          show={PayoutScheduleShow}
        />
        <Resource
          name="TransactionHistory"
          list={TransactionHistoryList}
          edit={TransactionHistoryEdit}
          create={TransactionHistoryCreate}
          show={TransactionHistoryShow}
        />
        <Resource
          name="Contribution"
          list={ContributionList}
          edit={ContributionEdit}
          create={ContributionCreate}
          show={ContributionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
