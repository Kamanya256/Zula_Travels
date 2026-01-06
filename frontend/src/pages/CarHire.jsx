import React, { useEffect, useState } from "react";
import "../styles/CarHire.css";

const heroImages = [
  "/assets/cars/hero1.jpg",
  "/assets/cars/hero2.jpg",
  "/assets/cars/hero3.jpg",
  "/assets/cars/hero4.jpg",
  "/assets/cars/hero5.jpg",
  "/assets/cars/hero6.jpg",
];

const categories = ["All", "SUV", "Sedan", "4x4", "Safari Van", "Pickup"];
const makes = ["All", "Toyota", "Nissan", "Land Rover", "Isuzu"];

export default function CarHire() {
  const [cars, setCars] = useState([]);
  const [activeHero, setActiveHero] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    quantity: 1,
    category: "All",
    make: "All",
  });

  /* ================= HERO SLIDER ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  /* ================= FETCH CARS FROM API ================= */
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/cars")
      .then((res) => res.json())
      .then((response) => {
        if (Array.isArray(response)) {
          setCars(response);
        } else if (Array.isArray(response.data)) {
          setCars(response.data);
        } else {
          setCars([]);
        }
      })
      .catch(() => setCars([]))
      .finally(() => setLoading(false));
  }, []);

  /* ================= FILTER LOGIC ================= */
  const filteredCars = Array.isArray(cars)
    ? cars.filter((car) => {
      if (filters.category !== "All" && car.category !== filters.category)
        return false;

      if (filters.make !== "All" && car.make !== filters.make)
        return false;

      return Number(car.available_quantity) >= Number(filters.quantity);
    })
    : [];

  /* ================= IMAGE URL HELPER ================= */
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/assets/cars/default-car.jpg";

    // If it's already a full URL, return as is
    if (imagePath.startsWith('http')) return imagePath;

    // If it's an absolute path (starts with /), return as is
    if (imagePath.startsWith('/')) return imagePath;

    // If it's a relative path from database, prepend /assets/cars/
    if (imagePath.includes('.')) return `/assets/cars/${imagePath}`;

    // Default fallback
    return "/assets/cars/default-car.jpg";
  };

  /* ================= GET BRAND LOGO ================= */
  const getBrandLogo = (brand) => {
    const brandLower = brand.toLowerCase();
    if (brandLower === 'toyota') return "/assets/cars/logos/toyota.png";
    if (brandLower === 'nissan') return "/assets/cars/logos/nissan.png";
    if (brandLower === 'land rover') return "/assets/cars/logos/landrover.png";
    if (brandLower === 'isuzu') return "/assets/cars/logos/isuzu.png";
    return "/assets/cars/logos/default.png";
  };

  return (
    <div className="carhire">
      {/* ================= HERO ================= */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImages[activeHero]})` }}
      >
        <div className="hero-overlay">
          <h1>Reliable Car Hire Services in Uganda</h1>
          <p>Modern vehicles · Honest pricing · Guaranteed availability</p>
          <div className="hero-slider-indicators">
            {heroImages.map((_, index) => (
              <span
                key={index}
                className={index === activeHero ? "active" : ""}
                onClick={() => setActiveHero(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= AVAILABILITY SEARCH ================= */}
      <section className="availability">
        <h2>Search Available Cars</h2>
        <div className="availability-form">
          <input
            type="date"
            placeholder="Pick-up Date"
            value={filters.startDate}
            onChange={(e) =>
              setFilters({ ...filters, startDate: e.target.value })
            }
          />
          <input
            type="date"
            placeholder="Return Date"
            value={filters.endDate}
            onChange={(e) =>
              setFilters({ ...filters, endDate: e.target.value })
            }
          />
          <input
            type="number"
            min="1"
            placeholder="Quantity"
            value={filters.quantity}
            onChange={(e) =>
              setFilters({
                ...filters,
                quantity: Number(e.target.value) || 1,
              })
            }
          />
          <button className="btn-primary">Check Availability</button>
        </div>
      </section>

      {/* ================= MAKE LOGOS ================= */}
      <section className="brands">
        {makes.map((make) => (
          <img
            key={make}
            src={getBrandLogo(make)}
            alt={make}
            className={filters.make === make ? "active-brand" : ""}
            onClick={() => setFilters({ ...filters, make })}
            title={`View ${make} cars`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/cars/logos/default.png";
            }}
          />
        ))}
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filters.category === cat ? "active" : ""}
            onClick={() => setFilters({ ...filters, category: cat })}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* ================= CAR GRID ================= */}
      <section className="car-grid">
        {loading ? (
          <div className="loading">Loading vehicles...</div>
        ) : filteredCars.length === 0 ? (
          <p className="no-results">No cars available for your selection.</p>
        ) : (
          filteredCars.map((car) => (
            <div key={car.id} className="car-card">
              <img
                src={getImageUrl(car.image_url)}
                alt={`${car.make} ${car.model}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/cars/default-car.jpg";
                }}
              />

              {car.available_quantity > 0 && (
                <div className="availability-badge">
                  {car.available_quantity} Available
                </div>
              )}

              <h3>
                {car.make} {car.model}
              </h3>

              <ul>
                <li>Seats: {car.seating_capacity}</li>
                <li>Transmission: {car.transmission}</li>
                <li>Type: {car.category || "N/A"}</li>
                <li>Year: {car.year || "N/A"}</li>
              </ul>

              <div className="price">
                From <strong>${car.base_rate_per_day || "N/A"}/day</strong>
              </div>

              <button className="btn-primary">Book Now</button>
            </div>
          ))
        )}
      </section>

      {/* ================= ABOUT US ================= */}
      <section className="about">
        <h2>About Zula Travels</h2>
        <p>
          Zula Travels is a trusted Ugandan travel company offering modern,
          well-maintained vehicles for self-drive and chauffeur-driven hire.
          We focus on reliability, transparent pricing, modern fleet management,
          and guaranteed availability to ensure your journey is comfortable and stress-free.
        </p>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-us">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          <div>Reliable & Honest Pricing</div>
          <div>Modern & Fully Insured Fleet</div>
          <div>Guaranteed Availability</div>
          <div>24/7 Customer Support</div>
          <div>Nationwide Coverage</div>
          <div>Flexible Booking Options</div>
        </div>
      </section>

      {/* ================= PAYMENTS ================= */}
      <section className="payments">
        <h2>Secure Payment Options</h2>
        <div className="payment-logos">
          <img
            src="/assets/payments/mtn.png"
            alt="MTN Mobile Money"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/payments/default.png";
            }}
          />
          <img
            src="/assets/payments/airtel.png"
            alt="Airtel Money"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/payments/default.png";
            }}
          />
          <img
            src="/assets/payments/flutterwave.png"
            alt="Flutterwave"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/payments/default.png";
            }}
          />
          <img
            src="/assets/payments/visa.png"
            alt="Visa/Mastercard"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/payments/default.png";
            }}
          />
        </div>
      </section>

      {/* ================= SUPPORT ================= */}
      <section className="support">
        <h2>24/7 Customer Support</h2>
        <p>📞 +256 393 256 310</p>
        <p>📞 +256 700 123 456</p>
        <p>📧 support@zulatravels.com</p>
        <p>📧 bookings@zulatravels.com</p>
        <p style={{ marginTop: '20px', fontSize: '1rem' }}>
          Available 24/7 • Multilingual Support • Instant Response
        </p>
      </section>
    </div>
  );
}