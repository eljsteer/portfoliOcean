import React from "react";
import MediaQuery from "react-responsive";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/sidebarContact";
import Home from "./Components/Views/Home";
import About from "./Components/Views/About";
import Projects from "./Components/Views/Projects";
import Resume from "./Components/Views/Resume";
import Contact from "./Components/Views/Contact";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import herobkgroundImage from "./Assets/backgroundImage/ivan-bandura-aeuAn9A6rvYTop-unsplash.jpg";

function App() {
  return (
    <div className="appWrapper"> 
      {/* <div id="heroimg" alt="background"> */}
      <div id="appBackground" alt="background">
        <Router>
          <Header /> 
          <MediaQuery minWidth={1024}>
            <SideBar /> 
          </MediaQuery>
            <Routes>
              <Route path="/portfoliOcean/" element={ < Home/> } /> 
              <Route path="/portfoliOcean/portfolio" element={<Projects />} />         
              <Route path="/portfoliOcean/about" element={<About />}/>              
              <Route path="/portfoliOcean/contact" element={<Contact />} />
              <Route path="/portfoliOcean/resume" element={<Resume />} />
            </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
