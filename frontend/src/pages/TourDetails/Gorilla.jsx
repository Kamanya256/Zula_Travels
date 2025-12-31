import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function Gorilla() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/gorilla.jpg" alt="Gorilla Trekking" />
        <div className="header-overlay"><h1>Gorilla Trekking</h1></div>
      </div>

      <div className="package-content">
        <p>
          Trek through Bwindi Impenetrable Forest to meet mountain gorillas — an unforgettable, life-changing encounter.
        </p>

        <h2>Itinerary</h2>
        <ul>
          <li>Day 1: Arrival and transfer to Bwindi / Ruhija.</li>
          <li>Day 2: Gorilla trekking experience (approx. 1 hour with gorillas).</li>
          <li>Day 3: Cultural visit and return to Kampala.</li>
        </ul>

        <h2>Gallery</h2>
        <div className="gallery">
          <img src="/images/bwindi.jpg" alt="Bwindi" />
          <img src="/images/gorilla2.jpg" alt="Gorilla" />
          <img src="/images/gorilla3.jpg" alt="Gorilla family" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Book Now</Link>
          <Link to="/tours" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
