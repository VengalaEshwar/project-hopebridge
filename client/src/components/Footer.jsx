import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className="footer">
    <div className="footer-content">
      <div className="footer-section about">
        <h2>About Us</h2>
        <p>We are dedicated to making a positive impact worldwide by connecting people and organizations for a better future.</p>
      </div>
      <div className="footer-section links">
        <h2>Quick Links</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/emergency">Emergency</Link></li>
          <li><Link to="/adopt">Adopt</Link></li>
          <li><Link to="/donate">Donation</Link></li>
    
        </ul>
      </div>
      <div className="footer-section contact">
        <h2>Contact Us</h2>
        <p>Email: hopebridge@gmail.com</p>
        <p>Phone: +91 8688496180</p>
        <p>Location: Hyderabad, India</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Hope Bridge | All Rights Reserved</p>
    </div>
  </div>
  )
}

export default Footer