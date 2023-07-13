import {React, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {ThemeProvider} from "styled-components";
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


// import herobkgroundImage from "./Assets/backgroundImage/ivan-bandura-aeuAn9A6rvYTop-unsplash.jpg";

const lightTheme = {
  body: '#E2E2E2',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
}

const darkTheme = {
  body: "rgb(0,7,31)",
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
}

function App() {
  const [mode,setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  }

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      {/* <div id="heroimg" alt="background"> */}
        <Router>
          <Header theme={mode} toggleMode = {toggleMode}/> 
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
    </ThemeProvider>
  );
}

export default App;
