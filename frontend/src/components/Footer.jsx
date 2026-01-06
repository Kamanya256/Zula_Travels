import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
  FaPlane, FaHotel, FaTruck, FaCar, FaCalendarAlt
} from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand Column */}
          <div className="footer-col brand-col">
            <h3 className="footer-logo">Zula<span>Travels</span></h3>
            <p className="brand-text">
              Premium travel and logistics across East Africa. Professionalism in every journey.
            </p>
            <div className="social-grid">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/packages">Tour Packages</Link></li>
              <li><Link to="/contact">Get in Touch</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services with Icons */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul className="footer-services">
              <li><FaPlane className="svc-icon" /><Link to="/flights">Flight Booking</Link></li>
              <li><FaHotel className="svc-icon" /><Link to="/hotels">Hotel Reservations</Link></li>
              <li><FaTruck className="svc-icon" /><Link to="/courier">Courier Services</Link></li>
              <li><FaCar className="svc-icon" /><Link to="/cars">Car Rentals</Link></li>
              <li><FaCalendarAlt className="svc-icon" /><Link to="/events">Events & Venues</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="contact-compact">
              <div className="contact-item">
                <FaMapMarkerAlt /> <span>Kampala, Uganda</span>
              </div>
              <div className="contact-item">
                <FaPhoneAlt /> <span>+256 393 256 310</span>
              </div>
              <div className="contact-item">
                <FaEnvelope /> <span>info@zulatravels.com</span>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Zula Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}