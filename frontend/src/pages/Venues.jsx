import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { FaUsers, FaMoneyBillWave, FaMapMarkerAlt, FaCheckCircle, FaCar, FaHotel, FaGlassCheers, FaUtensils } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "../styles/Venues.css";

export default function Venues() {
  const [venues, setVenues] = useState([]);
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    // Fetches venues and optionally joins with hotels/cars in backend
    axios.get("http://localhost:5000/api/venues")
      .then(res => {
        setVenues(res.data);
        setFilteredVenues(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const categories = ["All", "Luxury", "Moderate", "Ordinary", "Gardens", "Hotels", "Bars", "Restaurants", "Rooftops"];

  const filterCategory = (cat) => {
    setActiveCategory(cat);
    if (cat === "All") {
      setFilteredVenues(venues);
    } else {
      setFilteredVenues(venues.filter(v => v.venue_type.toLowerCase().includes(cat.toLowerCase())));
    }
  };

  return (
    <div className="venues-container">
      {/* 1. Hero Slider */}
      <section className="venues-hero">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          navigation
          autoplay={{ delay: 5000 }}
          className="hero-swiper"
        >
          <SwiperSlide className="slide s1">
            <div className="hero-overlay">
              <h1>Luxury Wedding Gardens</h1>
              <p>Breath-taking scenery for your special day.</p>
              <button className="btn-main">Explore More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide s2">
            <div className="hero-overlay">
              <h1>Professional Conferences</h1>
              <p>Modern halls for corporate excellence.</p>
              <button className="btn-main">Book Now</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* 2. Category Filter Bar */}
      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => filterCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. Dynamic Venue Grid */}
      <section className="venue-grid-section">
        <div className="container">
          <div className="section-title">
            <h2>{activeCategory} Spaces</h2>
            <div className="underline"></div>
          </div>

          <div className="venue-grid">
            {filteredVenues.map((venue) => (
              <div key={venue.id} className="venue-card">
                <div className="venue-img-container">
                  <img src={`/assets/images/Events/venue-${venue.id}.jpg`} alt={venue.name} />
                  <span className="venue-type-tag">{venue.venue_type}</span>
                </div>

                <div className="venue-info">
                  <h3>{venue.name}</h3>
                  <p className="location"><FaMapMarkerAlt /> {venue.location || "Kampala, Uganda"}</p>

                  <div className="venue-specs">
                    <span><FaUsers /> Max: {venue.capacity}</span>
                    <span><FaMoneyBillWave /> {venue.currency} {venue.price_per_day}/day</span>
                  </div>

                  <div className="card-actions">
                    <Link to={`/booking/events/${venue.id}`} className="btn-book">Book Event</Link>
                    <div className="sub-links">
                      <Link to={`/hotel/${venue.destination_id}`} title="Connected Hotel"><FaHotel /></Link>
                      <Link to={`/cars`} title="Book Transport"><FaCar /></Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <h2>Why Choose Zula Travels?</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <FaCheckCircle className="icon" />
              <h4>Verified Venues</h4>
              <p>Every 5-star and moderate venue is physically inspected for quality.</p>
            </div>
            <div className="benefit">
              <FaCheckCircle className="icon" />
              <h4>End-to-End Logistics</h4>
              <p>We connect your venue with luxury car rentals and hotel stays.</p>
            </div>
            <div className="benefit">
              <FaCheckCircle className="icon" />
              <h4>Best Price Guarantee</h4>
              <p>Professional negotiation to ensure you get ordinary prices for luxury spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Payment Partners */}
      <section className="payment-partners">
        <h3>Secure Payment Options</h3>
        <div className="partner-logos">
          <img src="/assets/images/payments/mtn-momo.png" alt="MTN" />
          <img src="/assets/images/payments/airtel-money.png" alt="Airtel" />
          <img src="/assets/images/payments/visa.png" alt="Visa" />
          <img src="/assets/images/payments/paypal.png" alt="PayPal" />
          <img src="/assets/images/payments/flutterwave.png" alt="Flutterwave" />
        </div>
      </section>
    </div>
  );
}