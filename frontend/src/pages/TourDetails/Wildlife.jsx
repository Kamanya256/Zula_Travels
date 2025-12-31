import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function Wildlife() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/wildlife.jpg" alt="Wildlife Tours" />
        <div className="header-overlay"><h1>Wildlife Tours</h1></div>
      </div>

      <div className="package-content">
        <p>
          Explore diverse ecosystems and observe wildlife across Uganda’s premier national parks.
        </p>

        <h2>Itinerary</h2>
        <ul>
          <li>Day 1: Drive to Murchison Falls or Queen Elizabeth.</li>
          <li>Day 2: Full-day game drives and evening wildlife viewing.</li>
          <li>Day 3: Boat cruise and birding activities.</li>
        </ul>

        <h2>Gallery</h2>
        <div className="gallery">
          <img src="/images/elephant.jpg" alt="Elephant" />
          <img src="/images/giraffe.jpg" alt="Giraffe" />
          <img src="/images/hippo.jpg" alt="Hippo" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Book Now</Link>
          <Link to="/tours" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
