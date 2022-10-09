import React from "react";
import { NavList } from "./NavList";
import { NavLink, useLocation } from "react-router-dom";

function Navigation() {

  let currentTab = useLocation().pathname;

  const navbarList = NavList.map(({name, url, mainHeader}, index) => {
    return (
      <li key={index} className="nav-item navbar-text" id="navbarHeader">
        <NavLink to={url} activeclassname="active" className={ mainHeader ? ( currentTab === url ? "currentPage nav-link homeHeader" : "none nav-link homeHeader"): "nav-link"}>
          {name}
        </NavLink>
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