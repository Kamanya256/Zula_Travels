import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function Pilgrim() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/pilgrim.jpg" alt="Pilgrims / Religious Tours" />
        <div className="header-overlay"><h1>Pilgrims & Religious Tours</h1></div>
      </div>

      <div className="package-content">
        <p>
          Spiritual and pilgrimage tours to sacred sites, shrines and historic churches across Uganda.
        </p>

        <h2>Itinerary</h2>
        <ul>
          <li>Day 1: Visit key shrine and participate in local services.</li>
          <li>Day 2: Guided reflection and historical site visits.</li>
          <li>Day 3: Community engagement and departure.</li>
        </ul>

        <h2>Gallery</h2>
        <div className="gallery">
          <img src="/images/shrine.jpg" alt="Shrine" />
          <img src="/images/church.jpg" alt="Church" />
          <img src="/images/pilgrim2.jpg" alt="Pilgrims" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Book Now</Link>
          <Link to="/tours" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
