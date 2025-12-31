import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Hotels.css";

export default function Hotels() {
  // 5-Star Hotels
  const fiveStarHotels = [
    {
      id: 1,
      name: "Kampala Serena Hotel",
      location: "Kampala, Uganda",
      price: "$280 / night",
      discount: "$320",
      image: "/images/serena.jpg",
      description: "A 5-star luxury hotel offering world-class comfort, elegant rooms, fine dining, and spa facilities in the heart of Kampala.",
      features: ["Swimming Pool", "Spa & Wellness", "Fine Dining", "Conference Facilities", "Free WiFi"],
      rating: 5,
      region: "Central"
    },
    {
      id: 2,
      name: "Lake Victoria Serena Golf Resort",
      location: "Kigo, Uganda",
      price: "$320 / night",
      discount: "$380",
      image: "/images/speak.jpg",
      description: "Luxury resort with championship golf course, stunning lake views, and premium amenities.",
      features: ["Golf Course", "Lake View", "Luxury Spa", "Water Sports", "Fine Dining"],
      rating: 5,
      region: "Central"
    }
  ];

  // 4-Star Hotels
  const fourStarHotels = [
    {
      id: 3,
      name: "Speke Resort Munyonyo",
      location: "Kampala, Uganda",
      price: "$180 / night",
      discount: "$220",
      image: "/images/speak.jpg",
      description: "Luxurious resort with multiple pools, conference facilities, and beautiful lake views.",
      features: ["Multiple Pools", "Lake View", "Fitness Center", "Restaurants", "Free Parking"],
      rating: 4,
      region: "Central"
    },
    {
      id: 4,
      name: "Mweya Safari Lodge",
      location: "Queen Elizabeth National Park",
      price: "$220 / night",
      discount: "$260",
      image: "/images/serena.jpg",
      description: "Premium safari lodge with stunning views of Kazinga Channel and wildlife encounters.",
      features: ["Wildlife Viewing", "Swimming Pool", "Game Drives", "Restaurant", "Bar"],
      rating: 4,
      region: "Western"
    }
  ];

  // 3-Star Hotels
  const threeStarHotels = [
    {
      id: 5,
      name: "Forest Cottages",
      location: "Kampala, Uganda",
      price: "$90 / night",
      discount: "$120",
      image: "/images/speak.jpg",
      description: "Comfortable cottages in a serene environment with modern amenities.",
      features: ["Garden View", "Free WiFi", "Restaurant", "Parking", "24/7 Security"],
      rating: 3,
      region: "Central"
    },
    {
      id: 6,
      name: "Ishasha Jungle Lodge",
      location: "Queen Elizabeth National Park",
      price: "$110 / night",
      discount: "$140",
      image: "/images/serena.jpg",
      description: "Jungle lodge offering authentic safari experience with comfortable accommodations.",
      features: ["Treehouse Views", "Wildlife", "Campfire", "Restaurant", "Guided Walks"],
      rating: 3,
      region: "Western"
    }
  ];

  // Motels
  const motels = [
    {
      id: 7,
      name: "Highway Motel",
      location: "Masaka, Uganda",
      price: "$45 / night",
      discount: "$60",
      image: "/images/speak.jpg",
      description: "Comfortable motel perfect for road trips with easy highway access.",
      features: ["Highway Access", "Free Parking", "24/7 Reception", "Restaurant", "Secure"],
      type: "motel",
      region: "Central"
    },
    {
      id: 8,
      name: "Travelers Rest Motel",
      location: "Mbarara, Uganda",
      price: "$50 / night",
      discount: "$65",
      image: "/images/serena.jpg",
      description: "Budget-friendly motel offering clean rooms and essential amenities for travelers.",
      features: ["Budget Friendly", "Free WiFi", "Parking", "Restaurant", "24/7 Security"],
      type: "motel",
      region: "Western"
    }
  ];

  // Lodges
  const lodges = [
    {
      id: 9,
      name: "Bwindi Lodge",
      location: "Bwindi Impenetrable Forest",
      price: "$150 / night",
      discount: "$180",
      image: "/images/speak.jpg",
      description: "Luxury lodge offering gorilla trekking experiences and stunning forest views.",
      features: ["Gorilla Trekking", "Forest Views", "Luxury Tents", "Restaurant", "Guided Tours"],
      type: "lodge",
      region: "Southwestern"
    },
    {
      id: 10,
      name: "Kidepo Savannah Lodge",
      location: "Kidepo Valley National Park",
      price: "$130 / night",
      discount: "$160",
      image: "/images/serena.jpg",
      description: "Authentic safari lodge in the wilderness with panoramic savannah views.",
      features: ["Savannah Views", "Game Drives", "Campfire", "Local Cuisine", "Wildlife"],
      type: "lodge",
      region: "Northern"
    }
  ];

  // Cottages
  const cottages = [
    {
      id: 11,
      name: "Lake Bunyonyi Rock Resort",
      location: "Kabale, Uganda",
      price: "$85 / night",
      discount: "$110",
      image: "/images/speak.jpg",
      description: "Charming cottages with stunning lake views and peaceful surroundings.",
      features: ["Lake View", "Private Balcony", "Kitchenette", "Garden", "Boat Rides"],
      type: "cottage",
      region: "Southwestern"
    },
    {
      id: 12,
      name: "Sipi Falls Cottages",
      location: "Kapchorwa, Uganda",
      price: "$75 / night",
      discount: "$95",
      image: "/images/serena.jpg",
      description: "Cozy cottages overlooking the magnificent Sipi Falls with hiking opportunities.",
      features: ["Waterfall View", "Hiking Trails", "Coffee Tours", "Fireplace", "Restaurant"],
      type: "cottage",
      region: "Eastern"
    }
  ];

  // Furnished Apartments
  const apartments = [
    {
      id: 13,
      name: "Pearl Apartments Kololo",
      location: "Kampala, Uganda",
      price: "$120 / night",
      discount: "$150",
      image: "/images/speak.jpg",
      description: "Fully furnished luxury apartments in upscale Kololo neighborhood.",
      features: ["Full Kitchen", "Living Room", "Free WiFi", "Swimming Pool", "Security"],
      type: "apartment",
      region: "Central"
    },
    {
      id: 14,
      name: "Executive Suites Nakasero",
      location: "Kampala, Uganda",
      price: "$100 / night",
      discount: "$130",
      image: "/images/serena.jpg",
      description: "Modern executive apartments with city views and premium amenities.",
      features: ["City View", "Workspace", "Kitchen", "Gym Access", "Concierge"],
      type: "apartment",
      region: "Central"
    }
  ];

  const renderAccommodationSection = (title, accommodations, type) => (
    <section className="accommodation-section">
      <div className="container">
        <h2>{title}</h2>
        <div className="accommodations-grid">
          {accommodations.map((item) => (
            <div key={item.id} className="accommodation-card">
              <div className="image-container">
                <img src={item.image} alt={item.name} className="hotel-image" />
                <div className="rating">
                  {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                </div>
                {item.discount && (
                  <div className="discount-badge">
                    Save ${parseInt(item.discount.replace('$', '')) - parseInt(item.price.replace('$', ''))}
                  </div>
                )}
              </div>
              <div className="accommodation-info">
                <h3>{item.name}</h3>
                <p className="location">{item.location}</p>
                <p className="region">Region: {item.region}</p>
                <p className="description">{item.description}</p>
                
                <div className="features">
                  <h4>Key Features:</h4>
                  <div className="features-list">
                    {item.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
                
                <div className="price-section">
                  <div className="price-details">
                    <span className="current-price">{item.price}</span>
                    {item.discount && (
                      <span className="original-price">{item.discount}</span>
                    )}
                  </div>
                  <Link to={`/accommodation/${type}/${item.id}`} className="btn-book">
                    View Details / Book
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="hotels-page">
      {/* Hero Section */}
      <section className="hotels-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1>Find Your Perfect Stay in Uganda</h1>
            <p>Book trusted hotels, lodges, and furnished apartments — pay upon arrival!</p>
            <div className="hero-stats">
              <div className="stat">
                <h3>200+</h3>
                <p>Properties</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Destinations</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Star Hotels */}
      {renderAccommodationSection("5-Star Luxury Hotels", fiveStarHotels, "hotel")}

      {/* 4-Star Hotels */}
      {renderAccommodationSection("4-Star Premium Hotels", fourStarHotels, "hotel")}

      {/* 3-Star Hotels */}
      {renderAccommodationSection("3-Star Comfort Hotels", threeStarHotels, "hotel")}

      {/* Motels */}
      {renderAccommodationSection("Comfortable Motels", motels, "motel")}

      {/* Lodges */}
      {renderAccommodationSection("Safari Lodges", lodges, "lodge")}

      {/* Cottages */}
      {renderAccommodationSection("Charming Cottages", cottages, "cottage")}

      {/* Furnished Apartments */}
      {renderAccommodationSection("Furnished Apartments", apartments, "apartment")}

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Can't Find What You're Looking For?</h2>
            <p>Contact our accommodation specialists for personalized recommendations and special deals.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Contact Our Experts</button>
              <button className="btn-secondary">View All Properties</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}