import React from "react";
import Navigation from "./Navigation";
import toggleMode from "../App"
import "./Views/CSS/HeadFeetandSideCSS.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg" id="navHeader">
      <div className="container-fluid justify-content-center">
        <div id="navBarToggler" className="flex-row">
          <button className="navbar-toggler" id="navbar-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Navigation />
        </div>
        <div id="modeSwitch" class="form-check form-switch">
          <input 
            class="form-check-input"
            type="checkbox" 
            role="switch" 
            id="flexSwitchCheckDefault"
            onClick={toggleMode}>
          </input>
        </div>
      </div>
    </nav>
  )

}

export default Header ;