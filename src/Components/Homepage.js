import React from 'react';
import './HomePage.css';


const HomePage = () => {
  return (
    <div className="hero-container">
      <div className="content">
        <h1>Home</h1>
        <p>At Musa and Muzi Construction, we offer a wide range of construction and renovation services, including [list of services],
           making us your one-stop solution for all your construction needs. Whether you're planning a new construction project or renovating an existing property,
            our team is here to bring your vision to life.</p>

            <p>Our core values include a strong commitment to client satisfaction, the highest standards of quality, and a focus on safety.
               We take pride in our attention to detail and ensure that every project is completed to the highest industry standards.</p>
      </div>
    
    </div>
  );
};

export default HomePage;




































// import React, { useState, useEffect } from 'react';
// import './HomePage.css';

// import img1 from '../Assets/Hero1.png';
// import img2 from '../Assets/Hero2.jpeg';
// import img3 from '../Assets/Hero3.jpeg';
// import img4 from '../Assets/hero4.jpeg';

// const images = [img1, img2, img3, img4
  
// ]; 

// const HomePage = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change images every 3 seconds

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div className="hero-container">
//       <div className="content">
//         <h1>Home</h1>
//         <p>Welcome to our amazing Site! We hope that you enjoy yourself</p>
//       </div>
//       <div className="slideshow">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slideshow Image ${index + 1}`}
//             className={index === currentImageIndex ? 'active' : ''}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;




















