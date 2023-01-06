import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg" id="navHeader">
      <div className="container-fluid justify-content-center">
        <div className="flex-row">
          <button className="navbar-toggler" id="navbar-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Navigation />
        </div>
      </div>
    </nav>
  )

}

export default Header ;