import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function Chimps() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/chimps.jpg" alt="Chimps Trekking" />
        <div className="header-overlay"><h1>Chimps Trekking</h1></div>
      </div>

      <div className="package-content">
        <p>
          Explore Kibale National Park and get up close with Uganda’s playful
          chimpanzees in their natural habitat.
        </p>

        <h2>Itinerary</h2>
        <ul>
          <li>Day 1: Arrival and transfer to Kibale.</li>
          <li>Day 2: Morning chimp tracking, afternoon nature walk.</li>
          <li>Day 3: Visit Bigodi Swamp for birdwatching.</li>
          <li>Day 4: Return to Kampala.</li>
        </ul>

        <div className="gallery">
          <img src="/images/kibale.jpg" alt="Kibale Forest" />
          <img src="/images/chimps2.jpg" alt="Chimps" />
          <img src="/images/swamp.jpg" alt="Bigodi Swamp" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Book Now</Link>
          <Link to="/tours" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
