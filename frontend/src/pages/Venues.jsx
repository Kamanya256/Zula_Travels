import React from "react";
import "../styles/Venues.css";
import { FaRing, FaBuilding, FaUsers, FaTree } from "react-icons/fa";

import wedding from "../assets/images/events/wedding.jpg";
import corporate from "../assets/images/events/corporate.jpg";
import conference from "../assets/images/events/conference.jpg";
import outdoor from "../assets/images/events/outdoor.jpg";

export default function Venues() {
  const eventTypes = [
    {
      icon: <FaRing />,
      title: "Wedding Venues",
      img: wedding,
      description:
        "Elegant gardens, luxury hotels, and lake-view resorts perfect for weddings and receptions across Uganda and East Africa.",
    },
    {
      icon: <FaBuilding />,
      title: "Corporate Parties",
      img: corporate,
      description:
        "Professional spaces for company parties, award nights, and staff retreats with full catering and decor services.",
    },
    {
      icon: <FaUsers />,
      title: "Conferences & Meetings",
      img: conference,
      description:
        "Book conference halls, seminar centers, and business hotels with projectors, Wi-Fi, and seating capacity up to 1000 guests.",
    },
    {
      icon: <FaTree />,
      title: "Outdoor Venues",
      img: outdoor,
      description:
        "Nature-inspired gardens, beaches, and open lawns suitable for birthdays, cultural events, and community gatherings.",
    },
  ];

  return (
    <div className="venues-page">
      {/* Hero section */}
      <header className="venues-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Event Venues & Bookings</h1>
          <p>
            Find and book perfect venues for weddings, conferences, and private events — all in one place.
          </p>
        </div>
      </header>

      {/* Event Types */}
      <section className="venue-types">
        <h2>Explore Our Event Categories</h2>
        <div className="venue-grid">
          {eventTypes.map((event, i) => (
            <div className="venue-card" key={i}>
              <div className="icon">{event.icon}</div>
              <img src={event.img} alt={event.title} />
              <div className="venue-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <button className="btn-book">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="venue-cta">
        <h2>Host Your Next Event with Confidence</h2>
        <p>
          From venue selection to setup, Zula Travels ensures every event is seamless.  
          Talk to our event specialists today to plan your next memorable experience.
        </p>
        <a href="/contact" className="btn-contact">
          Contact Us
        </a>
      </section>
    </div>
  );
}
