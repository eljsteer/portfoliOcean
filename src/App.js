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
              <Route path="/portfolio.devjs/" element={ < Home/> } /> 
              <Route path="/portfolio.devjs/portfolio" element={<Projects />} />         
              <Route path="/portfolio.devjs/about" element={<About />}/>              
              <Route path="/portfolio.devjs/contact" element={<Contact />} />
              <Route path="/portfolio.devjs/resume" element={<Resume />} />
            </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
