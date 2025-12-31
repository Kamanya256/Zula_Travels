import React from "react";
import "../styles/PopularDestinations.css";

const getCountryNameClass = (countryName) => {
  if (countryName.length > 25) return 'very-long-name';
  if (countryName.length > 20) return 'long-name';
  return '';
};

export default function PopularDestinations() {
  const destinations = [
    {
      name: "Bwindi Impenetrable Forest",
      image: "/images/Bwindi1.jpg",
      tours: "12 Tours",
      rating: 4.9,
      price: "From $1,200",
      description: "Home to endangered mountain gorillas in their natural habitat",
      featured: true
    },
    {
      name: "Murchison Falls",
      image: "/images/murchison.jpg",
      tours: "8 Tours",
      rating: 4.7,
      price: "From $800",
      description: "Uganda's largest national park with spectacular waterfalls"
    },
    {
      name: "Queen Elizabeth National Park",
      image: "/images/queen-elizabeth.jpg",
      tours: "10 Tours",
      rating: 4.8,
      price: "From $950",
      description: "Famous for tree-climbing lions and diverse wildlife"
    },
    {
      name: "Kidepo Valley National Park",
      image: "/images/kidepo.jpg",
      tours: "9 Tours",
      rating: 4.6,
      price: "From $1,100",
      description: "True African wilderness experience in remote landscapes",
      featured: true
    },
    {
      name: "Lake Bunyonyi",
      image: "/images/bunyonyi.jpg",
      tours: "7 Tours",
      rating: 4.5,
      price: "From $600",
      description: "Africa's second deepest lake with stunning island scenery"
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="rating-stars">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="rating-stars">★</span>);
    }
    
    return stars;
  };

  return (
    <section className="popular-section">
      <h2>Most Popular Destinations</h2>
      <p>Explore the breathtaking beauty of Uganda's most visited attractions</p>

      <div className="scroll-gallery">
        {destinations.map((dest, i) => (
          <div key={i} className={`scroll-card ${dest.featured ? 'featured' : ''}`}>
            <img src={dest.image} alt={dest.name} />
            
            {/* Top overlay info */}
            <div className="destination-info">
              <div className="destination-rating">
                <div className="rating-stars">
                  {renderStars(dest.rating)}
                </div>
                <span className="rating-value">{dest.rating}</span>
              </div>
              <div className="destination-price">
                {dest.price}
              </div>
            </div>

            {/* Bottom text overlay */}
            <div className="scroll-text">
              <h3 className={getCountryNameClass(dest.name)}>
                {dest.name}
              </h3>
              <span>{dest.tours}</span>
            </div>

            {/* Hover content */}
            <div className="hover-content">
              <h4>Discover {dest.name}</h4>
              <p>{dest.description}</p>
              <button className="explore-btn">
                Explore Destination
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}