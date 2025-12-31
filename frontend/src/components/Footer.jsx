import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section company-info">
            <h3>Zula Travels</h3>
            <p>
              Your trusted partner for unforgettable travel experiences across
              Uganda and East Africa. We provide premium travel, tour, and
              logistics services with passion and professionalism.
            </p>

            <div className="social-links">
              <a
                href="https://facebook.com/zulatravels"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/zulatravels"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/zulatravels"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/company/zulatravels"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/packages">Tour Packages</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/flights">Flight Booking</Link></li>
              <li><Link to="/hotels">Hotel Reservations</Link></li>
              <li><Link to="/courier">Courier Services</Link></li>
              <li><Link to="/cars">Car Rentals</Link></li>
              <li><Link to="/events">Events & Venues</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section contact-info">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <p>Kampala, Uganda</p>
            </div>
            <div className="contact-item">
              <FaPhoneAlt />
              <p>0393 256 310 | 0774 488 956 | 0703 936 165</p>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <p>
                info@zulatravels.com <br />
                zulatravels@gmail.com
              </p>
            </div>
            <div className="contact-item">
              <FaGlobe />
              <p>www.zulatravels.com</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Zula Travels. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}