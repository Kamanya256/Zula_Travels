import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function Rafting() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/rafting.jpg" alt="White Water Rafting" />
        <div className="header-overlay"><h1>White Water Rafting</h1></div>
      </div>

      <div className="package-content">
        <p>
          Adrenaline-filled rafting on the Nile — run exciting rapids with experienced guides and safety gear.
        </p>

        <h2>Itinerary</h2>
        <ul>
          <li>Day 1: Transfer to Jinja, safety briefing and practice run.</li>
          <li>Day 2: Full-day rafting expedition on the Nile rapids.</li>
          <li>Day 3: Optional bungee or quad-bike extras, return to Kampala.</li>
        </ul>

        <h2>Gallery</h2>
        <div className="gallery">
          <img src="/images/rafting2.jpg" alt="Rafting boat" />
          <img src="/images/nile2.jpg" alt="Nile rapids" />
          <img src="/images/rafting3.jpg" alt="Adventures" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Book Now</Link>
          <Link to="/tours" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
