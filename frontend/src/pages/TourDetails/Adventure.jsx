import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function Adventure() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/adventure.jpg" alt="Adventure Tours" />
        <div className="header-overlay">
          <h1>Adventure Tours</h1>
        </div>
      </div>

      <div className="package-content">
        <p>
          Experience Uganda’s most thrilling adventure tours—from rafting on the
          Nile to hiking the breathtaking Rwenzori Mountains.
        </p>

        <h2>Itinerary</h2>
        <ul>
          <li>Day 1: Arrival and transfer to Jinja.</li>
          <li>Day 2: White water rafting on the Nile.</li>
          <li>Day 3: Bungee jumping and quad biking.</li>
          <li>Day 4: Return to Kampala with a city tour.</li>
        </ul>

        <h2>Gallery</h2>
        <div className="gallery">
          <img src="/images/rafting.jpg" alt="Rafting" />
          <img src="/images/bungee.jpg" alt="Bungee Jumping" />
          <img src="/images/rwenzori.jpg" alt="Rwenzori Hike" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Book Now</Link>
          <Link to="/packages" className="back-btn">← Back to Packages</Link>
        </div>
      </div>
    </div>
  );
}
