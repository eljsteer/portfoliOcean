import React from "react";
import { ContactData } from "../Components/contentData";
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaStackOverflow } from "react-icons/fa"


function Footer() {
  return (
  <div id="footer">
    <div className="row wrapper justify-content-center m-4">
      <a href={ContactData.Github} target="_blank" rel="noopener noreferrer" className="contactIcons m-3">
        <FaGithub size="3.5rem"/>
      </a>
      <a href={ContactData.LinkedIn} target="_blank" rel="noopener noreferrer" className="contactIcons m-3">
        <FaLinkedin size="3.5rem"/>
      </a>
      <a href={ContactData.StackOverflow} target="_blank" rel="noopener noreferrer" className="contactIcons m-3">
        <FaStackOverflow className="contactIcons" size="3.5rem"/>
      </a>
    </div>
    <pre><h3>Created with <span>  ❤  </span> by eljsteer</h3></pre>
    {/* <link id="" href=""/><span className="navArrow">&#10685;</span> */}
  </div>
  )
}

export default Footer;