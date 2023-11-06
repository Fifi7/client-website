import React from 'react';
import './Card.css';


const Card = ({ name, title, imageSrc }) => (
  <div className="card">
    <img src={imageSrc} alt="Avatar" />
    <div className="card-container">
      <h4><b>{name}</b></h4>
      <p>{title}</p>
    </div>
  </div>
);

export default Card;














































































// import React from 'react';
// import './Card.css';
// import image1 from '../Assets/logo1.png';




// const Card = () => {
//   return (
//     <div className="card">
//       <img src={image1} alt="Avatar" />
//       <div className="card-container">
//         <h4><b>John Doe</b></h4>
//         <p>Architect & Engineer</p>
//       </div>
//     </div>
//   );
// };

// const CardList = () => {
//   return (
//     <div className="card-list">
//       <Card />
//       <Card />
//       <Card />
//       <Card/>
//     </div>
//   );
// };

// export default CardList;
