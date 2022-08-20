import React from "react";
import './index.css';
import {Routes, Route} from 'react-router-dom';

import Home from "./Pages/Home";
import Navbar from "./components/Home/navbar/Navbar";
import About from "./components/About/About";
import Doctors from "./components/Doctors/Doctors";
import Treatments from "./components/Treatments/Treatments";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Home/footer/footer";
import DoctorDetails from "./components/Doctors/DoctorDetails";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/doctors' element={<Doctors />} />
          <Route exact path='/doctors/:name' element={<DoctorDetails />} />
          <Route exact path='/treatments' element={<Treatments />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
