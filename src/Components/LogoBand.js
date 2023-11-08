
import './LogoBand.css';
import image2 from '../Assets/band1.jpg';
import image3 from '../Assets/band8.png';
import image5 from '../Assets/band4.png';
import image6 from '../Assets/band9.png';


function LogoBand() {
  return (
    <div className="logo-band">
      <img src={image2} alt="Logo 1" />
      <img src={image5} alt="Logo 2" />
      <img src={image3} alt="Logo 3" />
      <img src={image6} alt="Logo 4" />
      {/* Add more logos as needed */}
    </div>
  );
}

export default LogoBand;
