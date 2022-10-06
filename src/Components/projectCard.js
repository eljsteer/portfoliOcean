import React from 'react';

function ProjectCard({project}) {

    return (
      <div className="projectBox card col-4 m-4 p-0" key={project.name}>
        {/* <img className="projectImg" src={`${process.env.PUBLIC_URL}/assets/${project.id}.jpg`} alt={project.alt}/> */}
        <img className="projectImg" src={process.env.PUBLIC_URL + project.image} alt={project.alt}/>
        <div className="imageOverlay card-img-overlay">
          <h5 className="card-title">{project.name}</h5>
          <p>{project.description}</p>
          <p><small>{project.technologies}</small></p>
        </div>
      </div>
    );
}

export default ProjectCard;