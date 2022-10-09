import React from "react";
import { NavList } from "./NavList";
import { NavLink, useLocation } from "react-router-dom";


function Navigation() {
  let currentTab = useLocation().pathname;

  const navbarList = NavList.map(({name, url, mainHeader}, index) => {
    return (
      <li key={index} className="nav-item navbar-text">
        <NavLink to={url} className={ mainHeader ? ( currentTab === url ? "currentPage nav-link homeHeader" : "nav-link homeHeader")  : "nav-link"} >
          {name}
        </NavLink>
      </li>
    )
  })

  return (
    <div className="navbar-collapse collapse row" id="navbarNav">
        <ul className="navbar-nav">
          {navbarList}
        </ul>
    </div>
  )
}


export default Navigation;