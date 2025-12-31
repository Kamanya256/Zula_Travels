import React from "react";
import DestinationGrid from "../components/DestinationGrid";
import ServicesSlider from "../components/ServicesSlider";
import HomeContent from "../components/HomeContent";
import Search from "../components/Search";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* Welcome Hero Section */}
      <section className="welcome-hero">
        <div className="container">
          <div className="welcome-content">
            <h1>Welcome to Uganda - The Pearl of Africa</h1>
            <p className="hero-subtitle">
              Discover a land of breathtaking beauty, rich culture, and unforgettable adventures.
              From the mighty River Nile to the majestic mountain gorillas, Uganda offers experiences
              that will capture your heart and create memories for a lifetime.
            </p>
            <div className="welcome-stats">
              <div className="stat">
                <h3>10+</h3>
                <p>National Parks</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Wildlife Species</p>
              </div>
              <div className="stat">
                <h3>1000+</h3>
                <p>Happy Travelers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Uganda Section */}
      <section className="why-uganda-section alt-bg">
        <div className="container">
          <h2>Why Choose Uganda?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-image">
                <img src="/images/gorilla-trekking.jpg" alt="Gorilla Trekking" loading="lazy" />
                <div className="image-overlay"></div>
              </div>
              <h3>Gorilla Trekking</h3>
              <p>Experience the magic of encountering mountain gorillas in their natural habitat - a truly life-changing adventure.</p>
            </div>
            <div className="reason-card">
              <div className="reason-image">
                <img src="/images/adventure-activities.jpg" alt="Adventure Activities" loading="lazy" />
                <div className="image-overlay"></div>
              </div>
              <h3>Adventure Activities</h3>
              <p>From white-water rafting on the Nile to hiking volcanic mountains, Uganda is an adventurer's paradise.</p>
            </div>
            <div className="reason-card">
              <div className="reason-image">
                <img src="/images/biodiversity.jpg" alt="Biodiversity" loading="lazy" />
                <div className="image-overlay"></div>
              </div>
              <h3>Rich Biodiversity</h3>
              <p>Home to over 50% of the world's remaining mountain gorillas and countless other unique species.</p>
            </div>
            <div className="reason-card">
              <div className="reason-image">
                <img src="/images/ugandan-hospitality.jpg" alt="Warm Hospitality" loading="lazy" />
                <div className="image-overlay"></div>
              </div>
              <h3>Warm Hospitality</h3>
              <p>Experience the famous Ugandan hospitality and welcoming spirit that makes every visitor feel at home.</p>
            </div>
            <div className="reason-card">
              <div className="reason-image">
                <img src="/images/cultural-experience.jpg" alt="Cultural Experience" loading="lazy" />
                <div className="image-overlay"></div>
              </div>
              <h3>Cultural Diversity</h3>
              <p>Discover over 56 indigenous cultures with unique traditions, dances, music, and crafts.</p>
            </div>
            <div className="reason-card">
              <div className="reason-image">
                <img src="/images/affordable-travel.jpg" alt="Affordable Travel" loading="lazy" />
                <div className="image-overlay"></div>
              </div>
              <h3>Affordable Travel</h3>
              <p>Enjoy world-class experiences at competitive prices, making luxury safaris accessible to all travelers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HomeContent now includes:
          - What Makes Our Services Special
          - Uganda Attractions 
          - Services Slider
      */}
      <HomeContent />

      {/* DestinationGrid now includes:
          - Uganda Destinations
          - East African Destinations
      */}
      <DestinationGrid />

      {/* ServicesSlider for additional services showcase */}
      <ServicesSlider />

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Your East African Adventure?</h2>
            <p>
              Let us help you create the perfect itinerary across Uganda, Kenya, Tanzania, Rwanda, and Congo.
              Whether you're seeking wildlife encounters, cultural experiences, or pure relaxation,
              we'll make your journey unforgettable.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Start Planning Today</button>
              <button className="btn-secondary">Get Free Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}