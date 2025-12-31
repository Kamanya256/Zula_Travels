import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function Education() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/education.jpg" alt="Educational Tours" />
        <div className="header-overlay"><h1>Educational Tours</h1></div>
      </div>

      <div className="package-content">
        <p>
          Tailored school and university trips focusing on conservation, culture and hands-on learning.
        </p>

        <h2>Itinerary</h2>
        <ul>
          <li>Day 1: Educational visits to research centers.</li>
          <li>Day 2: Field studies and conservation workshops.</li>
          <li>Day 3: Cultural exchange and return.</li>
        </ul>

        <h2>Gallery</h2>
        <div className="gallery">
          <img src="/images/school.jpg" alt="School trip" />
          <img src="/images/conservation.jpg" alt="Conservation" />
          <img src="/images/workshop.jpg" alt="Workshop" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Request Quote</Link>
          <Link to="/tours" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
