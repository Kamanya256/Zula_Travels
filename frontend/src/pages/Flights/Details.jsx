import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  FaPlane, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaClock, 
  FaDollarSign, 
  FaUsers,
  FaStar,
  FaUmbrella,
  FaTemperatureHigh,
  FaWind,
  FaCloud,
  FaPhone,
  FaEnvelope,
  FaShieldAlt,
  FaGift
} from "react-icons/fa";
import "../../styles/Flights/Details.css";

// Flight details data
const flightDetailsData = {
  1: {
    id: 1,
    route: "Entebbe → Nairobi",
    fullRoute: "Entebbe International Airport (EBB) to Jomo Kenyatta International Airport (NBO)",
    country: "Uganda - Kenya",
    price: "$120 - $280",
    duration: "1h 15m",
    description: "Daily direct flights connecting Uganda and Kenya's capital cities, offering convenient business and leisure travel options.",
    airline: "Uganda Airlines",
    aircraft: "Bombardier CRJ900",
    frequency: "2 flights daily",
    image: "/images/flights/entebbe-nairobi-detail.jpg",
    images: [
      "/images/flights/entebbe-nairobi-2.webp",
      "/images/flights/entebbe-nairobi-1.webp",
      "/images/flights/entebbe-nairobi-3.webp"
    ],
    weather: {
      temperature: "22°C - 28°C",
      condition: "Partly Cloudy",
      bestTime: "Year-round",
      season: "Tropical"
    },
    airports: {
      departure: {
        name: "Entebbe International Airport",
        code: "EBB",
        facilities: ["VIP Lounge", "Free WiFi", "Duty Free", "Restaurants", "Business Center"],
        transferTime: "45min from Kampala"
      },
      arrival: {
        name: "Jomo Kenyatta International Airport",
        code: "NBO",
        facilities: ["Multiple Lounges", "Shopping Mall", "Hotels", "Conference Facilities"],
        transferTime: "30min from Nairobi CBD"
      }
    },
    highlights: [
      "Fastest connection between East Africa's key business hubs",
      "Modern aircraft with comfortable seating",
      "Complimentary meals and beverages",
      "Frequent flyer program benefits",
      "Easy connections to other African destinations"
    ],
    tourism: {
      attractions: ["Nairobi National Park", "Giraffe Centre", "Karen Blixen Museum", "Maasai Market"],
      bestFor: ["Business trips", "Safari connections", "Cultural tours", "Shopping"]
    },
    loyalty: {
      program: "Uganda Airlines Victoria Miles",
      benefits: ["Earn miles on every flight", "Priority check-in", "Extra baggage allowance", "Lounge access"],
      partners: ["Kenya Airways", "Ethiopian Airlines", "South African Airways"]
    }
  },
  2: {
    id: 2,
    route: "Entebbe → Kigali",
    fullRoute: "Entebbe International Airport (EBB) to Kigali International Airport (KGL)",
    country: "Uganda - Rwanda",
    price: "$180 - $320",
    duration: "1h 00m",
    description: "Quick and convenient flights between Uganda and Rwanda, perfect for business meetings and regional exploration.",
    airline: "RwandAir",
    aircraft: "Boeing 737",
    frequency: "1 flight daily",
    image: "/images/flights/entebbe-kigali-detail.jpg",
    images: [
      "/images/flights/entebbe-kigali-1.jpg",
      "/images/flights/entebbe-kigali-2.jpg",
      "/images/flights/entebbe-kigali-3.jpg"
    ],
    weather: {
      temperature: "18°C - 27°C",
      condition: "Mild and Pleasant",
      bestTime: "June - September",
      season: "Temperate"
    },
    airports: {
      departure: {
        name: "Entebbe International Airport",
        code: "EBB",
        facilities: ["VIP Lounge", "Free WiFi", "Duty Free", "Restaurants"],
        transferTime: "45min from Kampala"
      },
      arrival: {
        name: "Kigali International Airport",
        code: "KGL",
        facilities: ["Modern Lounge", "Business Center", "Shopping", "Cafes"],
        transferTime: "20min from Kigali City"
      }
    },
    highlights: [
      "One of the shortest international flights in Africa",
      "Excellent on-time performance",
      "Beautiful views of Lake Victoria and Rwandan hills",
      "Warm Rwandan hospitality",
      "Efficient airport processes"
    ],
    tourism: {
      attractions: ["Kigali Genocide Memorial", "Volcanoes National Park", "Lake Kivu", "Nyamirambo Cultural Tour"],
      bestFor: ["Gorilla trekking", "Business conferences", "Cultural experiences", "Mountain hiking"]
    },
    loyalty: {
      program: "RwandAir Dream Miles",
      benefits: ["Fast track security", "Extra legroom seats", "Premium check-in", "Partner hotel discounts"],
      partners: ["Qatar Airways", "Brussels Airlines", "Ethiopian Airlines"]
    }
  },
  3: {
    id: 3,
    route: "Entebbe → Arua",
    fullRoute: "Entebbe International Airport (EBB) to Arua Airport (RUA)",
    country: "Uganda",
    price: "$150 - $220",
    duration: "1h 15m",
    description: "Domestic flights connecting Uganda's capital region to the vibrant West Nile region.",
    airline: "Uganda Airlines",
    aircraft: "Bombardier CRJ900",
    frequency: "3 flights weekly",
    image: "/images/flights/entebbe-arua-detail.jpg",
    images: [
      "/images/flights/entebbe-arua-1.jpg",
      "/images/flights/entebbe-arua-2.jpg",
      "/images/flights/entebbe-arua-3.jpg"
    ],
    weather: {
      temperature: "25°C - 32°C",
      condition: "Warm and Sunny",
      bestTime: "November - February",
      season: "Tropical Savannah"
    },
    airports: {
      departure: {
        name: "Entebbe International Airport",
        code: "EBB",
        facilities: ["VIP Lounge", "Free WiFi", "Duty Free", "Restaurants"],
        transferTime: "45min from Kampala"
      },
      arrival: {
        name: "Arua Airport",
        code: "RUA",
        facilities: ["Basic Lounge", "Refreshments", "Free Parking"],
        transferTime: "10min from Arua Town"
      }
    },
    highlights: [
      "Gateway to West Nile's cultural heritage",
      "Affordable domestic travel",
      "Beautiful aerial views of the Nile",
      "Warm local hospitality",
      "Growing business destination"
    ],
    tourism: {
      attractions: ["Rhino Sanctuary", "Murchison Falls", "Local Markets", "Cultural Villages"],
      bestFor: ["Family visits", "Business trips", "Cultural tourism", "Adventure travel"]
    },
    loyalty: {
      program: "Uganda Airlines Victoria Miles",
      benefits: ["Double miles on domestic routes", "Flexible booking", "Priority boarding", "Special offers"],
      partners: ["Local hotels in West Nile", "Car rental companies"]
    }
  }
};

