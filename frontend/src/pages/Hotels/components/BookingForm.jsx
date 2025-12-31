
import React, { useState } from "react";

export default function BookingForm({ onSearch }) {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { destination, checkIn, checkOut, guests };
    console.log("Booking search", data);
    if (onSearch) onSearch(data);
    // navigate to search results or filter parent list
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Destination</label>
        <input value={destination} onChange={e => setDestination(e.target.value)} placeholder="City or property name" />
      </div>

      <div className="field">
        <label>Check-in</label>
        <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
      </div>

      <div className="field">
        <label>Check-out</label>
        <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
      </div>

      <div className="field">
        <label>Guests</label>
        <select value={guests} onChange={e => setGuests(e.target.value)}>
          {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} guest{n>1?"s":""}</option>)}
        </select>
      </div>

      <div className="field action">
        <button type="submit" className="btn btn-primary">Search</button>
      </div>
    </form>
  );
}
