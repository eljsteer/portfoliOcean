import React from 'react';
import { ProjectData } from "../contentData";
import ProjectCard from '../projectCard';

function Projects() {
  return (
    <div className="container">
      <div>
        {ProjectData.map(project => (
          <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </div>
    );
}

export default Projects;
// TODO: Add in Projects