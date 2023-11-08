import React from 'react';
import './Service.css';
import CardSlider from './CardSlider';
import img1 from '../Assets/Image1.jpeg';
import img2 from '../Assets/service2.jpg';
import img3 from '../Assets/service3.jpg';
import img4 from '../Assets/Image2.jpeg';
import img5 from '../Assets/Image9.jpeg';
import img6 from '../Assets/Image7.jpeg';
import img7 from '../Assets/Image5.jpeg';
import img8 from '../Assets/Image6.jpeg';



const Service = () => {

  const cards = [
  { name: 'Construction & Maintenance', imageSrc: img1 },
  { name: 'LandFill/ Dump Sites Management', imageSrc: img2 },
  { name: 'Office/ Industrial Cleaning',imageSrc: img3 },
  { name: 'Plant Equipment Hire', imageSrc: img4 },
  { name: 'Transport Hire', imageSrc: img5},
  { name: 'Delivery & maintenance of chemical toilets', imageSrc: img6 },
  { name: 'Water and Sanitation', imageSrc: img7 },
  { name: 'Business Development Services', imageSrc: img8 },
  ]
  return (
    <div className="service-container">
      <div className="service-content">
        <h3>Our Services</h3>
        <p>We are a Multi-desciplinary company offering a variety of services.
          We currently work in the Gauteng and North West Provinces, however, As
          our Business gains momentum we meet the demand for expansion.
        </p>
        <p>Our Clients include Government, Public and Private Companies, Supermarkets, 
          Clothing Shops, Doctors that have Surgeries in Townships, Schools as well as General 
          Individuals of the Community.
        </p>
      </div>
      <CardSlider cards={cards} />
      
     
    </div>
   
   
  );
};

export default Service;
