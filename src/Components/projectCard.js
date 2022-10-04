import React from 'react';
// const testPath = "../Assets/images/projects/passwordGenie-img.jpg"

function ProjectCard({project}) {
  // const imagePath = project.image;

    return (
    <div className="card" key={project.name}>
      <img src={project.image} className="card-img" alt={project.alt}/>
        <div className="card-img-overlay">
          <h5 className="card-title">{project.name}</h5>
          <p><small>{project.technologies}</small></p>
        </div>
    </div>
    );
}

export default ProjectCard;