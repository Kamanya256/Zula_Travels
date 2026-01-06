import React from "react";

export default function FleetCard({ vehicle }) {
    return (
        <div className="fleet-card">
            <img src={vehicle.image_url} alt={vehicle.vehicle_name} />
            <h3>{vehicle.vehicle_name}</h3>
            <p>Max Weight: {vehicle.max_weight_kg}kg</p>
            <p>From UGX {vehicle.base_fare}</p>

            <a href={`/courier/book?vehicle=${vehicle.id}`} className="btn-outline">
                Select
            </a>
        </div>
    );
}
