import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/AccommodationCard.css";

export default function AccommodationCard({ item }) {
  const discount = item.originalPrice ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100) : 0;

  return (
    <article className="accommodation-card">
      <div className="card-media">
        <img src={item.images?.[0] || "/images/placeholder.jpg"} alt={item.name} />
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="discount-badge">
            -{discount}% OFF
          </div>
        )}
        
        {/* Rating Badge */}
        <div className="rating-badge">
          ⭐ {item.rating}
        </div>

        {/* Featured Tag */}
        {item.featured && (
          <div className="featured-badge">
            Featured
          </div>
        )}
      </div>

      <div className="card-content">
        <h3 className="hotel-name">{item.name}</h3>
        
        <div className="hotel-meta">
          <span className="star-rating">{item.star}★</span>
          <span className="region">{item.region}</span>
          {item.freeCancellation && (
            <span className="free-cancellation">Free Cancellation</span>
          )}
        </div>

        <p className="hotel-features">
          {item.features?.slice(0, 3).join(" • ")}
        </p>

        <div className="card-bottom">
          <div className="price-section">
            <div className="price-current">${item.price}</div>
            {item.originalPrice && (
              <div className="price-original">${item.originalPrice}</div>
            )}
            <div className="price-period">per night</div>
          </div>

          <div className="card-actions">
            <Link to={`/hotel/${item.id}`} className="btn-details">
              View Details
            </Link>
            <Link to={`/hotel/${item.id}?action=book`} className="btn-book">
              Book Now
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="additional-info">
          {item.breakfastIncluded && (
            <span className="info-tag">🍳 Breakfast Included</span>
          )}
          {item.freeWifi && (
            <span className="info-tag">📶 Free WiFi</span>
          )}
          {item.swimmingPool && (
            <span className="info-tag">🏊 Pool</span>
          )}
        </div>
      </div>
    </article>
  );
}