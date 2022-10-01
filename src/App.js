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

function App() {
  return (
    <div className="App">
      <Header />    
        <Router>
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/about"
              element={<About />}
            />
            <Route 
              path="/projects"
              element={<Projects />}
            />
            <Route 
              path="/resume"
              element={<Resume />}
            />
            <Route 
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
