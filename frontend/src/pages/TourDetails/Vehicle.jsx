import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function Vehicle() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/vehicle.jpg" alt="Vehicle Hire" />
        <div className="header-overlay"><h1>Vehicle Hire</h1></div>
      </div>

      <div className="package-content">
        <p>
          Hire reliable 4x4s, minibuses and luxury vehicles for safaris, events, and corporate travel.
        </p>

        <h2>Options</h2>
        <ul>
          <li>Daily or weekly hires with driver.</li>
          <li>Self-drive options where available.</li>
          <li>Airport pickup and long-distance transfers.</li>
        </ul>

        <h2>Gallery</h2>
        <div className="gallery">
          <img src="/images/vehicle1.jpg" alt="4x4" />
          <img src="/images/van.jpg" alt="Van" />
          <img src="/images/luxcar.jpg" alt="Luxury car" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Hire Vehicle</Link>
          <Link to="/tours" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
