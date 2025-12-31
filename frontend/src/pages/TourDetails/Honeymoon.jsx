import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function Honeymoon() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/honeymoon.jpg" alt="Honeymoon Packages" />
        <div className="header-overlay"><h1>Honeymoon Packages</h1></div>
      </div>

      <div className="package-content">
        <p>
          Romantic escapes — private lodges, sunset cruises, spa treatments and intimate dining to celebrate love.
        </p>

        <h2>Itinerary</h2>
        <ul>
          <li>Day 1: Arrival and lakeside dinner.</li>
          <li>Day 2: Private boat cruise and couple’s spa.</li>
          <li>Day 3: Island relaxation or guided nature walk.</li>
        </ul>

        <h2>Gallery</h2>
        <div className="gallery">
          <img src="/images/couple1.jpg" alt="Couple" />
          <img src="/images/honeymoon2.jpg" alt="Romantic Dinner" />
          <img src="/images/honeymoon3.jpg" alt="Resort" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Book Now</Link>
          <Link to="/tours" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
