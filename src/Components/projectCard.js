import React from 'react';
import { Link } from "react-router-dom";

function ProjectCard({project}) {
    return (
      <div className="projectBox card col-lg-4 col-md-6 col-sm-8 col-xs-10 m-4 p-0" key={project.name}>
        {/* <img className="projectImg" src={`${process.env.PUBLIC_URL}/assets/${project.id}.jpg`} alt={project.alt}/> */}
        <img className="projectImg" src={process.env.PUBLIC_URL + "/" + project.image} alt={project.alt}/>
        <div className="imageOverlay card-img-overlay">
          <h5 className="card-title">{project.name}</h5>
          <p>{project.description}</p>
          <p><small>{project.technologies}</small></p>
          <div>
            {project.livePreview ? 
            (
            <div className="d-flex flex-row">
              <Link to={project.livePreview} target="_blank" rel="noopener noreferrer" className="appButtons">
                <button type="button" className="btn btn-light">Deploy App</button>
              </Link>
              <Link to={project.sourceCode} target="_blank" rel="noopener noreferrer" className="appButtons">
                <button type="button" className="btn btn-light">Github Repo</button>
              </Link>
            </div>
            ) : (
            <Link to={project.sourceCode} target="_blank" rel="noopener noreferrer" className="appButtons">
              <button type="button" className="btn btn-light">Github Repo</button>
            </Link>
            )}
          </div>
        </div>
      </div>
    );
}

export default ProjectCard;