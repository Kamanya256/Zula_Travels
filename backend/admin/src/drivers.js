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


export const DriversList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="full_name" />
            <TextField source="phone" />
            <NumberField source="experience_years" />
            <BooleanField source="is_available" />
            <BooleanField source="is_active" />
        </Datagrid>
    </List>
);

export const DriversCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="full_name" />
            <TextInput source="phone" />
            <TextInput source="license_number" />
            <NumberInput source="experience_years" />
            <TextInput source="languages" />
            <NumberInput source="daily_rate" />
            <BooleanInput source="is_available" defaultValue />
            <BooleanInput source="is_active" defaultValue />
        </SimpleForm>
    </Create>
);

export const DriversEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="full_name" />
            <TextInput source="phone" />
            <TextInput source="license_number" />
            <NumberInput source="experience_years" />
            <TextInput source="languages" />
            <NumberInput source="daily_rate" />
            <BooleanInput source="is_available" />
            <BooleanInput source="is_active" />
        </SimpleForm>
    </Edit>
);
