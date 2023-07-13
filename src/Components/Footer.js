import {React, useState} from "react";
import MediaQuery from "react-responsive";
import { ContactData, ResumeFile } from "../Components/contentData";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFileEarmarkCode, BsFileEarmarkArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
import "./Views/CSS/HeadFeetandSideCSS.css"
// import { TbPhone, TbPhoneCall } from "react-icons/tb"
// import { FaStackOverflow } from "react-icons/fa"

function Footer() {
  const [hoveredEmail, setHoveredEmail] = useState(false);
  const [hoveredResume, setHoveredResume] = useState(false);
  const toggleHoverEmail = () => setHoveredEmail(!hoveredEmail);
  const toggleHoverResume = () => setHoveredResume(!hoveredResume);
  // const toggleHoverPhone = () => setHoveredPhone(!hoveredPhone);
  // const [hoveredPhone, setHoveredPhone] = useState(false);

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
            <Link to="portfoliOcean/contact"
                  onMouseEnter={toggleHoverEmail}
                  onMouseLeave={toggleHoverEmail}>
                  { !hoveredEmail ? <HiOutlineMail id="emailIcon" className="contactIcons" size="2.5rem"/>
                  : <HiOutlineMailOpen id="emailIcon" className="contactIcons" size="2.5rem"/>
                  }
            </Link> 
          </li>
          <li className="footerIconBox">
            <Link to={ResumeFile.file}
                  onMouseEnter={toggleHoverResume}
                  onMouseLeave={toggleHoverResume} 
                  target="_blank" download>
                  { !hoveredResume ? <BsFileEarmarkCode id="resumeIcon" className="contactIcons" size="2.5rem"/>
                  : <BsFileEarmarkArrowDown id="resumeIcon" className="contactIcons" size="2.5rem"/>
                  }
            </Link>
          </li>
        </ul>
      </div>
    </MediaQuery>
    <h4 id="wLove">Created with <span>    ❤    </span> by Jason Steer, 2022</h4>
  </div>
  )
}

export default Footer;