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
      <div className="contact-info">
        <div className="contact-item">Tel: (123) 456-7890</div>
        <div className="contact-item">Email: info@example.com</div>
        <div className="contact-item">Address: 123 Main St, City</div>
      </div>
      </div>
      {/* <p>&copy; {new Date().getFullYear()} Makhentsa</p> */}
      
    </footer>
  );
}

export default Footer;
