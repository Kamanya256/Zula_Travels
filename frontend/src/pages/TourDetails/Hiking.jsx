import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function Hiking() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/hiking.jpg" alt="Hiking Tours" />
        <div className="header-overlay"><h1>Hiking Tours</h1></div>
      </div>

      <div className="package-content">
        <p>
          Trek scenic trails in the Rwenzori, Mount Elgon and other adventurous ranges with experienced guides.
        </p>

        <h2>Itinerary</h2>
        <ul>
          <li>Day 1: Drive to trailhead and orientation.</li>
          <li>Day 2-4: Multi-day hiking with camping or lodge stays.</li>
          <li>Day 5: Summit attempt and return.</li>
        </ul>

        <h2>Gallery</h2>
        <div className="gallery">
          <img src="/images/rwenzori.jpg" alt="Rwenzori" />
          <img src="/images/elgon.jpg" alt="Mount Elgon" />
          <img src="/images/trek.jpg" alt="Trekking" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Book Hiking</Link>
          <Link to="/tours" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
