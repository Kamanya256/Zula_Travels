import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function Safari() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/safari.jpg" alt="Game Safaris" />
        <div className="header-overlay"><h1>Game Safaris</h1></div>
      </div>

      <div className="package-content">
        <p>
          Witness the Big Five and stunning landscapes in Uganda’s most iconic parks—
          Murchison Falls, Queen Elizabeth, and Kidepo.
        </p>

        <h2>Itinerary</h2>
        <ul>
          <li>Day 1: Drive to Murchison Falls.</li>
          <li>Day 2: Morning game drive, afternoon boat cruise.</li>
          <li>Day 3: Transfer to Queen Elizabeth Park.</li>
          <li>Day 4: Game drive & return to Kampala.</li>
        </ul>

        <div className="gallery">
          <img src="/images/lion.jpg" alt="Lion" />
          <img src="/images/murchison.jpg" alt="Murchison Falls" />
          <img src="/images/elephants.jpg" alt="Elephants" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Book Now</Link>
          <Link to="/tours" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
