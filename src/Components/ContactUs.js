import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="bg-img">
      <form action="/action_page.php" className="container">

      <div className="left-section">
      <h2>Contact Details</h2>
      <div className="contact-info">
        <div className="info">
          <i className="fas fa-map-marker-alt"></i>
          <p>123 Main Street, City, Country</p>
        </div>
        <div className="info">
          <i className="fas fa-phone"></i>
          <p>(123) 456-7890</p>
        </div>
        <div className="info">
          <i className="fas fa-envelope"></i>
          <p>info@example.com</p>
        </div>
      </div>
    </div>
    <div className="right-section">
        <h1>Contact Us</h1>

        
        <input type="text" placeholder="Enter Your Name" name="name" required />

        
        <input type="text" placeholder="Enter Your Email" name="email" required />

        
        <textarea placeholder="Your Message" name="message" required></textarea>

        <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
