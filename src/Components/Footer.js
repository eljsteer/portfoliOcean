import {React, useState} from "react";
import MediaQuery from "react-responsive";
import { ContactData, ResumeFile } from "../Components/contentData";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { FaStackOverflow } from "react-icons/fa"
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
import { BsFileEarmarkCode, BsFileEarmarkArrowDown } from "react-icons/bs";
import { TbPhone, TbPhoneCall } from "react-icons/tb"
import { Link } from "react-router-dom";



function Footer() {

 // const [hovered, setHovered] = useState(false);
  // const toggleHover = () => setHovered(!hovered);
  // const classChange = hovered ? "hide": "show" ;

  return (
  <div id="footerWrapper"  className="moreSpace">
    <MediaQuery maxWidth={1023}>
      <div id="contactBar">
        <ul id="contactBarList">
          <li className="footerIconBox">
            <a href={ContactData.LinkedIn} target="_blank" rel="noopener noreferrer">
              <FaLinkedin id="linkedinIcon" className="contactIcons" size="2.5rem"/>
            </a>
          </li>
          <li className="footerIconBox">
            <a href={ContactData.Github} target="_blank" rel="noopener noreferrer">
              <FaGithub id="githubIcon" className="contactIcons" size="2.5rem" />
            </a>
          </li>
          <li className="footerIconBox">
            <a href={ContactData.Email} target="_blank" rel="noopener noreferrer">
              {/* onMouseEnter={toggleHover}  */}
              {/* onMouseLeave={toggleHover} */}
              <HiOutlineMail id="emailIcon" className="contactIcons" size="2.5rem"/>
            </a>
          </li>
          <li className="footerIconBox">
            <a href={ContactData.Phone} target="_blank" rel="noopener noreferrer">
              <TbPhone id="phoneIcon" className="contactIcons" size="2.5rem"/>
            </a>
          </li>
          <li className="footerIconBox">
            <Link to={ResumeFile.file} target="_blank" download>
            <BsFileEarmarkCode id="resumeIcon" type="button" value="download" className="contactIcons" size="2.5rem"/>
            </Link>
          </li>
        </ul>
      </div>
    </MediaQuery>
    <h3 id="wLove">Created with <span>    ❤    </span> by Jason Steer, 2022</h3>
  </div>
  )
}

export default Footer;