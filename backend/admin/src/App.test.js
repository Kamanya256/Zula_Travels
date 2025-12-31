// admin/src/App.js
import * as React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import { FlightList, FlightCreate, FlightEdit } from "./flights";
// later we’ll add Hotels, Cars, etc.

const dataProvider = simpleRestProvider("http://localhost:5000/api");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="flights"
      list={FlightList}
      create={FlightCreate}
      edit={FlightEdit}
    />
  </Admin>
);

export default App;
