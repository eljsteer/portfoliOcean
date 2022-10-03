import React from 'react';
import { HomeData } from '../contentData';

function Home() {
    return (
    <div className="moreSpace" >
        <h3 className="moreSpace">Software Developer</h3>
        <p>{HomeData.theAllure}</p>
    </div>
    );
}

export default Home;