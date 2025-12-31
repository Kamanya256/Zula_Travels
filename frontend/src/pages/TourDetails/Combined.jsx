import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function Combined() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/combined.jpg" alt="Combined Tours" />
        <div className="header-overlay"><h1>Combined Tours</h1></div>
      </div>

      <div className="package-content">
        <p>
          Combine multiple experiences — wildlife, culture and adventure — into a single customized itinerary.
        </p>

        <h2>Sample Itinerary</h2>
        <ul>
          <li>Day 1: Arrival and city tour.</li>
          <li>Day 2-3: Gorillas and wildlife excursions.</li>
          <li>Day 4: Cultural village visit and relaxation.</li>
        </ul>

        <h2>Gallery</h2>
        <div className="gallery">
          <img src="/images/combined1.jpg" alt="Combined 1" />
          <img src="/images/combined2.jpg" alt="Combined 2" />
          <img src="/images/combined3.jpg" alt="Combined 3" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Customize & Book</Link>
          <Link to="/tours" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
