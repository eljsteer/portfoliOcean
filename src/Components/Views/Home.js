import React from 'react';
import { AboutData } from '../contentData';
// import { Link } from "react-router-dom";

function Home() {
    return (
      <div id="HomeWrapper">
        <h1 className="moreSpace pageHeader">Welcome to my Portfolio</h1>
        <div className="aboutPhoto">
          <img src={process.env.PUBLIC_URL + "/" + AboutData.profilephoto } id="aboutPhoto" alt="devJS"></img>
        </div>
      </div>
    );
}

export default Home;