import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function Bird() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/bird.jpg" alt="Bird Watching" />
        <div className="header-overlay"><h1>Bird Watching</h1></div>
      </div>

      <div className="package-content">
        <p>
          Join expert guides to spot Uganda’s rich avian life — ideal for birders and nature lovers.
        </p>

        <h2>Itinerary</h2>
        <ul>
          <li>Day 1: Transfer to birding hotspot (e.g. Bigodi, Mabamba).</li>
          <li>Day 2: Sunrise guided bird walks and wetland excursions.</li>
          <li>Day 3: Optional boat birding and transfer back.</li>
        </ul>

        <h2>Gallery</h2>
        <div className="gallery">
          <img src="/images/bird1.jpg" alt="Bird" />
          <img src="/images/bird2.jpg" alt="Heron" />
          <img src="/images/bird3.jpg" alt="Wetland birding" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Book Now</Link>
          <Link to="/tours" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
