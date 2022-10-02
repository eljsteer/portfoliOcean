import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import Home from "./Components/Views/Home";
import About from "./Components/Views/About";
import Projects from "./Components/Views/Projects";
import Resume from "./Components/Views/Resume";
import Contact from "./Components/Views/Contact";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import herobkgroundImage from "./Assets/images/ivan-bandura-aeuAn9A6rvY-unsplash.jpg"

function App() {
  return (
    <div className="App"> 
      <div id="heroimg">
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
      </div> 
    </div>
  );
}

export default App;
