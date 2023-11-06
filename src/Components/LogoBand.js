import React from 'react';
import './LogoBand.css';
import image2 from '../Assets/band1.jpg';
import image3 from '../Assets/band6.jpg';
import image4 from '../Assets/band3.png';
import image5 from '../Assets/band4.png';
import image6 from '../Assets/band5.png';
import image7 from '../Assets/band6.jpg';

function LogoBand() {
  return (
    <div className="logo-band">
      {/* Add your brand logos as individual images here */}
      <img src={image2} alt="Logo 1" />
      <img src={image7} alt="Logo 2" />
      <img src={image4} alt="Logo 3" />
      <img src={image5} alt="Logo 3" />
      <img src={image6} alt="Logo 3" />
      <img src={image3} alt="Logo 3" />
      {/* Add more logos as needed */}
    </div>
  );
}

export default LogoBand;
