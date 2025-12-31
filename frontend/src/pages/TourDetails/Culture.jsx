import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function Culture() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/culture.jpg" alt="Culture Tours" />
        <div className="header-overlay"><h1>Culture Tours</h1></div>
      </div>

      <div className="package-content">
        <p>
          Immerse in Uganda’s cultural tapestry — tribal dances, craft markets, village visits and homestays.
        </p>

        <h2>Itinerary</h2>
        <ul>
          <li>Day 1: Visit cultural village and traditional performance.</li>
          <li>Day 2: Local market tour and craft workshops.</li>
          <li>Day 3: Community cooking experience and farewell.</li>
        </ul>

        <h2>Gallery</h2>
        <div className="gallery">
          <img src="/images/dance.jpg" alt="Traditional dance" />
          <img src="/images/crafts.jpg" alt="Crafts" />
          <img src="/images/village.jpg" alt="Village visit" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Book Now</Link>
          <Link to="/tours" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
