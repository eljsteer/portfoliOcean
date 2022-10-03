import React from 'react';
import ProfilePhoto from "../../Assets/images/profile/standingProf-resz1.jpg";
import { AboutData } from '../contentData';

function About() {
    return (
    <div className="container-fluid flex-column d-flex">
      <div className="aboutPhoto">
        <img src={ProfilePhoto} id="aboutPhoto" alt="devJS"></img>
      </div>
      <div className="col-7 justify-content-center">
        <h3>{AboutData.Role}</h3>
        <p>{AboutData.Description}</p>
      </div>
    </div>
    );
}

export default About;