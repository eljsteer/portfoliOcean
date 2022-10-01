import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-black" id="navbar">
    {/* <a class="nav-link" href="/"><img id="logo-1" src="/"></a> */}
    <button className="navbar-toggler" id="navbar-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Navigation />
  </nav>
  )
}

export default Header;