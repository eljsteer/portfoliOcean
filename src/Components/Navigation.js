import React from "react";
import { NavList } from "./NavList";
import { Link, useLocation } from "react-router-dom";


function Navigation() {
  let currentTab = useLocation().pathname;

  console.log(currentTab);

    const navbarList = NavList.map(({name, url, mainHeader}, index) => {
    
      const smallCase = (currentTab === url ? " currentPage" : "navLink");

      return (
      <li key={index} className="navbarText">
        <Link to={url} className={ mainHeader ? smallCase + " homeTitle" : smallCase } >
          {name}
        </Link>
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