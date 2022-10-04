import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Views/Home";
import About from "./Components/Views/About";
import Projects from "./Components/Views/Projects";
import Resume from "./Components/Views/Resume";
import Contact from "./Components/Views/Contact";
import Test from "./Components/Views/Test";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import herobkgroundImage from "./Assets/images/background/ivan-bandura-aeuAn9A6rvYTop-unsplash.jpg"

function App() {
  return (
    <div className="App d-flex flex-column"> 
      {/* <img id="heroimg" style={{ backgroundImage: `url(${herobkgroundImage})`}} alt="background"/> */}
      {/* <img src={herobkgroundImage} id="heroimg" alt="BackgrounImg"> */}
        <Router>
          <Header />   
            <Routes>
              <Route path="/about" element={ <About /> } />     
              <Route path="/portfolio" element={<Projects />} />         
              <Route path="/" element={<Home />}/>              
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>
        <Footer />  
        <Test />
    </div>
  );
}

export default App;
