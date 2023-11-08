import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import HomePage from './Components/Homepage';
import AboutUs from './Components/AboutUs';
import Service from './Components/Service';
import ContactUs from './Components/ContactUs';
import { BrowserRouter as Router,Routes, Route ,} from "react-router-dom";




function App() {
  return (
    <div className='App'>
    <Router>
    <NavBar />
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutUs />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route/>
      </Routes>
      <Footer/>
      </Router>

    </div>
  );
}

export default App;
