import {
    List,
    Datagrid,
    TextField,
    NumberField,
    BooleanField,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    BooleanInput,
} from "react-admin";


export const CarsList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="make" />
            <TextField source="model" />
            <TextField source="plate_number" />
            <NumberField source="seating_capacity" />
            <TextField source="transmission" />
            <BooleanField source="is_available" />
        </Datagrid>
    </List>
);

export const CarsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="make" />
            <TextInput source="model" />
            <TextInput source="plate_number" />
            <NumberInput source="seating_capacity" />
            <TextInput source="transmission" />
            <TextInput source="image_url" />
            <BooleanInput source="is_available" defaultValue />
        </SimpleForm>
    </Create>
);

export const CarsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="make" />
            <TextInput source="model" />
            <TextInput source="plate_number" />
            <NumberInput source="seating_capacity" />
            <TextInput source="transmission" />
            <TextInput source="image_url" />
            <BooleanInput source="is_available" />
        </SimpleForm>
    </Edit>
);