export default function FlightDetails() {
  const { id } = useParams();
  const flight = flightDetailsData[id];
  const [selectedImage, setSelectedImage] = useState(0);
  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    passengers: 1,
    travelDate: "",
    message: ""
  });

  if (!flight) {
    return (
      <div className="flight-details-error">
        <div className="container">
          <h2>Flight Not Found</h2>
          <p>The flight route you're looking for doesn't exist.</p>
          <Link to="/flights" className="btn btn-primary">
            Back to Flights
          </Link>
        </div>
      </div>
    );
  }

  const handleInquiryChange = (e) => {
    setInquiryData({
      ...inquiryData,
      [e.target.name]: e.target.value
    });
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry submitted:", inquiryData);
    alert("Thank you for your inquiry! We'll contact you within 24 hours.");
    setInquiryData({
      name: "",
      email: "",
      phone: "",
      passengers: 1,
      travelDate: "",
      message: ""
    });
  };

  return (
    <div className="flight-details">
      {/* Hero Section */}
      <section className="flight-hero">
        <div className="hero-background">
          <img src={flight.image} alt={flight.route} />
          <div className="hero-overlay">
            <div className="container">
              <div className="hero-content">
                <nav className="breadcrumb">
                  <Link to="/flights">Flights</Link>
                  <Link to="/flights/airlines">Airlines</Link>
                  <span>{flight.route}</span>
                </nav>
                <h1>{flight.route}</h1>
                <p className="route-subtitle">{flight.fullRoute}</p>
                <div className="hero-features">
                  <div className="feature">
                    <FaPlane className="feature-icon" />
                    <span>{flight.airline}</span>
                  </div>
                  <div className="feature">
                    <FaClock className="feature-icon" />
                    <span>{flight.duration}</span>
                  </div>
                  <div className="feature">
                    <FaDollarSign className="feature-icon" />
                    <span>{flight.price}</span>
                  </div>
                  <div className="feature">
                    <FaCalendarAlt className="feature-icon" />
                    <span>{flight.frequency}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Main Content Grid */}
        <div className="details-grid">
          {/* Left Column - Flight Information */}
          <div className="left-column">
            {/* Image Gallery */}
            <section className="gallery-section">
              <div className="main-image">
                <img src={flight.images[selectedImage]} alt={flight.route} />
              </div>
              <div className="thumbnail-strip">
                {flight.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${flight.route} ${index + 1}`}
                    className={`thumbnail ${selectedImage === index ? "active" : ""}`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </section>

            {/* Flight Description */}
            <section className="description-section">
              <h2>About This Route</h2>
              <p>{flight.description}</p>
              
              <div className="highlights-grid">
                {flight.highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <FaStar className="highlight-icon" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Airport Information */}
            <section className="airports-section">
              <h2>Airport Information</h2>
              <div className="airports-grid">
                <div className="airport-card">
                  <h3>Departure</h3>
                  <div className="airport-name">
                    <FaMapMarkerAlt className="airport-icon" />
                    <div>
                      <strong>{flight.airports.departure.name}</strong>
                      <span className="airport-code">({flight.airports.departure.code})</span>
                    </div>
                  </div>
                  <p className="transfer-time">
                    🚗 {flight.airports.departure.transferTime}
                  </p>
                  <div className="facilities">
                    <strong>Facilities:</strong>
                    <div className="facility-tags">
                      {flight.airports.departure.facilities.map((facility, idx) => (
                        <span key={idx} className="facility-tag">{facility}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="airport-card">
                  <h3>Arrival</h3>
                  <div className="airport-name">
                    <FaMapMarkerAlt className="airport-icon" />
                    <div>
                      <strong>{flight.airports.arrival.name}</strong>
                      <span className="airport-code">({flight.airports.arrival.code})</span>
                    </div>
                  </div>
                  <p className="transfer-time">
                    🚗 {flight.airports.arrival.transferTime}
                  </p>
                  <div className="facilities">
                    <strong>Facilities:</strong>
                    <div className="facility-tags">
                      {flight.airports.arrival.facilities.map((facility, idx) => (
                        <span key={idx} className="facility-tag">{facility}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tourism Highlights */}
            <section className="tourism-section">
              <h2>Tourism Highlights</h2>
              <div className="tourism-content">
                <div className="attractions">
                  <h4>🎯 Top Attractions</h4>
                  <ul>
                    {flight.tourism.attractions.map((attraction, index) => (
                      <li key={index}>{attraction}</li>
                    ))}
                  </ul>
                </div>
                <div className="best-for">
                  <h4>👍 Perfect For</h4>
                  <div className="purpose-tags">
                    {flight.tourism.bestFor.map((purpose, index) => (
                      <span key={index} className="purpose-tag">{purpose}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Booking & Information */}
          <div className="right-column">
            {/* Quick Facts Card */}
            <section className="quick-facts-card">
              <h3>Flight Details</h3>
              <div className="facts-grid">
                <div className="fact">
                  <FaPlane className="fact-icon" />
                  <div>
                    <strong>Airline</strong>
                    <span>{flight.airline}</span>
                  </div>
                </div>
                <div className="fact">
                  <FaPlane className="fact-icon" />
                  <div>
                    <strong>Aircraft</strong>
                    <span>{flight.aircraft}</span>
                  </div>
                </div>
                <div className="fact">
                  <FaClock className="fact-icon" />
                  <div>
                    <strong>Duration</strong>
                    <span>{flight.duration}</span>
                  </div>
                </div>
                <div className="fact">
                  <FaCalendarAlt className="fact-icon" />
                  <div>
                    <strong>Frequency</strong>
                    <span>{flight.frequency}</span>
                  </div>
                </div>
              </div>
              <div className="price-section">
                <span className="price-label">Starting from</span>
                <span className="price">{flight.price}</span>
              </div>
              <div className="action-buttons">
                <Link to="/booking" className="btn btn-primary btn-book">
                  ✈️ Book This Flight
                </Link>
                <a href="tel:+256774488956" className="btn btn-secondary">
                  📞 Call to Book
                </a>
              </div>
            </section>

            {/* Weather Information */}
            <section className="weather-card">
              <h3>🌤️ Weather Information</h3>
              <div className="weather-details">
                <div className="weather-item">
                  <FaTemperatureHigh className="weather-icon" />
                  <div>
                    <strong>Temperature</strong>
                    <span>{flight.weather.temperature}</span>
                  </div>
                </div>
                <div className="weather-item">
                  <FaCloud className="weather-icon" />
                  <div>
                    <strong>Condition</strong>
                    <span>{flight.weather.condition}</span>
                  </div>
                </div>
                <div className="weather-item">
                  <FaUmbrella className="weather-icon" />
                  <div>
                    <strong>Best Time to Visit</strong>
                    <span>{flight.weather.bestTime}</span>
                  </div>
                </div>
                <div className="weather-item">
                  <FaWind className="weather-icon" />
                  <div>
                    <strong>Season</strong>
                    <span>{flight.weather.season}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Loyalty Program */}
            <section className="loyalty-card">
              <h3>🎁 Loyalty Program</h3>
              <div className="loyalty-content">
                <div className="program-name">
                  <FaGift className="program-icon" />
                  <strong>{flight.loyalty.program}</strong>
                </div>
                <div className="benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {flight.loyalty.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className="partners">
                  <h4>Partner Airlines:</h4>
                  <div className="partner-tags">
                    {flight.loyalty.partners.map((partner, index) => (
                      <span key={index} className="partner-tag">{partner}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Inquiry Form */}
            <section className="inquiry-card">
              <h3>📧 Quick Inquiry</h3>
              <form onSubmit={handleInquirySubmit} className="inquiry-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={inquiryData.name}
                    onChange={handleInquiryChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={inquiryData.email}
                    onChange={handleInquiryChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={inquiryData.phone}
                    onChange={handleInquiryChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="passengers"
                    value={inquiryData.passengers}
                    onChange={handleInquiryChange}
                  >
                    {[1,2,3,4,5,6,7,8,9].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Passenger' : 'Passengers'}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    name="travelDate"
                    value={inquiryData.travelDate}
                    onChange={handleInquiryChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your message or special requirements..."
                    value={inquiryData.message}
                    onChange={handleInquiryChange}
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-inquiry">
                  <FaEnvelope className="mr-2" />
                  Send Inquiry
                </button>
              </form>
            </section>

            {/* Contact Support */}
            <section className="support-card">
              <h3>🛡️ Need Help?</h3>
              <div className="support-content">
                <div className="support-item">
                  <FaPhone className="support-icon" />
                  <div>
                    <strong>Call Us</strong>
                    <a href="tel:+256774488956">+256 774 488 956</a>
                  </div>
                </div>
                <div className="support-item">
                  <FaEnvelope className="support-icon" />
                  <div>
                    <strong>Email Us</strong>
                    <a href="mailto:booking@zulatravels.com">booking@zulatravels.com</a>
                  </div>
                </div>
                <div className="support-item">
                  <FaShieldAlt className="support-icon" />
                  <div>
                    <strong>24/7 Support</strong>
                    <span>Always available to help</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}