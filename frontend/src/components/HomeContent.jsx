import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../styles/HomeContent.css";

// Service Specialties with real images
const serviceSpecialties = [
  {
    image: "/images/green.jpg",
    title: "Eco-Friendly Tourism",
    description: "We prioritize sustainable travel practices that protect wildlife and support local communities."
  },
  {
    image: "/images/Hotel_services.jpg",
    title: "High Quality Services",
    description: "From luxury accommodations to expert guides, we ensure premium quality experiences."
  },
  {
    image: "/images/culture.jpg",
    title: "Experienced Team",
    description: "Our team brings over 15 years of experience in African travel and wildlife tourism."
  },
  {
    image: "/images/chimps.jpg",
    title: "Authentic African Hospitality",
    description: "Enjoy genuine African hospitality with personalized service everywhere you go."
  },
  {
    image: "/images/wildlife.jpg",
    title: "Value for Money",
    description: "We provide competitive pricing without compromising service quality or experience."
  },
  {
    image: "/images/viruga.jpg",
    title: "Client-Centric Approach",
    description: "Your satisfaction is our priority — enjoy tailored itineraries and 24/7 support."
  }
];

// Attractions data
const attractions = [
  {
    name: "Murchison Falls",
    img: "/images/murchison.jpg",
    desc: "Experience majestic waterfalls and thrilling safaris.",
    link: "/attractions/murchison",
  },
  {
    name: "Queen Elizabeth NP",
    img: "/images/queen-elizabeth.jpg",
    desc: "Wildlife encounters with elephants, lions, and more.",
    link: "/attractions/queen-elizabeth",
  },
  {
    name: "Lake Bunyonyi",
    img: "/images/bunyonyi.jpg",
    desc: "Relax at Africa's most scenic highland lake.",
    link: "/attractions/lake-bunyonyi",
  },
  {
    name: "Bwindi Impenetrable Forest",
    img: "/images/Bwindi1.jpg",
    desc: "Go gorilla trekking in the lush forest.",
    link: "/attractions/bwindi",
  },
  {
    name: "Kidepo Valley NP",
    img: "/images/kidepo.jpg",
    desc: "Explore remote wilderness and wildlife.",
    link: "/attractions/kidepo",
  },
];

// Services data
const services = [
  {
    name: "Flight Booking",
    img: "/images/uganda-airlines1.jpg",
    desc: "We partner with top airlines to offer domestic and international flight booking at competitive prices.",
    link: "/flights",
  },
  {
    name: "Hotel Reservations",
    img: "/images/hotels.jpg",
    desc: "Find and book hotels, resorts, and lodges across Uganda and East Africa.",
    link: "/hotels",
  },
  {
    name: "Courier & Logistics",
    img: "/images/courier.jpg",
    desc: "Reliable delivery for parcels, documents, and goods locally and internationally.",
    link: "/courier",
  },
  {
    name: "Car Hire & Rentals",
    img: "/images/cars.jpg",
    desc: "Choose from a wide range of vehicles for all your travel needs.",
    link: "/cars",
  },
  {
    name: "Event & Venue Management",
    img: "/images/events.jpg",
    desc: "We plan and organize corporate and private events professionally.",
    link: "/events",
  },
  {
    name: "Visa & Travel Consultation",
    img: "/images/visa.jpg",
    desc: "Professional assistance with visa applications and travel guidance.",
    link: "/visa",
  },
  {
    name: "Tour Packages",
    img: "/images/tours.jpg",
    desc: "Discover Uganda's beauty with tailor-made safari and tour packages.",
    link: "/packages",
  },
  {
    name: "Airport Transfers",
    img: "/images/airport.jpg",
    desc: "Reliable airport transfers and chauffeur services available 24/7.",
    link: "/airport-transfers",
  },
];

export default function HomeContent() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="home-content">
      {/* Specialties Section */}
      <section className="specialties-section">
        <div className="container">
          <h2>What Makes Our Services Special</h2>
          <p className="subtitle">
            We go beyond ordinary travel to deliver extraordinary experiences.
            Enjoy excellent service, seamless planning, and unforgettable
            journeys.
          </p>

          <div className="specialties-grid">
            {serviceSpecialties.map((specialty, index) => (
              <div key={index} className="specialty-card">
                <div className="specialty-image">
                  <img 
                    src={specialty.image} 
                    alt={specialty.title}
                    loading="lazy"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="specialty-content">
                  <h3>{specialty.title}</h3>
                  <p>{specialty.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="attractions-section">
        <div className="container">
          <h2>Discover the Beauty of Uganda</h2>

          <div className="attractions-grid">
            {attractions.map((item, index) => (
              <div className="attraction-card" key={index}>
                <img src={item.img} alt={item.name} />
                <div className="attraction-overlay">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <Link to={item.link} className="view-btn">
                    View More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Slider */}
      <section className="services-slider-section">
        <div className="container">
          <h2>Our Comprehensive Services</h2>

          <Slider {...sliderSettings} className="services-slider">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <img src={service.img} alt={service.name} />
                <div className="service-info">
                  <h3>{service.name}</h3>
                  <p>{service.desc}</p>
                  <Link to={service.link} className="view-btn">
                    Explore Service
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}