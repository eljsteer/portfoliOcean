import React from 'react';
import { HomeData } from '../contentData';

function Home() {
    return (
    <div>
        <h3 className="moreSpace pageHeader">Software Developer</h3>
        <img id="homeImg" src={process.env.PUBLIC_URL + HomeData.animation} alt=""/>
    </div>
    );
}

export default Home;