import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    Edit,
    SimpleForm,
    SelectInput,
} from "react-admin";

/* ---------- LIST ---------- */
export const PaymentsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="booking_id" />
            <NumberField source="amount" />
            <TextField source="currency" />
            <TextField source="method" />
            <TextField source="status" />
            <TextField source="payment_date" />
        </Datagrid>
    </List>
);

/* ---------- EDIT ---------- */
export const PaymentsEdit = () => (
    <Edit>
        <SimpleForm>
            <SelectInput
                source="status"
                choices={[
                    { id: "pending", name: "Pending" },
                    { id: "paid", name: "Paid" },
                    { id: "failed", name: "Failed" },
                ]}
            />
        </SimpleForm>
    </Edit>
);
