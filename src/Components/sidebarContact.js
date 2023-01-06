import React from "react";
import { ContactData } from "../Components/contentData";
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaStackOverflow } from "react-icons/fa"
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function sideBar() {
  return (
  <aside id="sideBar">
    <ul>
      <li>
        <Link to={ContactData.Github} target="_blank" rel="noopener noreferrer" className="contactIcons m-3">
          <FaGithub id="githubIcon" size="2.5rem" />
        </Link>
      </li>
      <li>
        <Link to={ContactData.LinkedIn} target="_blank" rel="noopener noreferrer" className="contactIcons m-3">
          <FaLinkedin id="linkedinIcon"size="2.5rem"/>
        </Link>
      </li>
      <li>
        <Link to={ContactData.StackOverflow} target="_blank" rel="noopener noreferrer" className="contactIcons m-3">
          <FaStackOverflow id="stackOverflowIcon" size="2.5rem"/>
        </Link>
      </li>
    </ul>
  </aside>
  )
}

export default sideBar;