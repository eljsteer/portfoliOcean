import React from 'react';
import { ProjectData } from "./contentData"

function ProjectCard() {
    return (
    <div>
        <h1 className="moreSpace">Portfolio Projects</h1>
        <a href={ProjectData.livePreview} className="card text-bg-dark"><img src={process.env.PUBLIC_URL + ProjectData.image} className="card-img" alt={ProjectData.alt}/></a>
          <div className="card-img-overlay">
            <h5 className="card-title">{ProjectData.name}</h5>
            <p><small>{ProjectCard.technologies}</small></p>
            <img src={process.env.PUBLIC_URL + ProjectData.image} className="card-img" alt={ProjectData.alt}/>
          </div>
    </div>
    );
}

export default ProjectCard;