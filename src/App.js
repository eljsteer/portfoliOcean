import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import Home from "./Components/Views/Home";
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
    <div className="App d-flex"> 
      <div id="heroimg" style={{ backgroundImage: `url(${herobkgroundImage})` }}>
        <Router>
          <Header />   
            <Routes>
              {/* <Route 
                path="/"
                element={<Home />}
              /> */}
              <Route path="/about" element={ <About /> } />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>
        <Footer />  
        <Test />
      </div>
    </div>
  );
}

export default App;
