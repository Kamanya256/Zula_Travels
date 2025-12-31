// admin/src/flights.js
import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    DateField,
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    DateInput,
    Create,
} from "react-admin";

export const FlightsList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="airline" />
            <TextField source="flight_number" />
            <TextField source="departure_city" />
            <TextField source="arrival_city" />
            <DateField source="departure_time" />
            <DateField source="arrival_time" />
            <NumberField source="price" />
        </Datagrid>
    </List>
);

export const FlightsEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="airline" />
            <TextInput source="flight_number" />
            <TextInput source="departure_city" />
            <TextInput source="arrival_city" />
            <DateInput source="departure_time" />
            <DateInput source="arrival_time" />
            <NumberInput source="price" />
        </SimpleForm>
    </Edit>
);

export const FlightsCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="airline" />
            <TextInput source="flight_number" />
            <TextInput source="departure_city" />
            <TextInput source="arrival_city" />
            <DateInput source="departure_time" />
            <DateInput source="arrival_time" />
            <NumberInput source="price" />
        </SimpleForm>
    </Create>
);
