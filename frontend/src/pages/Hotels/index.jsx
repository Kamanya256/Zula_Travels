// src/pages/Hotels/index.jsx
import React, { useEffect, useState } from "react";
import HeroSlider from "./components/HeroSlider";
import FilterBar from "./components/FilterBar";
import AccommodationCard from "./components/AccommodationCard";
import BookingForm from "./components/BookingForm";
import "../../styles/Hotels.css";

export default function Hotels() {
  const [accommodations, setAccommodations] = useState([]);
  const [filteredAccommodations, setFilteredAccommodations] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  // Comprehensive sample data
  useEffect(() => {
    const sampleData = [
      // 5-Star Hotels
      {
        id: 1,
        name: "Kampala Serena Hotel",
        type: "hotel",
        star: 5,
        region: "Central Kampala",
        images: ["/images/hotels/serena-1.jpg"],
        price: 280,
        originalPrice: 320,
        rating: 4.9,
        reviews: 1247,
        loved: true,
        featured: true,
        features: ["Infinity Pool", "Luxury Spa", "Free WiFi", "5 Restaurants", "Fitness Center"],
        location: "Kampala City Center",
        freeCancellation: true,
        breakfastIncluded: true,
        swimmingPool: true,
        specialOffers: ["Free Airport Transfer", "Welcome Drink", "Late Check-out"]
      },
      {
        id: 2,
        name: "Speke Resort Munyonyo",
        type: "hotel",
        star: 5,
        region: "Munyonyo",
        images: ["/images/hotels/speke-1.jpg"],
        price: 320,
        originalPrice: 380,
        rating: 4.8,
        reviews: 892,
        loved: true,
        featured: true,
        features: ["Lake View", "Conference Facilities", "Multiple Pools", "Marina"],
        location: "Lake Victoria Shore",
        freeCancellation: true,
        breakfastIncluded: true,
        swimmingPool: true
      },

      // 4-Star Hotels
      {
        id: 3,
        name: "Protea Hotel by Marriott",
        type: "hotel",
        star: 4,
        region: "Kololo",
        images: ["/images/hotels/protea-1.jpg"],
        price: 150,
        originalPrice: 180,
        rating: 4.5,
        reviews: 567,
        loved: true,
        features: ["City View", "Business Center", "Restaurant", "Bar"],
        location: "Upscale Kololo",
        freeCancellation: true,
        breakfastIncluded: false,
        swimmingPool: true
      },
      {
        id: 4,
        name: "Fairway Hotel & Spa",
        type: "hotel",
        star: 4,
        region: "Kampala",
        images: ["/images/hotels/fairway-1.jpg"],
        price: 120,
        originalPrice: 150,
        rating: 4.3,
        reviews: 423,
        loved: false,
        features: ["Spa", "Swimming Pool", "Garden", "Conference Rooms"],
        location: "Kampala Road",
        freeCancellation: false,
        breakfastIncluded: true,
        swimmingPool: true
      },

      // 3-Star Hotels
      {
        id: 5,
        name: "Forest Cottages",
        type: "cottage",
        star: 3,
        region: "Mabira Forest",
        images: ["/images/hotels/forest-cottages-1.jpg"],
        price: 85,
        originalPrice: 110,
        rating: 4.6,
        reviews: 234,
        loved: true,
        features: ["Forest View", "Nature Walks", "Campfire", "Bird Watching"],
        location: "Mabira Forest Reserve",
        freeCancellation: true,
        breakfastIncluded: true,
        swimmingPool: false
      },
      {
        id: 6,
        name: "City Motel",
        type: "motel",
        star: 3,
        region: "Central",
        images: ["/images/hotels/city-motel-1.jpg"],
        price: 45,
        rating: 4.0,
        reviews: 189,
        loved: false,
        features: ["Free Parking", "24-hour Front Desk", "City Center"],
        location: "Downtown Kampala",
        freeCancellation: false,
        breakfastIncluded: false,
        swimmingPool: false
      },

      // Lodges
      {
        id: 7,
        name: "Murchison River Lodge",
        type: "lodge",
        star: 4,
        region: "Murchison Falls",
        images: ["/images/hotels/murchison-lodge-1.jpg"],
        price: 95,
        originalPrice: 120,
        rating: 4.7,
        reviews: 345,
        loved: true,
        featured: true,
        features: ["River View", "Wildlife Spotting", "Guided Safaris", "Restaurant"],
        location: "Murchison Falls National Park",
        freeCancellation: true,
        breakfastIncluded: true,
        swimmingPool: true
      },
      {
        id: 8,
        name: "Queen Elizabeth Bush Lodge",
        type: "lodge",
        star: 4,
        region: "Queen Elizabeth NP",
        images: ["/images/hotels/qe-lodge-1.jpg"],
        price: 110,
        rating: 4.8,
        reviews: 278,
        loved: true,
        features: ["Savannah View", "Game Drives", "Bush Dining", "Star Gazing"],
        location: "Queen Elizabeth National Park",
        freeCancellation: true,
        breakfastIncluded: true,
        swimmingPool: false
      },

      // Cottages
      {
        id: 9,
        name: "Lake Bunyonyi Rock Resort",
        type: "cottage",
        star: 4,
        region: "Kabale",
        images: ["/images/hotels/bunyonyi-cottages-1.jpg"],
        price: 120,
        originalPrice: 150,
        rating: 4.9,
        reviews: 156,
        loved: true,
        featured: true,
        features: ["Lake View", "Private Balcony", "Fireplace", "Boat Rides"],
        location: "Lake Bunyonyi",
        freeCancellation: true,
        breakfastIncluded: true,
        swimmingPool: false
      },

      // Apartments
      {
        id: 10,
        name: "Kololo Sky Apartments",
        type: "apartment",
        star: 4,
        region: "Kololo",
        images: ["/images/hotels/kololo-apartments-1.jpg"],
        price: 75,
        originalPrice: 90,
        rating: 4.4,
        reviews: 89,
        loved: false,
        features: ["Full Kitchen", "Living Room", "City View", "Secure Parking"],
        location: "Kololo Hill",
        freeCancellation: true,
        breakfastIncluded: false,
        swimmingPool: false
      },
      {
        id: 11,
        name: "Naguru Executive Apartments",
        type: "apartment",
        star: 3,
        region: "Naguru",
        images: ["/images/hotels/naguru-apartments-1.jpg"],
        price: 60,
        rating: 4.2,
        reviews: 67,
        loved: false,
        features: ["Self Catering", "WiFi", "Parking", "Near City Center"],
        location: "Naguru",
        freeCancellation: false,
        breakfastIncluded: false,
        swimmingPool: false
      },

      // Campsites
      {
        id: 12,
        name: "Jinja Nile Campsite",
        type: "campsite",
        star: 3,
        region: "Jinja",
        images: ["/images/hotels/nile-campsite-1.jpg"],
        price: 25,
        rating: 4.5,
        reviews: 134,
        loved: true,
        features: ["Riverside", "Campfires", "Adventure Activities", "Budget"],
        location: "Jinja, Nile River",
        freeCancellation: true,
        breakfastIncluded: false,
        swimmingPool: false
      }
    ];
    
    setAccommodations(sampleData);
    setFilteredAccommodations(sampleData);
  }, []);

  // Filter accommodations by type
  const filterAccommodations = (type) => {
    setActiveFilter(type);
    if (type === "all") {
      setFilteredAccommodations(accommodations);
    } else {
      setFilteredAccommodations(accommodations.filter(acc => acc.type === type));
    }
  };

  // Helper functions
  const featured = [...accommodations].filter(acc => acc.featured);
  const topLoved = accommodations.filter(a => a.loved);
  const fiveStar = accommodations.filter(a => a.star === 5);
  const fourStar = accommodations.filter(a => a.star === 4);
  const threeStar = accommodations.filter(a => a.star === 3);
  const motels = accommodations.filter(a => a.type === "motel");
  const lodges = accommodations.filter(a => a.type === "lodge");
  const cottages = accommodations.filter(a => a.type === "cottage");
  const apartments = accommodations.filter(a => a.type === "apartment");
  const campsites = accommodations.filter(a => a.type === "campsite");

  const filterOptions = [
    { key: "all", label: "All Accommodations", count: accommodations.length },
    { key: "hotel", label: "Hotels", count: accommodations.filter(a => a.type === "hotel").length },
    { key: "lodge", label: "Lodges", count: lodges.length },
    { key: "cottage", label: "Cottages", count: cottages.length },
    { key: "apartment", label: "Apartments", count: apartments.length },
    { key: "motel", label: "Motels", count: motels.length },
    { key: "campsite", label: "Campsites", count: campsites.length }
  ];

  return (
    <main className="hotels-page">
      {/* Hero Slider with Featured Accommodations */}
      <HeroSlider featuredAccommodations={featured} />
      
      {/* Booking Form Overlay */}
      <div className="booking-panel-wrapper">
        <div className="container">
          <BookingForm />
        </div>
      </div>

      {/* Filter Bar */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-bar">
            {filterOptions.map(option => (
              <button
                key={option.key}
                className={`filter-btn ${activeFilter === option.key ? 'active' : ''}`}
                onClick={() => filterAccommodations(option.key)}
              >
                {option.label}
                <span className="filter-count">{option.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Most Loved Section */}
      {topLoved.length > 0 && (
        <section className="most-loved-section">
          <div className="container">
            <h2 className="section-title">Most Loved by Our Guests</h2>
            <p className="section-subtitle">These accommodations consistently receive excellent reviews from our travelers</p>
            <div className="most-loved-slider">
              {topLoved.map(item => (
                <div key={item.id} className="most-loved-card">
                  <img src={item.images?.[0] || "/images/placeholder.jpg"} alt={item.name} />
                  <div className="most-loved-content">
                    <h4>{item.name}</h4>
                    <div className="most-loved-meta">
                      <span className="most-loved-rating">⭐ {item.rating}</span>
                      <span className="most-loved-price">${item.price}</span>
                    </div>
                    <p className="most-loved-location">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content - Filtered or Categorized */}
      <section className="accommodations-section">
        <div className="container">
          {activeFilter === "all" ? (
            <>
              {/* Show all categories when no filter is active */}
              {fiveStar.length > 0 && (
                <div className="category-section">
                  <h2 className="section-title">🏨 5-Star Luxury Hotels</h2>
                  <p className="section-subtitle">Experience ultimate luxury and world-class service</p>
                  <div className="grid-4">
                    {fiveStar.map(h => <AccommodationCard key={h.id} item={h} />)}
                  </div>
                </div>
              )}

              {fourStar.length > 0 && (
                <div className="category-section">
                  <h2 className="section-title">⭐ 4-Star Premium Hotels</h2>
                  <p className="section-subtitle">Excellent comfort and amenities at great value</p>
                  <div className="grid-4">
                    {fourStar.map(h => <AccommodationCard key={h.id} item={h} />)}
                  </div>
                </div>
              )}

              {threeStar.length > 0 && (
                <div className="category-section">
                  <h2 className="section-title">🛌 3-Star Comfort Hotels</h2>
                  <p className="section-subtitle">Comfortable stays with essential amenities</p>
                  <div className="grid-4">
                    {threeStar.map(h => <AccommodationCard key={h.id} item={h} />)}
                  </div>
                </div>
              )}

              {lodges.length > 0 && (
                <div className="category-section">
                  <h2 className="section-title">🌲 Wilderness Lodges</h2>
                  <p className="section-subtitle">Immerse yourself in nature with comfortable lodging</p>
                  <div className="grid-4">
                    {lodges.map(h => <AccommodationCard key={h.id} item={h} />)}
                  </div>
                </div>
              )}

              {cottages.length > 0 && (
                <div className="category-section">
                  <h2 className="section-title">🏡 Cozy Cottages</h2>
                  <p className="section-subtitle">Perfect for romantic getaways and family retreats</p>
                  <div className="grid-4">
                    {cottages.map(h => <AccommodationCard key={h.id} item={h} />)}
                  </div>
                </div>
              )}

              {apartments.length > 0 && (
                <div className="category-section">
                  <h2 className="section-title">🏢 Furnished Apartments</h2>
                  <p className="section-subtitle">Home-like comfort with hotel amenities</p>
                  <div className="grid-4">
                    {apartments.map(h => <AccommodationCard key={h.id} item={h} />)}
                  </div>
                </div>
              )}

              {motels.length > 0 && (
                <div className="category-section">
                  <h2 className="section-title">🛣️ Convenient Motels</h2>
                  <p className="section-subtitle">Budget-friendly stays with easy access</p>
                  <div className="grid-4">
                    {motels.map(h => <AccommodationCard key={h.id} item={h} />)}
                  </div>
                </div>
              )}

              {campsites.length > 0 && (
                <div className="category-section">
                  <h2 className="section-title">⛺ Adventure Campsites</h2>
                  <p className="section-subtitle">Connect with nature in beautiful outdoor settings</p>
                  <div className="grid-4">
                    {campsites.map(h => <AccommodationCard key={h.id} item={h} />)}
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Show filtered results when a filter is active */
            <div className="filtered-results">
              <h2 className="section-title">
                {filterOptions.find(opt => opt.key === activeFilter)?.label}
              </h2>
              <p className="section-subtitle">
                Found {filteredAccommodations.length} accommodations
              </p>
              <div className="grid-4">
                {filteredAccommodations.map(h => <AccommodationCard key={h.id} item={h} />)}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}