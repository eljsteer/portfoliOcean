import React from 'react';
import { KeyProject, ProjectData } from "../contentData";
import ProjectCard from '../projectCard';
import "./CSS/ProjectsCSS.css";

function Projects() {
  return (
    <div className="container-fluid text-center">
      <h1 className="moreSpace pageHeader">Portfolio Projects</h1>
      <div id="keyProjectContainer" className="projectsContainer d-flex flex-row justify-content-center">
        <div id="keyProjectBox" key={KeyProject.name}>
            <img id="keyProjectImg" src={process.env.PUBLIC_URL + "/" + KeyProject.image} alt={KeyProject.alt}/>
            <div className="imageOverlay card-img-overlay">
              <h5 className="card-title">{KeyProject.name}</h5>
              <p>{KeyProject.description}</p>
              <p><small>{KeyProject.technologies}</small></p>
              <div>
                {KeyProject.livePreview ? 
                (
                <div className="d-flex flex-row">
                  <a href={KeyProject.livePreview} target="_blank" rel="noopener noreferrer" className="appButtons">
                    <button type="button" className="btn btn-light projectBttn">Deploy App</button>
                  </a>
                  <a href={KeyProject.sourceCode} target="_blank" rel="noopener noreferrer" className="appButtons">
                    <button type="button" className="btn btn-light projectBttn">Github Repo</button>
                  </a>
                </div>
                ) : (
                <a href={KeyProject.sourceCode} target="_blank" rel="noopener noreferrer" className="appButtons">
                  <button type="button" className="btn btn-light projectBttn">Github Repo</button>
                </a>
                )}
              </div>
            </div>
        </div>
      </div>
      <div className="projectsContainer d-flex flex-row justify-content-center" >
        {ProjectData.map(project => (
          <ProjectCard key={project.id} project={project}/>
          ))}
      </div>
    </div>
    );
}

export default Projects;