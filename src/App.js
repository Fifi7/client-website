import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import HomePage from './Components/Homepage';
import AboutUs from './Components/AboutUs';
import Service from './Components/Service';
import ContactUs from './Components/ContactUs';






function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <AboutUs/>
      <Service/>
      <ContactUs/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
