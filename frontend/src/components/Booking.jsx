import React, { useState } from "react";
import { FaCalendarAlt, FaUser, FaDollarSign } from "react-icons/fa";

export default function BookingForm() {
  const [bookingData, setBookingData] = useState({
    serviceType: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    rooms: 1,
    adults: 1,
    children: 0,
    specialRequests: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    paymentMethod: "credit-card"
  });

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", bookingData);
    alert("Booking request submitted successfully!");
    // Reset form or redirect
  };

  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const checkIn = new Date(bookingData.checkIn);
      const checkOut = new Date(bookingData.checkOut);
      const diffTime = checkOut - checkIn;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 0;
    }
    return 0;
  };

  return (
    <div className="booking-form-container">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-section">
          <h3>Booking Details</h3>
          
          <div className="form-group">
            <label htmlFor="serviceType">Service Type *</label>
            <select
              id="serviceType"
              name="serviceType"
              value={bookingData.serviceType}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="hotel">Hotel Stay</option>
              <option value="tour">Tour Package</option>
              <option value="car">Car Rental</option>
              <option value="flight">Flight</option>
              <option value="event">Event</option>
              <option value="venue">Venue</option>
            </select>
          </div>

          <div className="date-grid">
            <div className="form-group">
              <label htmlFor="checkIn">
                <FaCalendarAlt className="input-icon" />
                Check-in Date *
              </label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={bookingData.checkIn}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="checkOut">
                <FaCalendarAlt className="input-icon" />
                Check-out Date *
              </label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={bookingData.checkOut}
                onChange={handleChange}
                min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
                required
              />
            </div>
          </div>

          {bookingData.checkIn && bookingData.checkOut && (
            <div className="nights-display">
              {calculateNights()} night(s) selected
            </div>
          )}

          <div className="guests-grid">
            <div className="form-group">
              <label htmlFor="adults">
                <FaUser className="input-icon" />
                Adults *
              </label>
              <select
                id="adults"
                name="adults"
                value={bookingData.adults}
                onChange={handleChange}
                required
              >
                {[1,2,3,4,5,6].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="children">Children</label>
              <select
                id="children"
                name="children"
                value={bookingData.children}
                onChange={handleChange}
              >
                {[0,1,2,3,4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            {bookingData.serviceType === 'hotel' && (
              <div className="form-group">
                <label htmlFor="rooms">Rooms</label>
                <select
                  id="rooms"
                  name="rooms"
                  value={bookingData.rooms}
                  onChange={handleChange}
                >
                  {[1,2,3,4].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        <div className="form-section">
          <h3>Contact Information</h3>
          
          <div className="form-group">
            <label htmlFor="contactName">Full Name *</label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={bookingData.contactName}
              onChange={handleChange}
              placeholder="Your full name"
              required
              autoComplete="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactEmail">Email Address *</label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              value={bookingData.contactEmail}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactPhone">Phone Number *</label>
            <input
              type="tel"
              id="contactPhone"
              name="contactPhone"
              value={bookingData.contactPhone}
              onChange={handleChange}
              placeholder="+256 XXX XXX XXX"
              required
              autoComplete="tel"
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Additional Information</h3>
          
          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={bookingData.specialRequests}
              onChange={handleChange}
              rows="4"
              placeholder="Any special requirements or requests..."
              autoComplete="off"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="paymentMethod">Preferred Payment Method</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={bookingData.paymentMethod}
              onChange={handleChange}
            >
              <option value="credit-card">Credit Card</option>
              <option value="mobile-money">Mobile Money</option>
              <option value="bank-transfer">Bank Transfer</option>
              <option value="cash">Cash</option>
            </select>
          </div>
        </div>

        <button type="submit" className="booking-submit-btn">
          <FaDollarSign className="btn-icon" />
          Book Now
        </button>
      </form>
    </div>
  );
}