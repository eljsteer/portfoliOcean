import React from "react";
import { NavList } from "./NavList";
import { Link } from "react-router-dom";

function Navigation() {
  const navbarList = NavList.map(({name, url, mainHeader}, index) => {
    return (
      <li key={index} className="nav-item navbar-text" id="navbarHeader">
        <Link to={url} className={mainHeader ? ( "nav-link homeHeader") : ("nav-link")}>
          {name}
        </Link>
      </li>
    )
  })

  return (
    <div className="collapse navbar-collapse row" id="navbarNavMenu">
        <ul className="navbar-nav">
          {navbarList}
        </ul>
    </div>
  )
}


export default Navigation;