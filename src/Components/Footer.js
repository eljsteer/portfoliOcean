import React from "react";
import MediaQuery from "react-responsive";
import { ContactData } from "../Components/contentData";
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaStackOverflow } from "react-icons/fa"
// import { Link } from "react-router-dom";

function Footer() {
  return (
  <div id="footerWrapper"  className="moreSpace">
    <MediaQuery maxWidth={1024}>
      <div id="contactBar">
        <ul id="contactBarList">
          <li>
            <a href={ContactData.Github} target="_blank" rel="noopener noreferrer">
              <FaGithub id="githubIcon" className="contactIcons" size="2.5rem" />
            </a>
          </li>
          <li>
            <a href={ContactData.LinkedIn} target="_blank" rel="noopener noreferrer">
              <FaLinkedin id="linkedinIcon" className="contactIcons" size="2.5rem"/>
            </a>
          </li>
          <li>
            <a href={ContactData.StackOverflow} target="_blank" rel="noopener noreferrer">
              <FaStackOverflow id="stackOverflowIcon" className="contactIcons" size="2.5rem"/>
            </a>
          </li>
        </ul>
      </div>
    </MediaQuery>
    <h3 id="wLove">Created with <span>    ❤    </span> by eljsteer</h3>
  </div>
  )
}

export default Footer;