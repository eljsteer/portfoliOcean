import React from "react";
import { ContactData } from "../Components/contentData";
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaStackOverflow } from "react-icons/fa"
import { Link } from "react-router-dom";


function Footer() {
  return (
  <div id="footer"  className="moreSpace">
    <div className="d-flex flex-row wrapper justify-content-center m-4">
      <Link to={ContactData.Github} target="_blank" rel="noopener noreferrer" className="contactIcons m-3">
        <FaGithub size="3.5rem"/>
      </Link>
      <Link to={ContactData.LinkedIn} target="_blank" rel="noopener noreferrer" className="contactIcons m-3">
        <FaLinkedin size="3.5rem"/>
      </Link>
      <Link to={ContactData.StackOverflow} target="_blank" rel="noopener noreferrer" className="contactIcons m-3">
        <FaStackOverflow className="contactIcons" size="3.5rem"/>
      </Link>
    </div>
    <h3 id="wLove">Created with <span>    ❤    </span> by eljsteer</h3>
  </div>
  )
}

export default Footer;