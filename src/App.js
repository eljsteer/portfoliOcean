import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Views/Home";
import About from "./Components/Views/About";
import Projects from "./Components/Views/Projects";
import Resume from "./Components/Views/Resume";
import Contact from "./Components/Views/Contact";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import herobkgroundImage from "./Assets/backgroundImage/ivan-bandura-aeuAn9A6rvYTop-unsplash.jpg"

function App() {
  return (
    <div className="App d-flex flex-column"> 
      <div id="heroimg" style={{ backgroundImage: `url(${herobkgroundImage})`}} alt="background">
        <Router>
          <Header />   
            <Routes>
              <Route path="/" element={ <About /> } />     
              <Route path="/portfolio" element={<Projects />} />         
              <Route path="/home" element={<Home />}/>              
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
