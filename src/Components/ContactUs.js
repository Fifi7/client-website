import React , {useState}from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/contact_form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });



      if (response.ok) {
        alert('Message sent successfully!');
        // Optionally, clear the form fields.
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Message could not be sent. Please try again later.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-img">
      <form action="/action_page.php" className="container" onSubmit={handleSubmit}>
      <div className="left-section">
      <h2>Contact Details</h2>
      <div className="contact-info">
        <div className="info">
        <div className="icon">
                <FontAwesomeIcon icon={faLocationDot} size="2x" />
              </div>
              <div className="text">
                <p>Makhentsa cc, Golf Street, Boksburg West, Johannesburg</p>
              </div>
        </div>
        <div className="info">
        <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </div>
              <div className="text">
                <p>info@makhentsa.co.za</p>
              </div>
        </div>
        <div className="info">
        <div className="icon">
                <FontAwesomeIcon icon={faPhone} size="2x" />
              </div>
              <div className="text">
                <p>(011) 823-2847</p>
              </div>
        </div>
      </div>
    </div>
    {/* <div className="right-section">
        <h1>Contact Us</h1>

        
        <input type="text" placeholder="Enter Your Name" name="name" required />

        
        <input type="text" placeholder="Enter Your Email" name="email" required />

        
        <textarea placeholder="Your Message" name="message" required></textarea>

        <button type="submit" className="btn">Submit</button>
        </div> */}
      </form>
    </div>
  );
};

export default ContactUs;
