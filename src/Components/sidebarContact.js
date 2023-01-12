import {React, useState} from "react";
import { ContactData, ResumeFile } from "../Components/contentData";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { FaStackOverflow } from "react-icons/fa"
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
import { BsFileEarmarkCode, BsFileEarmarkArrowDown } from "react-icons/bs";
import { TbPhone, TbPhoneCall } from "react-icons/tb"
import { Link } from "react-router-dom";

function SideBar() {

  const [hoveredEmail, setHoveredEmail] = useState(false);
  const [hoveredPhone, setHoveredPhone] = useState(false);
  const [hoveredResume, setHoveredResume] = useState(false);
  const toggleHoverEmail = () => setHoveredEmail(!hoveredEmail);
  const toggleHoverPhone = () => setHoveredPhone(!hoveredPhone);
  const toggleHoverResume = () => setHoveredResume(!hoveredResume);

  return (
  <aside id="sideBar">
    <ul>
      <li className="contactIconBox">
        <a href={ContactData.LinkedIn} target="_blank" rel="noopener noreferrer">
          <FaLinkedin id="linkedinIcon" size="2.5rem"/>
        </a>
      </li>
      <li className="contactIconBox">
        <a href={ContactData.Github} target="_blank" rel="noopener noreferrer">
          <FaGithub id="githubIcon" size="2.5rem" />
        </a>
      </li>
      <li className="contactIconBox">
        <a  href={ContactData.Email} 
              onMouseEnter={toggleHoverEmail}
              onMouseLeave={toggleHoverEmail}
              target="_blank" 
              rel="noopener noreferrer">
              { !hoveredEmail ? <HiOutlineMail id="emailIcon" className="contactIcons" size="2.5rem" alt="Email el.jsteer@gmail.com"/>
              : <HiOutlineMailOpen id="emailIcon" className="contactIcons" size="2.5rem" alt="Email el.jsteer@gmail.com"/>
              }
        </a>
      </li>
      <li className="contactIconBox">
        <a href={ContactData.Phone} 
              onMouseEnter={toggleHoverPhone}
              onMouseLeave={toggleHoverPhone}
              target="_blank" 
              rel="noopener noreferrer">
              { !hoveredPhone ? <TbPhone id="phoneIcon" className="contactIcons" size="2.5rem" alt="Call +61 040588 4740"/>
              : <TbPhoneCall id="phoneIcon" className="contactIcons" size="2.5rem" alt="Call +61 040588 4740"/>
              }
        </a>
      </li>
      <li className="contactIconBox">
        <Link to={ResumeFile.file}
              onMouseEnter={toggleHoverResume}
              onMouseLeave={toggleHoverResume} 
              target="_blank" download>
              { !hoveredResume ? <BsFileEarmarkCode id="resumeIcon" className="contactIcons" size="2.5rem" alt="Download Resume"/>
              : <BsFileEarmarkArrowDown id="resumeIcon" className="contactIcons" size="2.5rem" alt="Download Resume"/>
              }
        </Link>
      </li>
    </ul>
  </aside>
  )
}

export default SideBar;