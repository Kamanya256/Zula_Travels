import React, { useEffect, useState } from "react";
import { getFleet } from "../../services/courierApi";
import FleetCard from "../components/FleetCard";
import "../styles/courier.css";

export default function CourierHome() {
  const [fleet, setFleet] = useState([]);

  useEffect(() => {
    getFleet().then(res => setFleet(res.data));
  }, []);

  return (
    <div className="courier-home">

      {/* HERO */}
      <section className="courier-hero">
        <h1>Fast, Reliable Courier & Delivery Services</h1>
        <p>Boda Boda • Cars • Vans • Trucks • Surprise Deliveries 🎁</p>
        <a href="/courier/book" className="btn-primary">
          Book a Delivery
        </a>
      </section>

      {/* FLEET */}
      <section className="fleet-section">
        <h2>Choose Your Delivery Vehicle</h2>
        <div className="fleet-grid">
          {fleet.map(vehicle => (
            <FleetCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us">
        <h2>Why Choose Zula Courier?</h2>
        <ul>
          <li>🚀 Same-day & express delivery</li>
          <li>📍 Real-time tracking</li>
          <li>🎁 Surprise delivery support</li>
          <li>📞 24/7 customer support</li>
          <li>💳 Mobile Money, Cards & Cash</li>
        </ul>
      </section>

    </div>
  );
}
