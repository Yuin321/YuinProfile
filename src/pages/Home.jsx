import React from "react";
import './Home.css';

function Home(){
    return(
        <div className="homepage">
            <div className="intro">
                <div style={{fontSize:'2rem', marginBottom:'1rem'}}>
                Hey there, I'm <span className="cyan-text"><b>Yuin!</b></span> 
                — a creative <span className="cyan-text">UI/UX designer</span> and <span className="cyan-text">web developer</span>.
                </div>
                <div style={{marginBottom: '1rem'}}>
                I craft sleek interfaces and code elegant solutions, blending design and technology to create intuitive digital experiences.
                </div>
                <div style={{marginBottom: '1rem'}}>
                Passionate about pixel-perfect design and user-centered experiences, I'm always exploring new trends and pushing boundaries.
                </div>
                <div style={{marginBottom: '1rem'}}>
                Let's <span className="cyan-text">collaborate</span> on your next project and bring your vision to life!
                </div>
                <div style={{display: 'flex', alignItems:'center'}}>
                    <img src="/images/curly-down-arrow.svg" alt="purple arrow" style={{marginRight:'1rem'}}/>
                    <button className='contact-button'>
                        <a href="mailto:yuin321@gmail.com" className="email-link">Contact Me</a>
                    </button>
                </div>
            </div>
            <img src="/images/yuin-portrait.svg" alt="Yuin's portrait" className="large-image"/>
        </div>
    )
}

export default Home;