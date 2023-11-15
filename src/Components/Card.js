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














































































