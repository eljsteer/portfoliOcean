import {React, createContext, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MediaQuery from "react-responsive";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/sidebarContact";
import Home from "./Components/Views/Home";
import About from "./Components/Views/About";
import Projects from "./Components/Views/Projects";
import Resume from "./Components/Views/Resume";
import ThemeSwitch from "./Components/Theme";
import Contact from "./Components/Views/Contact";
import './App.css';

// import herobkgroundImage from "./Assets/backgroundImage/ivan-bandura-aeuAn9A6rvYTop-unsplash.jpg";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
      setTheme((current) => (current === "dark" ? "light" : "dark"));
    }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {/* <div id="heroimg" alt="background"> */}
      <div className="App" id={theme}>
        <Router>
          <Header/> 
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
        <ThemeSwitch/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
