import React, { useState } from "react";
import { createBooking } from "../services/courierApi";
import "../styles/booking.css";

export default function CourierBooking() {
    const [form, setForm] = useState({
        pickup_address: "",
        dropoff_address: "",
        parcel_items: "",
        is_surprise: false,
        receiver_name: "",
        receiver_phone: "",
    });

    const submitBooking = async (e) => {
        e.preventDefault();
        await createBooking(form);
        alert("Booking created successfully!");
    };

    return (
        <form className="booking-form" onSubmit={submitBooking}>
            <h2>Book a Delivery</h2>

            <input
                placeholder="Pickup Address"
                onChange={e => setForm({ ...form, pickup_address: e.target.value })}
                required
            />

            <input
                placeholder="Dropoff Address"
                onChange={e => setForm({ ...form, dropoff_address: e.target.value })}
                required
            />

            <input
                placeholder="Parcel Description"
                onChange={e => setForm({ ...form, parcel_items: e.target.value })}
            />

            <label>
                <input
                    type="checkbox"
                    onChange={e => setForm({ ...form, is_surprise: e.target.checked })}
                />
                Surprise Delivery 🎁
            </label>

            {form.is_surprise && (
                <>
                    <input
                        placeholder="Receiver Name"
                        onChange={e => setForm({ ...form, receiver_name: e.target.value })}
                    />
                    <input
                        placeholder="Receiver Phone"
                        onChange={e => setForm({ ...form, receiver_phone: e.target.value })}
                    />
                </>
            )}

            <button className="btn-primary">Confirm Booking</button>
        </form>
    );
}
