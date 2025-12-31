import React, { useState, useEffect } from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

const flightImages = [
  "/images/flights1.jpg",
  "/images/flights2.jpg",
  "/images/flights3.jpg",
];

export default function Flight() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % flightImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="package-details-container">

      {/* Hero Image Slider */}
      <div className="package-hero-slider">
        {flightImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Flight Slide ${index + 1}`}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          />
        ))}
        <div className="hero-overlay">
          <h1>Flight Bookings</h1>
        </div>
      </div>

      {/* Package Content */}
      <div className="package-content">
        <p>
          We handle domestic and international flight reservations, seat selection, and ticketing at competitive rates.
        </p>

        <h2>Airports & Airlines</h2>
        <ul>
          <li>Domestic airports: Entebbe, Arua, Gulu, Mbale.</li>
          <li>International hubs: Entebbe International Airport.</li>
          <li>Airlines: Uganda Airlines, RwandAir, Ethiopian Airlines, Kenya Airways.</li>
        </ul>

        <h2>Aircraft & Seat Options</h2>
        <ul>
          <li>Commercial aircraft: Airbus A330, Bombardier CRJ, Boeing 737.</li>
          <li>Seat classes: Economy, Premium Economy, Business, First Class.</li>
          <li>Special requirements: Meals, wheelchair assistance, pet travel.</li>
        </ul>

        <h2>Booking & Check-in</h2>
        <ul>
          <li>Book online, via phone, or at our offices.</li>
          <li>Check-in: Online check-in 24h before departure or at airport counters.</li>
          <li>Document requirements: Valid passport or ID, visa if applicable.</li>
        </ul>

        <h2>Payment Methods</h2>
        <ul>
          <li>Mobile money: MTN, Airtel.</li>
          <li>Credit/Debit cards: Visa, Mastercard, AMEX.</li>
          <li>Bank transfers and on-site payments.</li>
        </ul>

        <h2>Gallery</h2>
        <div className="gallery">
          {flightImages.map((img, index) => (
            <img key={index} src={img} alt={`Flight Gallery ${index + 1}`} />
          ))}
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Book Flight</Link>
          <Link to="/packages" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
