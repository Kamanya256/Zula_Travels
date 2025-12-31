import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Zula Travels</h1>
          <p>
            Since 2016, <strong>Zula Travels</strong> has been your trusted gateway to unforgettable experiences
            across Uganda and East Africa. From thrilling wildlife safaris to luxury stays and seamless airport
            transfers, we redefine travel convenience with excellence and integrity.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision alt-bg">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide exceptional travel experiences that connect people with the beauty of East Africa, 
                while maintaining the highest standards of service, sustainability, and customer satisfaction.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🌟</div>
              <h3>Our Vision</h3>
              <p>
                To be East Africa's most trusted travel partner, renowned for creating unforgettable journeys 
                that inspire exploration and foster cultural understanding across the region.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">💎</div>
              <h3>Our Values</h3>
              <p>
                Integrity, Excellence, Innovation, and Passion for creating memorable travel experiences 
                that exceed expectations and build lifelong relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose Zula Travels?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">✅</div>
              <h3>Trusted Expertise</h3>
              <p>
                With nearly a decade of experience, we've built strong partnerships with hotels, airlines, and tour
                operators to ensure reliable service delivery every time.
              </p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🌍</div>
              <h3>Regional Coverage</h3>
              <p>
                We operate across Uganda, Kenya, Tanzania, Rwanda, and beyond — giving you seamless regional access
                for business or leisure.
              </p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🕐</div>
              <h3>24/7 Support</h3>
              <p>
                Our professional team is available around the clock to handle your inquiries, emergencies, and bookings
                without delay.
              </p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">💚</div>
              <h3>Customer Satisfaction</h3>
              <p>
                At Zula Travels, we go beyond service delivery — we build relationships. Over 90% of our customers return
                for their next adventure.
              </p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">💰</div>
              <h3>Best Value</h3>
              <p>
                We offer competitive pricing without compromising on quality, ensuring you get the best value for 
                your travel investment.
              </p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🎨</div>
              <h3>Customized Experiences</h3>
              <p>
                Every journey is tailored to your preferences, creating personalized itineraries that match 
                your unique travel style and interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section alt-bg">
        <div className="container">
          <h2>Our Journey in Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>8+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Happy Travelers</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Destinations Covered</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info">
        <div className="container">
          <h2>Get In Touch</h2>
          <p className="contact-description">
            Ready to start your East African adventure? Reach out to us through any of these channels:
          </p>
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+256 774 488 956</p>
                <p>+256 703 936 265</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Email</h4>
                <p><a href="mailto:info@zulatravels.com">info@zulatravels.com</a></p>
                <p><a href="mailto:zulatravels@gmail.com">zulatravels@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Kampala, Uganda</p>
                <p>East Africa</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🌐</div>
              <div className="contact-details">
                <h4>Website</h4>
                <p><a href="https://www.zulatravels.com">www.zulatravels.com</a></p>
                <p>Always Open Online</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}