import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
  FaCar,
  FaSpa,
  FaDumbbell,
  FaArrowLeft,
  FaCheck,
  FaCalendarAlt,
  FaUserFriends,
  FaBed
} from "react-icons/fa";
import "../styles/HotelDetails.css";

export default function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(0);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 2,
    rooms: 1,
    specialRequests: ""
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [hotelData, setHotelData] = useState(null); // { hotel, rooms }

  // Local static extras: features, inclusions, offers, images, stars, rating, reviews
  const staticExtrasByName = {
    "Kampala Serena Hotel": {
      star: 5,
      rating: 4.9,
      reviews: 1247,
      inclusions: [
        "Free WiFi & Breakfast",
        "24-hour Room Service",
        "Airport Transfers",
        "Gym & Spa Access",
        "Swimming Pool",
        "Business Center",
        "Concierge Service"
      ],
      features: [
        { icon: <FaWifi />, text: "Free High-Speed WiFi" },
        { icon: <FaSwimmingPool />, text: "Infinity Pool" },
        { icon: <FaUtensils />, text: "3 Restaurants & Bar" },
        { icon: <FaSpa />, text: "Luxury Spa" },
        { icon: <FaDumbbell />, text: "Fitness Center" },
        { icon: <FaCar />, text: "Free Parking" }
      ],
      offers: [
        "10% Early Bird Discount",
        "Free City Tour for 3+ Nights",
        "Pay at Hotel — No Prepayment Required",
        "Complimentary Welcome Drink"
      ],
      images: [
        "/images/hotels/serena-1.jpg",
        "/images/hotels/serena-2.jpg",
        "/images/hotels/serena-3.jpg",
        "/images/hotels/serena-4.jpg"
      ],
      originalPrice: null // if you want a discount, set e.g. 320
    },
    "Hotel Brovad Kalangala": {
      star: 4,
      rating: 4.6,
      reviews: 530,
      inclusions: [
        "Island Transfers (on request)",
        "Breakfast Included",
        "Beach Access",
        "Swimming Pool",
        "Free WiFi in Public Areas",
        "Restaurant & Bar"
      ],
      features: [
        { icon: <FaSwimmingPool />, text: "Outdoor Pool" },
        { icon: <FaUtensils />, text: "On-site Restaurant" },
        { icon: <FaCar />, text: "Parking Available" },
        { icon: "🏝️", text: "Island Beachfront" },
        { icon: "🌅", text: "Sunset Views" },
        { icon: "🚤", text: "Boat Activities" }
      ],
      offers: [
        "Weekend Island Getaway Deal",
        "Free Breakfast",
        "Pay at Hotel",
        "Group Discounts Available"
      ],
      images: [
        "/images/hotels/brovad-1.jpg",
        "/images/hotels/brovad-2.jpg",
        "/images/hotels/brovad-3.jpg",
        "/images/hotels/brovad-4.jpg"
      ],
      originalPrice: null
    },
    "Nican Hotel Sseguku": {
      star: 3,
      rating: 4.3,
      reviews: 210,
      inclusions: [
        "Free WiFi",
        "Breakfast Included",
        "Secure Parking",
        "24-hour Front Desk"
      ],
      features: [
        { icon: <FaWifi />, text: "Free WiFi" },
        { icon: <FaUtensils />, text: "Restaurant" },
        { icon: <FaCar />, text: "Secure Parking" },
        { icon: "🧺", text: "Laundry Service" },
        { icon: "🕒", text: "24/7 Reception" },
        { icon: "🛏️", text: "Comfortable Rooms" }
      ],
      offers: [
        "Business Traveller Special",
        "Long Stay Discounts",
        "Pay at Hotel"
      ],
      images: [
        "/images/hotels/nican-1.jpg",
        "/images/hotels/nican-2.jpg",
        "/images/hotels/nican-3.jpg",
        "/images/hotels/nican-4.jpg"
      ],
      originalPrice: null
    },
    "Hotel Africana": {
      star: 4,
      rating: 4.5,
      reviews: 980,
      inclusions: [
        "Free WiFi",
        "Breakfast Included",
        "Swimming Pool",
        "Conference Facilities",
        "Gym Access"
      ],
      features: [
        { icon: <FaSwimmingPool />, text: "Outdoor Pool" },
        { icon: <FaUtensils />, text: "Multiple Restaurants" },
        { icon: <FaDumbbell />, text: "Gym" },
        { icon: <FaCar />, text: "Secure Parking" },
        { icon: "🏢", text: "Conference Halls" },
        { icon: "🌆", text: "City View" }
      ],
      offers: [
        "Conference Group Rates",
        "Weekend Stay Packages",
        "Free Breakfast"
      ],
      images: [
        "/images/hotels/africana-1.jpg",
        "/images/hotels/africana-2.jpg",
        "/images/hotels/africana-3.jpg",
        "/images/hotels/africana-4.jpg"
      ],
      originalPrice: null
    },
    "Sheraton Kampala Hotel": {
      star: 5,
      rating: 4.7,
      reviews: 1500,
      inclusions: [
        "Free WiFi",
        "Breakfast Optional",
        "Swimming Pool",
        "Gym & Spa",
        "Business Center",
        "Airport Transfers (on request)"
      ],
      features: [
        { icon: <FaSwimmingPool />, text: "Outdoor Pool" },
        { icon: <FaUtensils />, text: "Multiple Dining Options" },
        { icon: <FaSpa />, text: "Spa & Wellness" },
        { icon: <FaDumbbell />, text: "Modern Gym" },
        { icon: <FaCar />, text: "Valet Parking" },
        { icon: "🌇", text: "City Skyline Views" }
      ],
      offers: [
        "Weekend Staycation Deal",
        "Business Travel Package",
        "Member Rewards Nights"
      ],
      images: [
        "/images/hotels/sheraton-1.jpg",
        "/images/hotels/sheraton-2.jpg",
        "/images/hotels/sheraton-3.jpg",
        "/images/hotels/sheraton-4.jpg"
      ],
      originalPrice: null
    }
  };

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`http://localhost:5000/api/hotels/${id}`);
        if (!res.ok) {
          if (res.status === 404) {
            setError("Hotel not found");
          } else {
            setError("Failed to load hotel details");
          }
          setLoading(false);
          return;
        }
        const data = await res.json(); // { hotel, rooms }
        setHotelData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching hotel:", err);
        setError("Unable to connect to the server");
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id]);

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", {
      hotelId: id,
      ...bookingData
    });
    alert("Booking request submitted! We'll contact you shortly to confirm.");
  };

  // Loading state
  if (loading) {
    return (
      <div className="hotel-details error-page">
        <div className="container">
          <h2>Loading hotel...</h2>
        </div>
      </div>
    );
  }

  // Error or not found
  if (error || !hotelData || !hotelData.hotel) {
    return (
      <div className="hotel-details error-page">
        <div className="container">
          <h2>{error || "Hotel Not Found"}</h2>
          <p>The hotel you're looking for doesn't exist or could not be loaded.</p>
          <button onClick={() => navigate("/hotels")} className="btn-primary">
            Browse All Hotels
          </button>
        </div>
      </div>
    );
  }

  const { hotel, rooms } = hotelData;

  // Match extras based on hotel.name, fallback to some safe defaults
  const extras =
    staticExtrasByName[hotel.name] || {
      star: 3,
      rating: hotel.rating || 4.0,
      reviews: 100,
      inclusions: ["Free WiFi", "Breakfast Available"],
      features: [
        { icon: <FaWifi />, text: "Free WiFi" },
        { icon: <FaCar />, text: "Parking" }
      ],
      offers: ["Special rates available"],
      images: [hotel.image_url || "/images/hotels/default-1.jpg"],
      originalPrice: null
    };

  // Use rooms from DB, but shape them like your previous roomTypes
  const roomTypes =
    rooms && rooms.length > 0
      ? rooms.map((r) => ({
        name: r.room_type,
        price: Number(r.price_per_night),
        capacity: `${r.capacity} Guests`
      }))
      : [];

  const currentPrice = Number(hotel.price_per_night);
  const originalPrice = extras.originalPrice || null;
  const discount =
    originalPrice && originalPrice > currentPrice
      ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
      : 0;

  const images = extras.images && extras.images.length > 0
    ? extras.images
    : [hotel.image_url || "/images/hotels/default-1.jpg"];

  return (
    <div className="hotel-details">
      {/* HERO SECTION */}
      <section className="hotel-hero">
        <div className="hero-background">
          <img src={images[selectedImage]} alt={hotel.name} />
          <div className="hero-overlay"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <button onClick={() => navigate(-1)} className="back-btn">
              <FaArrowLeft />
              Back to Hotels
            </button>

            <div className="hotel-header">
              <div className="hotel-badges">
                <span className="star-badge">
                  {"★".repeat(extras.star)} {extras.star}-Star
                </span>
                {discount > 0 && (
                  <span className="discount-badge">🔥 {discount}% OFF</span>
                )}
                <span className="rating-badge">
                  <FaStar /> {extras.rating} ({extras.reviews} reviews)
                </span>
              </div>

              <h1>{hotel.name}</h1>

              <div className="hotel-location">
                <FaMapMarkerAlt />
                {hotel.location || `${hotel.city || ""}, ${hotel.country || ""}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="container">
        <div className="details-grid">
          {/* LEFT COLUMN - Hotel Info */}
          <div className="hotel-info">
            {/* Image Gallery */}
            <div className="image-gallery">
              <div className="main-image">
                <img src={images[selectedImage]} alt={hotel.name} />
              </div>
              <div className="thumbnail-grid">
                {images.map((img, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${selectedImage === index ? "active" : ""
                      }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={img} alt={`${hotel.name} ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Hotel Description */}
            <section className="description-section">
              <h2>About {hotel.name}</h2>
              <p className="main-description">
                {hotel.description || "Enjoy a comfortable stay at this property."}
              </p>
              {/* If you later add a long_description column, show it here */}
              <p className="detailed-description">
                Located in {hotel.location || hotel.city || "this destination"},
                this hotel offers a blend of comfort and convenience for both
                business and leisure travellers.
              </p>
            </section>

            {/* Features */}
            <section className="features-section">
              <h3>Hotel Features</h3>
              <div className="features-grid">
                {extras.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Room Types */}
            <section className="rooms-section">
              <h3>Room Types</h3>
              <div className="rooms-grid">
                {roomTypes.length > 0 ? (
                  roomTypes.map((room, index) => (
                    <div key={index} className="room-card">
                      <h4>{room.name}</h4>
                      <p className="room-capacity">{room.capacity}</p>
                      <div className="room-price">${room.price}</div>
                      <span className="price-period">per night</span>
                    </div>
                  ))
                ) : (
                  <p>No room details available yet.</p>
                )}
              </div>
            </section>

            {/* Inclusions */}
            <section className="inclusions-section">
              <h3>What's Included</h3>
              <div className="inclusions-list">
                {extras.inclusions.map((item, index) => (
                  <div key={index} className="inclusion-item">
                    <FaCheck className="inclusion-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Special Offers */}
            <section className="offers-section">
              <h3>Special Offers</h3>
              <div className="offers-list">
                {extras.offers.map((offer, index) => (
                  <div key={index} className="offer-card">
                    <span className="offer-badge">🎁</span>
                    <span>{offer}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN - Booking Form */}
          <div className="booking-sidebar">
            <div className="booking-card">
              <div className="price-section">
                {originalPrice && (
                  <div className="original-price">${originalPrice}</div>
                )}
                <div className="current-price">${currentPrice}</div>
                <div className="price-period">per night</div>
                {discount > 0 && (
                  <div className="savings">
                    Save ${originalPrice - currentPrice} per night
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="booking-form">
                <h4>Book Your Stay</h4>

                <div className="form-group">
                  <label>
                    <FaCalendarAlt className="input-icon" />
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={bookingData.checkIn}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    <FaCalendarAlt className="input-icon" />
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={bookingData.checkOut}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>
                      <FaUserFriends className="input-icon" />
                      Guests
                    </label>
                    <select
                      name="guests"
                      value={bookingData.guests}
                      onChange={handleInputChange}
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>
                      <FaBed className="input-icon" />
                      Rooms
                    </label>
                    <select
                      name="rooms"
                      value={bookingData.rooms}
                      onChange={handleInputChange}
                    >
                      {[1, 2, 3, 4].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Room" : "Rooms"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Special Requests</label>
                  <textarea
                    name="specialRequests"
                    value={bookingData.specialRequests}
                    onChange={handleInputChange}
                    placeholder="Any preferences or special requirements..."
                    rows="3"
                  />
                </div>

                <button type="submit" className="book-now-btn">
                  Book Now
                </button>

                <div className="booking-guarantee">
                  <FaCheck className="guarantee-icon" />
                  <span>
                    Best Price Guarantee • Free Cancellation • 24/7 Support
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
