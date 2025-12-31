import React, { useState } from "react";
import WhatsAppChat from "../components/WhatsAppChat";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaPaperPlane
} from "react-icons/fa";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  // Social media links
  const socialMedia = {
    facebook: "https://facebook.com/zulatravels",
    twitter: "https://twitter.com/zulatravels", 
    instagram: "https://instagram.com/zulatravels",
    tiktok: "https://tiktok.com/@zulatravels",
    whatsapp: "https://wa.me/256774488956"
  };

  return (
    <div className="contact-page">
      {/* Hero section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to make your travel experience smooth and memorable.</p>
        </div>
      </section>

      {/* Main content */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-content">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p className="info-description">
                Whether you're booking a tour, planning an event, or have questions — our team is ready to assist you.
              </p>

              <div className="info-items">
                <div className="info-box">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-content">
                    <h4>Address</h4>
                    <p>Kampala, Uganda</p>
                  </div>
                </div>

                <div className="info-box">
                  <div className="info-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="info-content">
                    <h4>Phone</h4>
                    <p>
                      <a href="tel:+256774488956">+256 774 488 956</a>
                      <br />
                      <a href="tel:+256703936265">+256 703 936 265</a>
                    </p>
                  </div>
                </div>

                <div className="info-box">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:info@zulatravels.com">info@zulatravels.com</a>
                      <br />
                      <a href="mailto:zulatravels@gmail.com">zulatravels@gmail.com</a>
                      <br />
                      <a href="mailto:bookings@zulatravels.com">bookings@zulatravels.com</a>
                    </p>
                  </div>
                </div>

                <div className="info-box">
                  <div className="info-icon">
                    <FaClock />
                  </div>
                  <div className="info-content">
                    <h4>Working Hours</h4>
                    <p>Monday - Saturday: 8:00 AM – 7:00 PM</p>
                    <p>Sunday: 10:00 AM – 4:00 PM</p>
                  </div>
                </div>

                <div className="info-box">
                  <div className="info-icon">
                    <FaWhatsapp />
                  </div>
                  <div className="info-content">
                    <h4>Quick Connect</h4>
                    <p>
                      <a href={socialMedia.whatsapp} target="_blank" rel="noopener noreferrer">
                        WhatsApp: +256 774 488 956
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="socials">
                <h4>Follow & Connect With Us</h4>
                <div className="social-icons">
                  <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebookF className="social-icon" />
                    <span className="social-text">Facebook</span>
                  </a>
                  <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter className="social-icon" />
                    <span className="social-text">Twitter</span>
                  </a>
                  <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram className="social-icon" />
                    <span className="social-text">Instagram</span>
                  </a>
                  <a href={socialMedia.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <FaTiktok className="social-icon" />
                    <span className="social-text">TikTok</span>
                  </a>
                  <a href={socialMedia.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <FaWhatsapp className="social-icon" />
                    <span className="social-text">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name" 
                    required 
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address" 
                    required 
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your inquiry about?" 
                    autoComplete="off"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5" 
                    placeholder="Tell us how we can help you..." 
                    required
                    autoComplete="off"
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  <FaPaperPlane className="btn-icon" />
                  Send Message
                </button>
              </form>

              <div className="quick-contact">
                <h4>Prefer to chat directly?</h4>
                <div className="quick-buttons">
                  <a href={socialMedia.whatsapp} className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="btn-icon" />
                    WhatsApp Us
                  </a>
                  <a href="tel:+256774488956" className="call-btn">
                    <FaPhoneAlt className="btn-icon" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              title="Zula Travels Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.83495550074!2d32.58237117536603!3d0.3167866353890973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb93f599a3b9%3A0x9c7e01d6bfdd0b8e!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1696597480175!5m2!1sen!2sug"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}