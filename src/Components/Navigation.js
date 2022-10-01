import React from "react";
import { NavList } from "./NavList";
import { NavLink } from "react-dom";


function Navigation() {
  const navbarList = NavList.map(({name, url}, index) => {
    return (
      <li key={index} className="nav-item navbar-text">
        <NavLink to={url} className="nav-link" activeClass="active" spy={true} smooth={true}>
          {name}
        </NavLink>
      </li>
    )
  })

  return (
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavMenu">
        <ul className="navbar-nav">
          {navbarList}
        </ul>
    </div>
  )
}


export default Navigation;