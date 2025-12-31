import React from "react";
import Slider from "react-slick";
import { FaStar, FaMapMarkerAlt, FaBed, FaWifi, FaSwimmingPool, FaCar, FaUtensils } from "react-icons/fa";
import "../../../styles/Hotels.css";

export default function HeroSlider({ featuredAccommodations = [] }) {
  if (!featuredAccommodations || featuredAccommodations.length === 0) {
    return (
      <section className="hero-slider empty">
        <p>No featured accommodations available at the moment.</p>
      </section>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    pauseOnHover: true,
  };

  const getAccommodationIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'hotel': return '🏨';
      case 'cottage': return '🏡';
      case 'lodge': return '🌲';
      case 'apartment': return '🏢';
      default: return '🏠';
    }
  };

  const getAccommodationType = (type) => {
    switch (type?.toLowerCase()) {
      case 'hotel': return 'Luxury Hotel';
      case 'cottage': return 'Cozy Cottage';
      case 'lodge': return 'Wilderness Lodge';
      case 'apartment': return 'Furnished Apartment';
      default: return 'Accommodation';
    }
  };

  return (
    <section className="hero-slider">
      <Slider {...settings}>
        {featuredAccommodations.map((item) => {
          const discount = item.originalPrice ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100) : 0;
          
          return (
            <div key={item.id} className="hero-slide">
              <div className="slide-background">
                <img src={item.image} alt={item.name} />
                <div className="slide-overlay"></div>
              </div>
              
              <div className="hero-content">
                {/* Badges */}
                <div className="accommodation-badges">
                  <span className="type-badge">
                    {getAccommodationIcon(item.type)} {getAccommodationType(item.type)}
                  </span>
                  {discount > 0 && (
                    <span className="discount-badge">
                      🔥 {discount}% OFF
                    </span>
                  )}
                  {item.featured && (
                    <span className="featured-badge">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                {/* Main Content */}
                <h1 className="accommodation-name">{item.name}</h1>
                
                <div className="accommodation-meta">
                  <span className="location">
                    <FaMapMarkerAlt className="meta-icon" />
                    {item.location}
                  </span>
                  <span className="rating">
                    <FaStar className="meta-icon" />
                    {item.rating} ({item.reviews} reviews)
                  </span>
                  <span className="stars">
                    {'★'.repeat(item.stars)} {item.stars}-Star
                  </span>
                </div>

                <p className="accommodation-description">{item.description}</p>

                {/* Features */}
                <div className="accommodation-features">
                  {item.features?.slice(0, 4).map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature.includes('WiFi') && <FaWifi />}
                      {feature.includes('Pool') && <FaSwimmingPool />}
                      {feature.includes('Parking') && <FaCar />}
                      {feature.includes('Breakfast') && <FaUtensils />}
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="accommodation-pricing">
                  <div className="price-section">
                    {item.originalPrice && (
                      <span className="original-price">${item.originalPrice}</span>
                    )}
                    <span className="current-price">${item.price}</span>
                    <span className="price-period">per night</span>
                  </div>
                  
                  <div className="cta-buttons">
                    <button className="btn-view-details">
                      View Details
                    </button>
                    <button className="btn-book-now">
                      Book Now
                    </button>
                  </div>
                </div>

                {/* Special Offers */}
                {item.specialOffers && (
                  <div className="special-offers">
                    <h4>Special Offers:</h4>
                    <div className="offers-list">
                      {item.specialOffers.map((offer, index) => (
                        <span key={index} className="offer-tag">🎁 {offer}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Stats */}
                <div className="quick-stats">
                  <div className="stat">
                    <FaBed className="stat-icon" />
                    <span>{item.rooms} Rooms</span>
                  </div>
                  <div className="stat">
                    <FaWifi className="stat-icon" />
                    <span>Free WiFi</span>
                  </div>
                  {item.freeCancellation && (
                    <div className="stat">
                      <span className="stat-icon">🔄</span>
                      <span>Free Cancellation</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}