import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function Sports() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/sports.jpg" alt="Sports Tours" />
        <div className="header-overlay"><h1>Sports Tours</h1></div>
      </div>

      <div className="package-content">
        <p>
          Sports-focused travel packages for tournaments, adventurous sporting activities and spectator events.
        </p>

        <h2>Itinerary</h2>
        <ul>
          <li>Day 1: Arrival and venue orientation.</li>
          <li>Day 2: Participate or watch sporting events.</li>
          <li>Day 3: Local sports clinics or cultural exchange.</li>
        </ul>

        <h2>Gallery</h2>
        <div className="gallery">
          <img src="/images/sports1.jpg" alt="Sports 1" />
          <img src="/images/sports2.jpg" alt="Sports 2" />
          <img src="/images/sports3.jpg" alt="Sports 3" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Arrange Sports Tour</Link>
          <Link to="/tours" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
