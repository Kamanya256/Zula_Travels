import * as React from "react";
import { Menu } from "react-admin";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PeopleIcon from "@mui/icons-material/People";
import PaymentIcon from "@mui/icons-material/Payment";

const MyMenu = () => (
    <Menu>
        {/* Flights */}
        <Menu.Item to="/flights" primaryText="Flights" leftIcon={<FlightIcon />} />

        {/* Hotels */}
        <Menu.Item to="/hotels" primaryText="Hotels" leftIcon={<HotelIcon />} />
        <Menu.Item
            to="/hotel_rooms"
            primaryText="Hotel Rooms"
            leftIcon={<HotelIcon />}
        />

        {/* Car Hire */}
        <Menu.Item to="/cars" primaryText="Cars" leftIcon={<DirectionsCarIcon />} />
        <Menu.Item
            to="/drivers"
            primaryText="Drivers"
            leftIcon={<PeopleIcon />}
        />
        <Menu.Item
            to="/car-pricing"
            primaryText="Car Pricing"
            leftIcon={<DirectionsCarIcon />}
        />

        {/* Payments */}
        <Menu.Item
            to="/payments"
            primaryText="Payments"
            leftIcon={<PaymentIcon />}
        />
    </Menu>
);

export default MyMenu;
