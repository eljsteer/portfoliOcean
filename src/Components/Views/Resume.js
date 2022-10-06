import React from 'react';
import { SkillsData } from '../contentData';

function Resume(skills) {
    return (
    <div>
        <h1 className="moreSpace">My Web Development Skills</h1>
        <div className="d-flex justify-content-center">
          <div className="row wrapper col-6 justify-content-center" >
            {SkillsData.map(skills => (
              <img className="resumeIcon" src={process.env.PUBLIC_URL + `${skills.icon}`} alt={skills.name}/>
              ))}
          </div>
        </div>
    </div>
    );
}
export default Resume;

// TODO: link to download resume and add icons for skills

// <a target="_blank" href="https://icons8.com/icon/23028/html-5">Html 5</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>