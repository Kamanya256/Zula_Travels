import React from "react";
import "../../styles/PackageDetails.css";
import { Link } from "react-router-dom";

export default function Transfer() {
  return (
    <div className="package-details-container">
      <div className="package-header">
        <img src="/images/transfer.jpg" alt="Airport Transfers" />
        <div className="header-overlay"><h1>Airport Transfers</h1></div>
      </div>

      <div className="package-content">
        <p>
          Reliable transfers to and from Entebbe or Kajjansi airports — private or shared vehicles with professional drivers.
        </p>

        <h2>Services</h2>
        <ul>
          <li>Meet & greet at arrivals.</li>
          <li>Private sedan, SUV or minivan options.</li>
          <li>Flight tracking and flexible pickup times.</li>
        </ul>

        <h2>Gallery</h2>
        <div className="gallery">
          <img src="/images/transfer1.jpg" alt="Car transfer" />
          <img src="/images/transfer2.jpg" alt="Meet and greet" />
          <img src="/images/transfer3.jpg" alt="Airport" />
        </div>

        <div className="button-container">
          <Link to="/booking" className="book-btn">Request Transfer</Link>
          <Link to="/tours" className="back-btn">← Back</Link>
        </div>
      </div>
    </div>
  );
}
