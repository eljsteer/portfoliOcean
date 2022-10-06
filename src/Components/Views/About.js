import React from 'react';
import { AboutData } from '../contentData';

function About() {
    return (
    <div className="container-fluid flex-column d-flex">
      <div className="aboutPhoto">
        <img src={process.env.PUBLIC_URL + '/assets/images/profile/sittingProf-resz1.jpg'} id="aboutPhoto" alt="devJS"></img>
      </div>
      <div className="col-7 justify-content-center">
        <h3>{AboutData.Role}</h3>
        <p>{AboutData.Description}</p>
      </div>
    </div>
    );
}

export default About;