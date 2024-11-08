import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FeeList } from "./fee/FeeList";
import { FeeCreate } from "./fee/FeeCreate";
import { FeeEdit } from "./fee/FeeEdit";
import { FeeShow } from "./fee/FeeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Commission & Fees Service-1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Fee"
          list={FeeList}
          edit={FeeEdit}
          create={FeeCreate}
          show={FeeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
