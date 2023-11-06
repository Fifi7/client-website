import React from 'react';
import './Footer.css';
import LogoBand from './LogoBand';


function Footer() {
  return (
    <footer className="footer">
        <LogoBand/>
        <div className="left-side">
        <p>Get in touch with us</p>
      </div>
      <div className='right-side'>
      <div className="footer-contact-info">
        <div className="contact-item">Tel: (123) 456-7890</div>
        <div className="contact-item">Email: info@example.com</div>
        <div className="contact-item">Address: 123 Main St, City</div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
