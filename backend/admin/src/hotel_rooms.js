import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
} from "react-admin";

/* ---------- LIST ---------- */
export const HotelRoomsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="hotel_id" />
            <TextField source="room_type" />
            <NumberField source="capacity" />
            <NumberField source="price_per_night" />
            <NumberField source="available_quantity" />
        </Datagrid>
    </List>
);

/* ---------- CREATE ---------- */
export const HotelRoomsCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="hotel_id" required />
            <TextInput source="room_type" required />
            <NumberInput source="capacity" required />
            <NumberInput source="price_per_night" required />
            <TextInput source="currency" defaultValue="UGX" />
            <NumberInput source="available_quantity" required />
        </SimpleForm>
    </Create>
);

/* ---------- EDIT ---------- */
export const HotelRoomsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="room_type" />
            <NumberInput source="capacity" />
            <NumberInput source="price_per_night" />
            <NumberInput source="available_quantity" />
        </SimpleForm>
    </Edit>
);
