import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function Marine() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/marine.jpg" alt="Marine Tours" />
        <div className="header-overlay"><h1>Marine Tours</h1></div>
      </div>

      <div className="package-content">
        <p>
          Boat cruises, island visits and fishing trips on Lake Victoria and other beautiful lakes.
        </p>

        <h2>Itinerary</h2>
        <ul>
          <li>Day 1: Boat cruise to island and beach picnic.</li>
          <li>Day 2: Fishing excursions and sunset cruise.</li>
          <li>Day 3: Return with optional hotel stay.</li>
        </ul>

        <h2>Gallery</h2>
        <div className="gallery">
          <img src="/images/boat.jpg" alt="Boat" />
          <img src="/images/lake.jpg" alt="Lake" />
          <img src="/images/island.jpg" alt="Island" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Book Cruise</Link>
          <Link to="/tours" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
