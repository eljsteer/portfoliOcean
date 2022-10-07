import React from "react";
import { SkillsData,resumeFile } from '../contentData';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Resume() {
  // const [hovered, setHovered] = useState(false);
  // const toggleHover = () => setHovered(!hovered);
  // const classChange = hovered ? "hide": "show" ;
  return (
    <div>
        <h1 className="moreSpace">RESUME</h1>
        <div className="d-flex justify-content-center">
          <div id="skillsContainer" className="row wrapper col-6 justify-content-center " >
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
        <link href={resumeFile.file} download><button istype="button" className="btn btn-outline-light" id="downloadBttn">Download</button></link>
    </div>
    );
}
export default Resume;

// TODO: link to download resume and add icons for skills

// <a target="_blank" href="https://icons8.com/icon/23028/html-5">Html 5</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>