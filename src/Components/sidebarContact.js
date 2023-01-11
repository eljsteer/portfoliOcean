import React from "react";
import { ContactData, ResumeFile } from "../Components/contentData";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { FaStackOverflow } from "react-icons/fa"
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
import { BsFileEarmarkCode, BsFileEarmarkArrowDown } from "react-icons/bs";
import { TbPhone, TbPhoneCall } from "react-icons/tb"
import { Link } from "react-router-dom";

// const [isActive, setIsActive] = useState(false);

function sideBar() {
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
        <a href={ContactData.Email}  target="_blank" rel="noopener noreferrer">
          <HiOutlineMail id="emailIcon" size="2.5rem"/>
        </a>
      </li>
      <li className="contactIconBox">
        <a href={ContactData.Phone} target="_blank" rel="noopener noreferrer">
          <TbPhone id="phoneIcon" size="2.5rem"/>
        </a>
      </li>
      <li className="contactIconBox">
        <Link to={ResumeFile.file} target="_blank" download>
          <BsFileEarmarkCode id="resumeIcon" type="button" value="download" className="contactIcons" size="2.5rem"/>
        </Link>
      </li>
    </ul>
  </aside>
  )
}

export default sideBar;