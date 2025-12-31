import React, { useState, useEffect } from "react";
import "../styles/Hero.css";

export default function Hero() {
  const cardSlides = [
    { src: "/src/assets/images/nile.jpg", caption: "River Nile Adventures" },
    { src: "/src/assets/images/rolex.jpg", caption: "Taste the Ugandan Rolex" },
    { src: "/src/assets/images/chimps.jpg", caption: "Chimpanzee Tracking" },
    { src: "/src/assets/images/culture.jpg", caption: "Rich Cultural Heritage" },
    { src: "/src/assets/images/green.jpg", caption: "Beautiful Green Nature" },
  ];

  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCardIndex((prev) => (prev + 1) % cardSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cardSlides.length]);

  return (
    <section className="hero-section">
      {/* Background Video */}
      <video
        src="public/media/Hero2.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      />

      {/* Dark Overlay */}
      <div className="overlay"></div>

      {/* Main Content */}
      <div className="hero-content-horizontal">
        {/* Left Text Section */}
        <div className="text-section">
          <h1>
            Explore <span className="highlight">Uganda</span> with Zula Travels
          </h1>
          <p>Discover the Pearl of Africa — from the River Nile to our rich culture, wildlife, and warm hospitality.</p>
          <div className="buttons">
            <a href="/packages" className="btn primary">View Packages</a>
            <a href="/contact" className="btn secondary">Talk to Us</a>
          </div>
        </div>

        {/* Right Floating Card Section */}
        <div className="card-container">
          {cardSlides.map((slide, i) => (
            <div
              key={i}
              className={`card-slide ${i === cardIndex ? "active-card" : ""}`}
            >
              <img src={slide.src} alt={slide.caption} />
              <p>{slide.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
