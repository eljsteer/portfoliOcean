import React from 'react';
import ProfilePhoto from "../../Assets/images/profile/standingProf-resz1.jpg";

function About() {
    return (
    <div>
        <div className="col-md about-left">
          <img src={ProfilePhoto} id="aboutPhoto" alt="devJS"></img>
        </div>
        <h3>Web Developer</h3>
        <p> Ardent Web Developer, Lover of Mother Earth, with a curious and analytical mind</p>
    </div>
    );
}

export default About;