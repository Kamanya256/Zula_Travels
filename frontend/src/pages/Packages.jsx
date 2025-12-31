import React from "react";
import { Link } from "react-router-dom";
import "../styles/TourPackages.css";

// Import images from assets
import adventureImg from "../assets/images/adventure.jpg";
import chimpsImg from "../assets/images/chimps.jpg";
import safariImg from "../assets/images/safari.jpg";
import gorillaImg from "../assets/images/gorilla.jpg";
import wildlifeImg from "../assets/images/wildlife.jpg";
import honeymoonImg from "../assets/images/honeymoon.jpg";
import raftingImg from "../assets/images/nile.jpg";
import birdImg from "../assets/images/images.jpg";
import hotelImg from "../assets/images/hotels.jpg";
import cultureImg from "../assets/images/culture.jpg";
import transferImg from "../assets/images/Cars.jpg";
import pilgrimImg from "../assets/images/green.jpg";
import flightImg from "../assets/images/flights.jpg";
import vehicleImg from "../assets/images/Cars.jpg";
import cityImg from "../assets/images/green.jpg";
import marineImg from "../assets/images/murchison.jpg";
import educationImg from "../assets/images/kidepo.jpg";
import combinedImg from "../assets/images/nile.jpg";
import hikingImg from "../assets/images/nile.jpg";
import sportsImg from "../assets/images/images.jpg";

const tourPackages = [
  { id: "adventure", title: "Adventure Tours", image: adventureImg, description: "Thrilling adventures across Uganda’s mountains, rivers, and forests." },
  { id: "chimps", title: "Chimp Trekking", image: chimpsImg, description: "Track chimpanzees in Kibale Forest for an unforgettable experience." },
  { id: "safari", title: "Game Safaris", image: safariImg, description: "Experience Uganda’s big five and the beauty of African savannahs." },
  { id: "gorilla", title: "Gorilla Trekking", image: gorillaImg, description: "Meet the majestic mountain gorillas in Bwindi Impenetrable Forest." },
  { id: "wildlife", title: "Wildlife Tours", image: wildlifeImg, description: "Explore Uganda’s national parks and encounter rare species." },
  { id: "honeymoon", title: "Honeymoon Packages", image: honeymoonImg, description: "Romantic destinations designed for lasting memories." },
  { id: "rafting", title: "White Water Rafting", image: raftingImg, description: "Conquer the rapids of the Nile for a heart-pounding adventure." },
  { id: "bird", title: "Bird Watching", image: birdImg, description: "Spot Uganda’s 1000+ bird species guided by expert ornithologists." },
  { id: "hotel", title: "Hotel Bookings", image: hotelImg, description: "Book top-rated hotels and lodges at affordable rates." },
  { id: "culture", title: "Cultural Tours", image: cultureImg, description: "Discover Uganda’s traditions, dances, and local cuisines." },
  { id: "transfer", title: "Airport Transfers", image: transferImg, description: "Reliable transfers from Entebbe Airport to any destination." },
  { id: "pilgrim", title: "Pilgrim & Religious Tours", image: pilgrimImg, description: "Faith-based journeys to Uganda’s sacred and historical sites." },
  { id: "flight", title: "Flight Bookings", image: flightImg, description: "Book domestic and international flights at great deals." },
  { id: "vehicle", title: "Vehicle Hire", image: vehicleImg, description: "Hire 4x4 vehicles, vans, or luxury rides for your safaris." },
  { id: "city", title: "City Tours", image: cityImg, description: "Explore Kampala, Jinja, and Entebbe with our guided city tours." },
  { id: "marine", title: "Marine Tours", image: marineImg, description: "Enjoy boat cruises and island visits on Lake Victoria." },
  { id: "education", title: "Educational Tours", image: educationImg, description: "School trips and study tours designed for learning and fun." },
  { id: "combined", title: "Combined Tours", image: combinedImg, description: "Blend multiple experiences in one unforgettable journey." },
  { id: "hiking", title: "Hiking Tours", image: hikingImg, description: "Conquer the Rwenzori Mountains or Mount Elgon trails." },
  { id: "sports", title: "Sports Tours", image: sportsImg, description: "Join sporting adventures across Uganda and East Africa." }
];

export default function TourPackages() {
  return (
    <div className="tour-packages-container">
      <h1 className="page-title">Explore Our Tour Packages</h1>
      <div className="packages-grid">
        {tourPackages.map((pkg) => (
          <div className="package-card" key={pkg.id}>
            <img src={pkg.image} alt={pkg.title} className="package-image" />
            <div className="package-info">
              <h2>{pkg.title}</h2>
              <p>{pkg.description}</p>
              <Link to={`/packages/${pkg.id}`} className="read-more-btn">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
