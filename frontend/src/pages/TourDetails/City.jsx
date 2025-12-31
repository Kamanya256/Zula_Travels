import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function City() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/city.jpg" alt="City Tours" />
        <div className="header-overlay"><h1>City Tours</h1></div>
      </div>

      <div className="package-content">
        <p>
          Discover urban highlights — cultural centers, markets, museums, nightlife and local cuisine in Kampala and Entebbe.
        </p>

        <h2>Itinerary</h2>
        <ul>
          <li>Morning cultural museum visit.</li>
          <li>Afternoon market tour and lunch at local restaurant.</li>
          <li>Evening city lights drive or cultural show.</li>
        </ul>

        <h2>Gallery</h2>
        <div className="gallery">
          <img src="/images/market.jpg" alt="Market" />
          <img src="/images/museum.jpg" alt="Museum" />
          <img src="/images/nightlife.jpg" alt="Nightlife" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Book City Tour</Link>
          <Link to="/tours" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
