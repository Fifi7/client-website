
import './Footer.css';
import LogoBand from './LogoBand';


function Footer() {
  return (
    <footer className="footer">
        <LogoBand/>
        <div className="left-side">
        <p>Get in touch with us!!!</p>
      </div>
      <div className='right-side'>
      <div className="footer-contact-info">
        <div className="contact-item">Tel: (011) 823-2847</div>
        <div className="contact-item">Email: info@makhentsa.co.za</div>
        <div className="contact-item">Address: Golf Street, Boksburg West, Johannesburg</div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
