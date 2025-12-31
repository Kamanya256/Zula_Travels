import React, { useState } from "react";
// import { motion } from "framer-motion";
import { Plane, MapPin, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import "../../styles/Flights/Flights.css";


import { FaPlane, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaSearch } from "react-icons/fa";

const flights = [
  {
    id: 1,
    route: "Entebbe → Nairobi",
    country: "Uganda - Kenya",
    price: "$120",
    description: "Daily direct flights connecting Uganda and Kenya's capital cities.",
    image: "/images/flights/entebbe-nairobi.jpg",
    link: "/flights/airlines/1",
  },
  {
    id: 2,
    route: "Entebbe → Kisoro",
    country: "Uganda",
    price: "$95",
    description: "Experience scenic mountain flights to Bwindi's Gorilla region.",
    image: "/images/flights/entebbe-kisoro.jpg",
    link: "/flights/airlines/2",
  },
  {
    id: 3,
    route: "Entebbe → Arua",
    country: "Uganda",
    price: "$150",
    description: "Connect to West Nile region with convenient domestic flights.",
    image: "/images/flights/entebbe-arua.jpg",
    link: "/flights/airlines/1",
  },
  {
    id: 4,
    route: "Entebbe → Kigali",
    country: "Uganda - Rwanda",
    price: "$180",
    description: "Quick connections between Uganda and Rwanda.",
    image: "/images/flights/entebbe-kigali.jpg",
    link: "/flights/airlines/2",
  },
  {
    id: 5,
    route: "Entebbe → Juba",
    country: "Uganda - South Sudan",
    price: "$250",
    description: "Reliable flights to South Sudan for business and travel.",
    image: "/images/flights/entebbe-juba.jpg",
    link: "/flights/airlines/1",
  },
  {
    id: 6,
    route: "Entebbe → Dar es Salaam",
    country: "Uganda - Tanzania",
    price: "$280",
    description: "Explore Tanzania's commercial capital with direct flights.",
    image: "/images/flights/entebbe-dar.jpg",
    link: "/flights/airlines/4",
  },
  {
    id: 7,
    route: "Entebbe → Gulu",
    country: "Uganda",
    price: "$120",
    description: "Northern Uganda connections with multiple daily flights.",
    image: "/images/flights/entebbe-gulu.jpg",
    link: "/flights/airlines/1",
  },
  {
    id: 8,
    route: "Entebbe → Kidepo",
    country: "Uganda",
    price: "$180",
    description: "Safari flights to Uganda's most remote national park.",
    image: "/images/flights/entebbe-kidepo.jpg",
    link: "/flights/airlines/3",
  },
];

export default function Flights() {
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    departDate: "",
    passengers: 1
  });

  const handleSearchChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search data:", searchData);
    alert(`Searching flights from ${searchData.from} to ${searchData.to}`);
  };

  return (
    <div className="flights-modern">
      {/* Hero Section */}
      <section className="flights-hero-modern">
        <div className="hero-background">
          <div className="hero-overlay-modern">
            <div className="hero-content-modern">
              <h1 className="hero-title">
                Explore East African Flights with Zula Travels
              </h1>
              <p className="hero-subtitle">
                Affordable regional flights connecting Uganda, Kenya, Tanzania, Rwanda, and beyond
              </p>

              {/* Search Bar */}
              <form onSubmit={handleSearchSubmit} className="search-bar-modern">
                <div className="search-input-group">
                  <div className="search-input">
                    <FaMapMarkerAlt className="search-icon" />
                    <select 
                      name="from" 
                      value={searchData.from}
                      onChange={handleSearchChange}
                      className="search-select"
                    >
                      <option value="">From</option>
                      <option value="EBB">Entebbe (EBB)</option>
                      <option value="NBO">Nairobi (NBO)</option>
                      <option value="KGL">Kigali (KGL)</option>
                      <option value="DAR">Dar es Salaam (DAR)</option>
                      <option value="JUB">Juba (JUB)</option>
                    </select>
                  </div>
                  
                  <div className="search-input">
                    <FaMapMarkerAlt className="search-icon" />
                    <select 
                      name="to" 
                      value={searchData.to}
                      onChange={handleSearchChange}
                      className="search-select"
                    >
                      <option value="">To</option>
                      <option value="EBB">Entebbe (EBB)</option>
                      <option value="NBO">Nairobi (NBO)</option>
                      <option value="KGL">Kigali (KGL)</option>
                      <option value="DAR">Dar es Salaam (DAR)</option>
                      <option value="JUB">Juba (JUB)</option>
                      <option value="RUA">Arua (RUA)</option>
                      <option value="ULU">Gulu (ULU)</option>
                      <option value="KID">Kidepo (KID)</option>
                    </select>
                  </div>
                  
                  <div className="search-input">
                    <FaCalendarAlt className="search-icon" />
                    <input
                      type="date"
                      name="departDate"
                      value={searchData.departDate}
                      onChange={handleSearchChange}
                      className="search-date"
                    />
                  </div>
                  
                  <div className="search-input">
                    <FaUsers className="search-icon" />
                    <select 
                      name="passengers" 
                      value={searchData.passengers}
                      onChange={handleSearchChange}
                      className="search-select"
                    >
                      {[1,2,3,4,5,6,7,8,9].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Passenger' : 'Passengers'}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <button type="submit" className="search-button">
                    <FaSearch className="mr-2" />
                    Search Flights
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="quick-stats-modern">
        <div className="container">
          <div className="stats-grid-modern">
            <div className="stat-item-modern">
              <FaPlane className="stat-icon-modern" />
              <div className="stat-content-modern">
                <h3>15+ Routes</h3>
                <p>Across East Africa</p>
              </div>
            </div>
            <div className="stat-item-modern">
              <div className="stat-icon-modern">💰</div>
              <div className="stat-content-modern">
                <h3>Best Prices</h3>
                <p>Guaranteed</p>
              </div>
            </div>
            <div className="stat-item-modern">
              <div className="stat-icon-modern">🛡️</div>
              <div className="stat-content-modern">
                <h3>Secure Booking</h3>
                <p>24/7 Support</p>
              </div>
            </div>
            <div className="stat-item-modern">
              <div className="stat-icon-modern">⚡</div>
              <div className="stat-content-modern">
                <h3>Instant</h3>
                <p>Confirmation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flight Cards Grid */}
      <section className="flights-grid-section">
        <div className="container">
          <h2 className="section-title-modern">Popular Regional Routes</h2>
          <p className="section-subtitle-modern">
            Discover the best flight connections across East Africa
          </p>
          
          <div className="flights-grid">
            {flights.map((flight) => (
              <div key={flight.id} className="flight-card">
                <div className="flight-card-image">
                  <img src={flight.image} alt={flight.route} />
                  <div className="flight-price">{flight.price}</div>
                </div>
                <div className="flight-card-content">
                  <h3 className="flight-route">{flight.route}</h3>
                  <p className="flight-country">{flight.country}</p>
                  <p className="flight-description">{flight.description}</p>
                  <div className="flight-card-actions">
                    <Link to={flight.link} className="btn-read-more">
                      Read More →
                    </Link>
                    <Link to="/booking" className="btn-book-now">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-modern">
        <div className="container">
          <div className="cta-content-modern">
            <h2>Need Help Choosing Your Flight?</h2>
            <p>Our travel experts are here to help you find the perfect flight at the best price</p>
            <div className="cta-actions-modern">
              <a href="tel:+256774488956" className="btn-cta-primary">
                Call Us: +256 774 488 956
              </a>
              <a href="mailto:booking@zulatravels.com" className="btn-cta-secondary">
                Email Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}