// src/Footer.js

import React from "react";
import "./Footer.css"; // You can add custom styles for the footer here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            At Seteque CarryVogue Atelier, we design and craft premium quality
            bags for every occasion. Our collection is perfect for everyday use,
            travel, and special events. Join our community of fashion-forward
            individuals.
          </p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a
              href="https://www.wa.me/254783157670"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="bi bi-whatsapp"></i> WhatsApp
            </a>
            <a
              href="https://www.instagram.com/setekdesai"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="bi bi-instagram"></i> Instagram
            </a>
            <a
              href="https://twitter.com/setekdesai"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="bi bi-twitter"></i> Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/meshack-setek/
"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="bi bi-linkedin"></i> Linked in
            </a>
          </div>
        </div>

        <div className="footer-location">
          <h3>Visit Us</h3>
          <p>Our store is located at:</p>
          <p>Lizdams,Narok-Kenya</p>
          <p>Open Monday - Saturday: 10 AM - 6 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Seteque CarryVogue Atelier. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
