import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Flights/Airlines.css";

const allAirlines = [
  {
    id: 1,
    name: "Uganda Airlines",
    logo: "/images/uganda-airlines.jpg",
    description: "Uganda's national carrier offering premium services across Africa and beyond.",
    baseFare: 150,
    routes: ["Entebbe-Nairobi", "Entebbe-Dar es Salaam", "Entebbe-Juba", "Entebbe-Dubai"],
    aircraft: ["Bombardier CRJ900", "Airbus A330neo"]
  },
  {
    id: 2,
    name: "RwandAir",
    logo: "/images/rwandair.jpg",
    description: "Award-winning airline connecting East Africa to the world.",
    baseFare: 180,
    routes: ["Entebbe-Kigali", "Entebbe-Accra", "Entebbe-London", "Entebbe-Brussels"],
    aircraft: ["Boeing 737", "Bombardier Q400"]
  },
  {
    id: 3,
    name: "Ethiopian Airlines",
    logo: "/images/ethiopian-airlines.jpg",
    description: "Africa's largest airline with extensive global network.",
    baseFare: 220,
    routes: ["Entebbe-Addis Ababa", "Entebbe-New York", "Entebbe-Beijing", "Entebbe-Frankfurt"],
    aircraft: ["Boeing 787", "Boeing 777", "Airbus A350"]
  },
  {
    id: 4,
    name: "Kenya Airways",
    logo: "/images/kenya-airways.jpg",
    description: "The Pride of Africa with excellent regional connectivity.",
    baseFare: 170,
    routes: ["Entebbe-Nairobi", "Entebbe-Mombasa", "Entebbe-Lagos", "Entebbe-Johannesburg"],
    aircraft: ["Boeing 787", "Embraer 190"]
  },
  {
    id: 5,
    name: "Emirates",
    logo: "/images/emirates.jpg",
    description: "World-class luxury airline with premium services.",
    baseFare: 450,
    routes: ["Entebbe-Dubai", "Dubai connections worldwide"],
    aircraft: ["Airbus A380", "Boeing 777"]
  },
  {
    id: 6,
    name: "Qatar Airways",
    logo: "/images/qatar-airways.jpg",
    description: "Award-winning airline with exceptional service standards.",
    baseFare: 420,
    routes: ["Entebbe-Doha", "Doha connections worldwide"],
    aircraft: ["Airbus A350", "Boeing 787"]
  },
  {
    id: 7,
    name: "Turkish Airlines",
    logo: "/images/turkish-airlines.jpg",
    description: "Flying to more countries than any other airline.",
    baseFare: 380,
    routes: ["Entebbe-Istanbul", "Istanbul connections worldwide"],
    aircraft: ["Boeing 737", "Airbus A330"]
  },
  {
    id: 8,
    name: "EgyptAir",
    logo: "/images/egyptair.jpg",
    description: "Connecting Africa through Cairo hub.",
    baseFare: 320,
    routes: ["Entebbe-Cairo", "Cairo connections to Middle East"],
    aircraft: ["Airbus A320", "Boeing 737"]
  },
  {
    id: 9,
    name: "South African Airways",
    logo: "/images/saa.jpg",
    description: "Reliable service across Southern Africa.",
    baseFare: 280,
    routes: ["Entebbe-Johannesburg", "Entebbe-Cape Town"],
    aircraft: ["Airbus A319", "Airbus A320"]
  },
  {
    id: 10,
    name: "Fly Dubai",
    logo: "/images/flydubai.jpg",
    description: "Low-cost carrier with excellent value.",
    baseFare: 190,
    routes: ["Entebbe-Dubai", "Regional connections"],
    aircraft: ["Boeing 737 MAX"]
  }
];

export default function Airlines() {
  return (
    <div className="airlines-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <nav className="breadcrumb">
            <Link to="/flights">Flights</Link>
            <span>Airlines</span>
          </nav>
          <h1>Our Partner Airlines</h1>
          <p className="page-subtitle">Choose from our trusted airline partners for your journey</p>
        </div>

        {/* Airlines Grid */}
        <div className="airlines-grid">
          {allAirlines.map((airline) => (
            <div key={airline.id} className="airline-card">
              <div className="card-header">
                <img src={airline.logo} alt={airline.name} className="airline-logo" />
                <h3>{airline.name}</h3>
              </div>
              
              <div className="card-content">
                <p className="description">{airline.description}</p>
                
                <div className="airline-features">
                  <div className="feature">
                    <strong>Starting from:</strong>
                    <span className="price">${airline.baseFare}</span>
                  </div>
                  <div className="feature">
                    <strong>Aircraft:</strong>
                    <span>{airline.aircraft.join(", ")}</span>
                  </div>
                </div>

                <div className="popular-routes">
                  <strong>Popular Routes:</strong>
                  <div className="routes">
                    {airline.routes.slice(0, 3).map((route, idx) => (
                      <span key={idx} className="route">{route}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card-actions">
                <Link 
                  to={`/flights/airlines/${airline.id}`} 
                  className="btn btn-primary"
                >
                  View Details
                </Link>
                <Link to="/booking" className="btn btn-outline">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="support-section">
          <div className="support-content">
            <h3>Need Help Choosing?</h3>
            <p>Our flight experts are here to help you select the best airline for your journey</p>
            <div className="support-contacts">
              <a href="tel:+256774488956" className="contact-link">
                📞 +256 774 488 956
              </a>
              <a href="mailto:booking@zulatravels.com" className="contact-link">
                ✉️ booking@zulatravels.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}