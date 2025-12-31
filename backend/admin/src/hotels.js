// admin/src/hotels.js
import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    Create,
    ReferenceField,
    ReferenceInput,
    SelectInput,
} from "react-admin";

// LIST
export const HotelsList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            {/* destination_id -> destinations.city */}
            <ReferenceField source="destination_id" reference="destinations">
                <TextField source="city" />
            </ReferenceField>
            <TextField source="name" />
            <TextField source="location" />
            <TextField source="address" />
            <NumberField source="rating" />
            <NumberField source="price_per_night" />
        </Datagrid>
    </List>
);

// EDIT
export const HotelsEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="destination_id" reference="destinations">
                <SelectInput optionText="city" />
            </ReferenceInput>

            <TextInput source="name" />
            <TextInput source="location" />
            <TextInput source="address" />
            <NumberInput source="rating" />
            <NumberInput source="price_per_night" />
            <TextInput source="image_url" />
            <TextInput source="description" multiline />
        </SimpleForm>
    </Edit>
);

// CREATE
export const HotelsCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="destination_id" reference="destinations">
                <SelectInput optionText="city" />
            </ReferenceInput>

            <TextInput source="name" />
            <TextInput source="location" />
            <TextInput source="address" />
            <NumberInput source="rating" />
            <NumberInput source="price_per_night" />
            <TextInput source="image_url" />
            <TextInput source="description" multiline />
        </SimpleForm>
    </Create>
);
