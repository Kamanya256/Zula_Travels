import * as React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";


/* Flights */
import { FlightsList, FlightsCreate, FlightsEdit } from "./flights";

/* Hotels */
import { HotelsList, HotelsCreate, HotelsEdit } from "./hotels";
import {
  HotelRoomsList,
  HotelRoomsCreate,
  HotelRoomsEdit,
} from "./hotel_rooms";

/* Car Hire */
import { CarsList, CarsCreate, CarsEdit } from "./cars";
import { DriversList, DriversCreate, DriversEdit } from "./drivers";
import {
  CarPricingList,
  CarPricingCreate,
  CarPricingEdit,
} from "./car_pricing";

/* Payments */
import { PaymentsList, PaymentsEdit } from "./payments";

/* Menu */
import MyMenu from "./MyMenu";

const dataProvider = simpleRestProvider("http://localhost:5000/api");

const App = () => (
  <Admin dataProvider={dataProvider} menu={MyMenu}>
    {/* Flights */}
    <Resource
      name="flights"
      list={FlightsList}
      create={FlightsCreate}
      edit={FlightsEdit}
    />

    {/* Hotels */}
    <Resource
      name="hotels"
      list={HotelsList}
      create={HotelsCreate}
      edit={HotelsEdit}
    />

    <Resource
      name="hotel_rooms"
      list={HotelRoomsList}
      create={HotelRoomsCreate}
      edit={HotelRoomsEdit}
    />

    {/* Car Hire */}
    <Resource
      name="cars"
      list={CarsList}
      create={CarsCreate}
      edit={CarsEdit}
    />

    <Resource
      name="drivers"
      list={DriversList}
      create={DriversCreate}
      edit={DriversEdit}
    />

    <Resource
      name="car-pricing"
      list={CarPricingList}
      create={CarPricingCreate}
      edit={CarPricingEdit}
    />

    {/* Payments */}
    <Resource
      name="payments"
      list={PaymentsList}
      edit={PaymentsEdit}
    />
  </Admin>
);

export default App;
