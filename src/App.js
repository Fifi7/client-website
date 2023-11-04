import './App.css';
import NavBar from './Components/NavBar';
// import Footer from './Components/Footer';
import HomePage from './Components/Homepage';
import AboutUs from './Components/AboutUs';
import Service from './Components/Service';
import ContactUs from './Components/ContactUs';
// import Card from './Components/Card';
// import CardList from './Components/Card';
import CardSlider from './Components/CardSlider';



const cards = [
  { name: 'John Doe', title: 'Architect & Engineer' },
  { name: 'Jane Smith', title: 'Designer' },
  { name: 'Bob Johnson', title: 'Developer' },
  { name: 'Alice Brown', title: 'Marketing Specialist' },
  { name: 'Ella Davis', title: 'Graphic Designer' },
  { name: 'David Lee', title: 'Software Engineer' },
  { name: 'Grace Wilson', title: 'Project Manager' },
  { name: 'Oliver Green', title: 'UX Designer' },
];


function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <AboutUs/>
      <Service/>
      <ContactUs/>
      {/* <CardList/> */}
      <CardSlider cards={cards} />
      {/* <Footer/>
       */}
      
    </div>
  );
}

export default App;
