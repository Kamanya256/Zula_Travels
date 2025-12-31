import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../styles/ServicesSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    id: 1,
    title: "Flight Booking",
    image: "/images/flights-service.jpg",
    description: "Book domestic and international flights with ease and competitive prices.",
    features: ["Best Prices", "24/7 Support", "Easy Booking"]
  },
  {
    id: 2,
    title: "Hotel Reservations",
    image: "/images/Hotel_services.jpg",
    description: "Find and book the perfect accommodation for your travel needs.",
    features: ["Luxury Hotels", "Budget Options", "Best Locations"]
  },
  {
    id: 3,
    title: "Courier Services",
    image: "/images/courier-service.jpg",
    description: "Fast, reliable and secure courier services across East Africa.",
    features: ["Fast Delivery", "Tracking", "Secure"]
  },
  {
    id: 4,
    title: "Car Rentals",
    image: "/images/cars.jpg",
    description: "Comfortable and reliable vehicles for all your transportation needs.",
    features: ["Various Models", "Insurance", "24/7 Support"]
  },
  {
    id: 5,
    title: "Events & Venues",
    image: "/images/event_services.jpg",
    description: "Plan your perfect events with our venue and service solutions.",
    features: ["Weddings", "Corporate Events", "Venue Booking"]
  },
  {
    id: 6,
    title: "Tour Packages",
    image: "/images/tour_services.jpg",
    description: "Customized tour packages for unforgettable travel experiences.",
    features: ["Safari Tours", "Cultural Tours", "Adventure Tours"]
  }
];

export default function ServicesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Premium Services</h2>
          <p>Discover our comprehensive range of travel and related services</p>
        </div>

        <Slider {...settings} className="services-slider">
          {services.map((service) => (
            <div key={service.id} className="service-slide">
              <div className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay"></div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}>✓ {feature}</li>
                    ))}
                  </ul>
                  <Link to={`/services/${service.id}`} className="service-btn">
                    View More Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}