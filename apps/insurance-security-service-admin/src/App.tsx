import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InsurancePlanList } from "./insurancePlan/InsurancePlanList";
import { InsurancePlanCreate } from "./insurancePlan/InsurancePlanCreate";
import { InsurancePlanEdit } from "./insurancePlan/InsurancePlanEdit";
import { InsurancePlanShow } from "./insurancePlan/InsurancePlanShow";
import { InsuranceProviderList } from "./insuranceProvider/InsuranceProviderList";
import { InsuranceProviderCreate } from "./insuranceProvider/InsuranceProviderCreate";
import { InsuranceProviderEdit } from "./insuranceProvider/InsuranceProviderEdit";
import { InsuranceProviderShow } from "./insuranceProvider/InsuranceProviderShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Insurance & Security Service-1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="InsurancePlan"
          list={InsurancePlanList}
          edit={InsurancePlanEdit}
          create={InsurancePlanCreate}
          show={InsurancePlanShow}
        />
        <Resource
          name="InsuranceProvider"
          list={InsuranceProviderList}
          edit={InsuranceProviderEdit}
          create={InsuranceProviderCreate}
          show={InsuranceProviderShow}
        />
      </Admin>
    </div>
  );
};

export default App;
