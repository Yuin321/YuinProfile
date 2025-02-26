import React from "react";
import './Resume.css';

function Resume(){
    return(
        <div className="resume-page">
            <h1 style={{fontFamily:'Montserrat'}}>My Resume</h1>
            <p style={{fontFamily: 'Roboto'}}>For more details about my <span className="cyan-text">professional experience</span> and <span className="cyan-text">skills</span>, please feel free to view and download my resume below.</p>
            <iframe src="/Resume.pdf" width="100%" height="600px" title="Resume"></iframe>
        </div>

    )
}

export default Resume;