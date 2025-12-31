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


export const CarPricingList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="car_id" />
            <TextField source="pricing_type" />
            <NumberField source="price_per_day" />
            <BooleanField source="includes_driver" />
            <BooleanField source="includes_fuel" />
        </Datagrid>
    </List>
);

export const CarPricingCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <NumberInput source="car_id" />
            <TextInput source="pricing_type" />
            <NumberInput source="price_per_day" />
            <BooleanInput source="includes_driver" />
            <BooleanInput source="includes_fuel" />
        </SimpleForm>
    </Create>
);

export const CarPricingEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="car_id" />
            <TextInput source="pricing_type" />
            <NumberInput source="price_per_day" />
            <BooleanInput source="includes_driver" />
            <BooleanInput source="includes_fuel" />
        </SimpleForm>
    </Edit>
);
