import React from 'react';
import { AboutData } from '../contentData';

function About({about}) {
    return (
    <div id="aboutWrapper" className="container-fluid flex-column d-flex">
      <div className="d-flex justify-content-center">
        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-8">
          <h3 className="moreSpace pageHeader">{AboutData.role}</h3>
          <p id="aboutMeDescr">{AboutData.description}</p>
        </div>
      </div>
    </div>
    );
}

export default About;