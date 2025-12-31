import React from "react";
import { Link } from "react-router-dom";
import "../styles/DestinationGrid.css";

const ugandaDestinations = [
  {
    id: 1,
    name: "Bwindi Impenetrable Forest",
    image: "/images/bwindi.jpg",
    description: "Home to endangered mountain gorillas",
    tours: "12 Tours",
    country: "Uganda"
  },
  {
    id: 2,
    name: "Murchison Falls",
    image: "/images/murchison.jpg",
    description: "Uganda's largest national park",
    tours: "8 Tours",
    country: "Uganda"
  },
  {
    id: 3,
    name: "Queen Elizabeth National Park",
    image: "/images/queen-elizabeth.jpg",
    description: "Famous for tree-climbing lions",
    tours: "10 Tours",
    country: "Uganda"
  },
  {
    id: 4,
    name: "Lake Bunyonyi",
    image: "/images/bunyonyi.jpg",
    description: "Africa's second deepest lake",
    tours: "6 Tours",
    country: "Uganda"
  },
  {
    id: 5,
    name: "Kidepo Valley National Park",
    image: "/images/kidepo.jpg",
    description: "True African wilderness experience",
    tours: "5 Tours",
    country: "Uganda"
  },
  {
    id: 6,
    name: "Jinja - Source of the Nile",
    image: "/images/nile.jpg",
    description: "Adventure capital of East Africa",
    tours: "7 Tours",
    country: "Uganda"
  }
];

const eastAfricanDestinations = [
  {
    id: 7,
    country: "Kenya",
    name: "Maasai Mara National Reserve",
    image: "/images/maasai-mara.jpg",
    description: "Witness the Great Migration and Big Five",
    tours: "15 Tours",
    highlights: ["Great Migration", "Big Five", "Maasai Culture"]
  },
  {
    id: 8,
    country: "Tanzania",
    name: "Serengeti National Park",
    image: "/images/serengeti.jpg",
    description: "Endless plains with incredible wildlife",
    tours: "18 Tours",
    highlights: ["Wildebeest Migration", "Big Cats", "Balloon Safaris"]
  },
  {
    id: 9,
    country: "Rwanda",
    name: "Volcanoes National Park",
    image: "/images/volcanoes-rwanda.jpg",
    description: "Mountain gorilla trekking in pristine forests",
    tours: "9 Tours",
    highlights: ["Gorilla Trekking", "Golden Monkeys", "Volcano Hikes"]
  },
  {
    id: 10,
    country: "DR Congo",
    name: "Virunga National Park",
    image: "/images/virunga.jpg",
    description: "Africa's oldest national park with active volcanoes",
    tours: "6 Tours",
    highlights: ["Nyiragongo Volcano", "Mountain Gorillas", "Lake Kivu"]
  },
  {
    id: 11,
    country: "Kenya",
    name: "Amboseli National Park",
    image: "/images/Amboseli_National_Park.jpg",
    description: "Iconic views of Mount Kilimanjaro with elephants",
    tours: "11 Tours",
    highlights: ["Mount Kilimanjaro", "Large Herds", "Photography"]
  },
  {
    id: 12,
    country: "Tanzania",
    name: "Mount Kilimanjaro",
    image: "/images/kilimanjaro.jpg",
    description: "Africa's highest peak and climbing adventure",
    tours: "14 Tours",
    highlights: ["Summit Climb", "Scenic Routes", "Rainforest"]
  }
];

export default function DestinationGrid() {
  return (
    <section className="destinations-section">
      <div className="container">
        {/* Uganda Destinations */}
        <div className="section-header">
          <h2>Uganda's Most Popular Destinations</h2>
          <p>Explore the breathtaking beauty of Uganda's most visited attractions and national parks</p>
        </div>

        <div className="destinations-grid">
          {ugandaDestinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <div className="destination-image">
                <img src={destination.image} alt={destination.name} />
                <div className="destination-overlay">
                  <span className="tour-count">{destination.tours}</span>
                  <span className="country-badge">{destination.country}</span>
                </div>
              </div>
              <div className="destination-content">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <Link to={`/destination/${destination.id}`} className="view-more-btn">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* East African Destinations */}
        <div className="section-header east-africa-header">
          <h2>Explore East Africa's Wonders</h2>
          <p>Discover incredible destinations across Kenya, Tanzania, Rwanda, and DR Congo</p>
        </div>

        <div className="destinations-grid east-africa-grid">
          {eastAfricanDestinations.map((destination) => (
            <div key={destination.id} className="destination-card east-africa-card">
              <div className="destination-image">
                <img src={destination.image} alt={destination.name} />
                <div className="destination-overlay">
                  <span className="tour-count">{destination.tours}</span>
                  <span className="country-badge">{destination.country}</span>
                </div>
              </div>
              <div className="destination-content">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                {destination.highlights && (
                  <div className="destination-highlights">
                    <strong>Highlights:</strong>
                    <div className="highlight-tags">
                      {destination.highlights.slice(0, 2).map((highlight, idx) => (
                        <span key={idx} className="highlight-tag">{highlight}</span>
                      ))}
                      {destination.highlights.length > 2 && (
                        <span className="highlight-tag">+{destination.highlights.length - 2} more</span>
                      )}
                    </div>
                  </div>
                )}
                <Link to={`/destination/${destination.id}`} className="view-more-btn">
                  Explore {destination.country} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="section-footer">
          <Link to="/destinations" className="btn-primary">
            View All East African Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}