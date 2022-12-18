import React from 'react';
import { ProjectData } from "../contentData";
import ProjectCard from '../projectCard';

function Projects() {
  return (
    <div className="container-fluid text-center">
      <h1 className="moreSpace pageHeader">Portfolio Projects</h1>
        <div className="projectsContainer d-flex flex-row justify-content-center" >
          {ProjectData.map(project => (
            <ProjectCard key={project.id} project={project}/>
            ))}
        </div>
    </div>
    );
}

export default Projects;