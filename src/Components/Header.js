import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark opacity" id="navHeader">
      <div className="container-fluid justify-content-center">
        <div className="row">
          {/* <a class="nav-link" href="/"><img id="logo-1" src="/"></a> */}
          <button className="navbar-toggler" id="navbar-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Navigation />
        </div>
      </div>
    </nav>
  )
}

export default Header;