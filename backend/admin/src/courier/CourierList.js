import {
    List,
    Datagrid,
    TextField,
    SelectField,
    EditButton
} from "react-admin";

export const CourierList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="tracking_id" />
            <TextField source="pickup_address" />
            <TextField source="dropoff_address" />
            <TextField source="total_price" />
            <SelectField
                source="delivery_status"
                choices={[
                    { id: "Pending", name: "Pending" },
                    { id: "Assigned", name: "Assigned" },
                    { id: "In Transit", name: "In Transit" },
                    { id: "Delivered", name: "Delivered" }
                ]}
            />
            <EditButton />
        </Datagrid>
    </List>
);
