import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";
import logo from "../assets/images/logo1.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // 🔹 Toggle Mobile Menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // 🔹 Toggle Dropdown Menu
  const toggleServices = () => {
    if (window.innerWidth <= 768) setServicesOpen(!servicesOpen);
  };

  // 🔹 Handle Search Submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* 🟢 Logo */}
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Zula Travels Logo" className="logo-img" />
          <span className="logo-text">
            Zula<span>Travels</span>
          </span>
        </Link>

        {/* 🔹 Navigation Links */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/packages" onClick={() => setIsOpen(false)}>Packages</NavLink>

          {/* 🔹 Services Dropdown */}
          <div
            className={`dropdown ${servicesOpen ? "active" : ""}`}
            onClick={toggleServices}
            onMouseEnter={() => window.innerWidth > 768 && setServicesOpen(true)}
            onMouseLeave={() => window.innerWidth > 768 && setServicesOpen(false)}
          >
            <button className="dropbtn">Services ▾</button>
            <div className="dropdown-content">
              <NavLink to="/flights" onClick={() => setIsOpen(false)}>Flights</NavLink>
              <NavLink to="/hotels" onClick={() => setIsOpen(false)}>Hotels</NavLink>
              <NavLink to="/courier" onClick={() => setIsOpen(false)}>Courier</NavLink>
              <NavLink to="/cars" onClick={() => setIsOpen(false)}>Cars</NavLink>
              <NavLink to="/events" onClick={() => setIsOpen(false)}>Venues</NavLink>
            </div>
          </div>

          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>

        {/* 🔍 Search Bar */}
        <form className={`search-bar ${showSearch ? "active" : ""}`} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery ? (
            <FaTimes className="search-icon clear" onClick={() => setSearchQuery("")} />
          ) : (
            <FaSearch
              className="search-icon"
              onClick={() => setShowSearch(!showSearch)}
            />
          )}
        </form>

        {/* 🍔 Mobile Hamburger Menu */}
        <div
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
