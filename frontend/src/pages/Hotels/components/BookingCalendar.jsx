import React, { useState } from "react";
import { FaCalendarAlt, FaUserFriends, FaBed, FaSearch } from "react-icons/fa";
import "../../../styles/BookingCalendar.css";

export default function BookingCalendar({ onDatesChange, compact = false }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);

  const handleCheckInChange = (e) => {
    const date = e.target.value;
    setCheckIn(date);
    if (checkOut && date > checkOut) {
      setCheckOut("");
    }
    onDatesChange?.({ checkIn: date, checkOut, guests, rooms });
  };

  const handleCheckOutChange = (e) => {
    const date = e.target.value;
    setCheckOut(date);
    onDatesChange?.({ checkIn, checkOut: date, guests, rooms });
  };

  const handleGuestsChange = (e) => {
    const count = parseInt(e.target.value);
    setGuests(count);
    onDatesChange?.({ checkIn, checkOut, guests: count, rooms });
  };

  const handleRoomsChange = (e) => {
    const count = parseInt(e.target.value);
    setRooms(count);
    onDatesChange?.({ checkIn, checkOut, guests, rooms: count });
  };

  const handleSearch = () => {
    // Handle search action
    console.log("Searching with:", { checkIn, checkOut, guests, rooms });
  };

  if (compact) {
    return (
      <div className="booking-calendar compact">
        <div className="booking-form">
          <div className="form-group">
            <label>
              <FaCalendarAlt className="input-icon" />
              Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={handleCheckInChange}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="form-group">
            <label>
              <FaCalendarAlt className="input-icon" />
              Check-out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={handleCheckOutChange}
              min={checkIn || new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="form-group">
            <label>
              <FaUserFriends className="input-icon" />
              Guests
            </label>
            <select value={guests} onChange={handleGuestsChange}>
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>
              <FaBed className="input-icon" />
              Rooms
            </label>
            <select value={rooms} onChange={handleRoomsChange}>
              {[1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Room' : 'Rooms'}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-calendar">
      <div className="booking-header">
        <h3>Book Your Stay</h3>
        <p>Find the perfect accommodation for your trip</p>
      </div>
      <div className="booking-form expanded">
        <div className="form-row">
          <div className="form-group">
            <label>
              <FaCalendarAlt className="input-icon" />
              Check-in Date
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={handleCheckInChange}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="form-group">
            <label>
              <FaCalendarAlt className="input-icon" />
              Check-out Date
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={handleCheckOutChange}
              min={checkIn || new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="form-group">
            <label>
              <FaUserFriends className="input-icon" />
              Guests
            </label>
            <select value={guests} onChange={handleGuestsChange}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>
              <FaBed className="input-icon" />
              Rooms
            </label>
            <select value={rooms} onChange={handleRoomsChange}>
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Room' : 'Rooms'}</option>
              ))}
            </select>
          </div>
          <button className="btn-search" onClick={handleSearch}>
            <FaSearch className="btn-icon" />
            Search Hotels
          </button>
        </div>
      </div>
    </div>
  );
}