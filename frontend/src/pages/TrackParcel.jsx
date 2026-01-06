import React, { useState } from "react";
import { trackBooking } from "../services/courierApi";

export default function TrackParcel() {
    const [trackingId, setTrackingId] = useState("");
    const [updates, setUpdates] = useState([]);

    const track = async () => {
        const res = await trackBooking(trackingId);
        setUpdates(res.data);
    };

    return (
        <div>
            <h2>Track Your Parcel</h2>
            <input
                placeholder="Enter Tracking ID"
                onChange={e => setTrackingId(e.target.value)}
            />
            <button onClick={track}>Track</button>

            <ul>
                {updates.map((u, i) => (
                    <li key={i}>{u.status_update} – {u.current_location}</li>
                ))}
            </ul>
        </div>
    );
}
