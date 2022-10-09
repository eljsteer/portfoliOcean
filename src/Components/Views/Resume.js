import React from "react";
import { SkillsData, resumeFile } from '../contentData';

function Resume() {
  // const [hovered, setHovered] = useState(false);
  // const toggleHover = () => setHovered(!hovered);
  // const classChange = hovered ? "hide": "show" ;
  return (
    <div>
        <h1 className="moreSpace">RESUME</h1>
        <div className="d-flex justify-content-center">
          <div id="skillsContainer" className="d-flex flex-row col-xxl-4 col-xl-6 col-lg-6 col-md-8 col-sm-10 wrapper justify-content-center" >
            {SkillsData.map(skills => (
              <div 
                // onMouseEnter={toggleHover}
                // onMouseLeave={toggleHover}
                >
                <img className="resumeIcon" src={process.env.PUBLIC_URL + `${skills.icon}`} alt={skills.name}/>
                <div id="skillNames" className="hide">{skills.name}</div>
              </div>
              ))}
          </div>
        </div>
        <h1 className="moreSpace">My Web Development Skills</h1>
        <a href={resumeFile.file} download>
          <button istype="button" className="btn btn-outline-light" id="downloadBttn">Download</button>
        </a>
    </div>
    );
}
export default Resume;