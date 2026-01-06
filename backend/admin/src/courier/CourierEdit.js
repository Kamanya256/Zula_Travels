import {
    Edit,
    SimpleForm,
    SelectInput,
    ReferenceInput
} from "react-admin";

export const CourierEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="driver_id" reference="courier_users">
                <SelectInput optionText="full_name" />
            </ReferenceInput>

            <SelectInput
                source="delivery_status"
                choices={[
                    { id: "Assigned", name: "Assigned" },
                    { id: "In Transit", name: "In Transit" },
                    { id: "Delivered", name: "Delivered" },
                    { id: "Cancelled", name: "Cancelled" }
                ]}
            />
        </SimpleForm>
    </Edit>
);
