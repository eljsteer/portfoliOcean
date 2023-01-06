import React from "react";
import { Link } from "react-router-dom";
import { SkillsData, resumeFile } from '../contentData';

function Resume() {
  // const [hovered, setHovered] = useState(false);
  // const toggleHover = () => setHovered(!hovered);
  // const classChange = hovered ? "hide": "show" ;
  return (
    <div class="d-flex container text-center justify-content-center">
      <div class="d-flex flex-column">
        <div>
          <h1 className="moreSpace pageHeader">My Skills</h1>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
            {/* <h3 className="pageHeader">Web Development Proficiencies</h3> */}
            <div id="skillsContainer" className="d-flex flex-row wrapper justify-content-center" >
              {SkillsData.map(skills => (
              <div // onMouseEnter={toggleHover} // onMouseLeave={toggleHover}
                  >
                <img className="resumeIcon" src={process.env.PUBLIC_URL + "/" + skills.icon} alt={skills.name}/>
                <div id="skillNames" className="hide">{skills.name}</div>
              </div>
                ))}
              <div className="resumeDownload">
                <h3 id="subtitle">Download Resume</h3>
                <div>
                  <Link to={resumeFile.file} target="_blank" download>
                    <button type="button" className="btn btn-outline-light" value="download" id="downloadBttn">Download</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="col-6">
            <h3 className="pageHeader">Download Resume</h3>
            <div>
              <a href={resumeFile.file} download>
                <button istype="button" className="btn btn-outline-light" id="downloadBttn">Download</button>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default Resume;