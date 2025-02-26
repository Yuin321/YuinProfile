import React from "react";
import './About.css';
import { IoBookOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { FaRegLightbulb } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { GiSelfLove } from "react-icons/gi";
import { RiContactsLine } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function About(){
    return(
        <div className="about-page">
            <div className={`about-intro about-sections`}>
                <div className="text-section">
                    <h1 className="visually-hidden">About Me</h1>
                    <div className="about-page-header">Get To Know More <span className="cyan-text">About Me</span></div>
                    <div>Hi, I'm <span className="cyan-text">Yuin!</span></div>
                    <div>
                        I'm a UI/UX designer and web developer passionate about crafting 
                        visually stunning, user-friendly experiences. My love for design 
                        started with creating PPTs, which led me to blend creativity 
                        with coding in my career.
                    </div>
                </div>
                <img src="/images/about-page.svg" alt="decoration-image" className="image"/>
            </div>
            <div className={`about-sections`}>
                <h2 className={`header-with-icon cyan-text`}>
                    <VscTools className={`header-icon`}/>
                    Skills and Tools
                </h2>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
                    <p style={{marginRight: '2rem'}}>My expertise spans across various tools and technologies, including:</p>
                    <ul className="skills-tools">
                        <li>
                            <strong>Tools:</strong>
                            <ul>
                                <li>Wireframing & Prototyping: Figma</li>
                                <li>Frontend Development: React, Vite</li>
                                <li>Version Control: Git, GitHub, GitLab</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Skills:</strong>
                            <ul>
                                <li>Frontend Development: HTML, CSS, Javascript</li>
                                <li>API Integration: Axios, REST APIs</li>
                                <li>UI/UX Design: Wireframing, Prototyping, User Research, Accessibility Design</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`about-sections`}>
                <h2 className={`header-with-icon cyan-text`}>
                    <IoBookOutline className={`header-icon`}/>
                    Education and Training
                </h2>
                <p>
                    I hold a Bachelor's degree in Computer Science from the <b>University 
                    of Wollongong</b>, with a focus on Cybersecurity and Big Data. This 
                    background has given me a solid foundation in both technical 
                    development and data analysis.
                </p>
            </div>
            <div className={`about-sections`}>
                <h2 className={`header-with-icon cyan-text`}>
                    <FaRegLightbulb className={`header-icon`}/>
                    My Approach
                </h2>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
                    <div style={{flex:1}}>
                        <b>Design Philosophy</b>
                        <p>
                            I believe that great design stems from understanding and 
                            aligning with client needs. By fostering clear communication, I 
                            ensure every project not only looks visually appealing but also 
                            functions seamlessly, delivering optimal user experiences.
                        </p>
                    </div>
                    <div style={{flex:1}}>
                        <b>Balancing Creativity and Functionality</b>
                        <p>
                            At the core of my design process is the balance between 
                            creativity and functionality. I work closely with clients to 
                            understand their vision and goals, blending innovation with 
                            practicality to create designs that are both aesthetically 
                            pleasing and user-friendly.
                        </p>
                    </div>
                </div>
            </div>
            <div className={`about-sections`}>
                <h2 className={`header-with-icon cyan-text`}>
                    <GoGoal className={`header-icon`}/>
                    Future Goals
                </h2>
                <p>
                    Looking ahead, my goal is to continue creating aesthetically 
                    pleasing, user-friendly, and feature-rich websites that cater to a 
                    diverse range of users. I'm eager to explore new technologies and 
                    design trends to enhance my skills and deliver better digital 
                    experiences. Additionally, I aspire to take on a leadership role in 
                    the future and manage a creative team, contributing to a company's 
                    success and growth.
                </p>
            </div>
            <div className={`about-sections`}>
                <h2 className={`header-with-icon cyan-text`}>
                    <GiSelfLove className={`header-icon`}/>
                    Personal Interest
                </h2>
                <p style={{marginBottom: '0.5rem'}}>
                    Beyond my professional work, I have a passion for personal projects and 
                    hobbies that keep my creative juices flowing:
                </p>
                <ul className="skills-tools">
                    <li style={{flex:1}}>
                        <b>Handbooks:</b> I enjoy documenting my life, from daily experiences to 
                        culinary adventures, in meticulously crafted handbooks.
                    </li>
                    <li style={{flex:1}}>
                        <b>Board Games:</b> I love engaging in board games that require strategic 
                        thinking and collaboration, which also enhance my problem-solving skills 
                        in a fun and interactive way.
                    </li>
                </ul>
            </div>
            <div className={`about-sections`}>
                <h2 className={`header-with-icon cyan-text`}>
                    <RiContactsLine className={`header-icon`}/>
                    Let's Connect
                </h2>
                <p>
                    I'm always excited to collaborate on new projects and bring 
                    innovative ideas to life. If you're looking for a designer and 
                    developer who can turn your vision into reality, let's get in touch!
                </p>
                <div className="contact-methods">
                    <a href="https://www.linkedin.com/in/xe-yuin-chong" target="_blank" rel="noopener noreferrer">
                        <img src="/images/linkedin.svg" alt="linkedin" className="contact-icon"/>                    
                    </a>
                    <a href="https://github.com/Yuin321" target="_blank" rel="noopener noreferrer">
                        <img src="/images/email.svg" alt="email" className="contact-icon"/>                    
                    </a>
                    <a href="mailto:yuin321@gmail.com">
                        <img src="/images/github.svg" alt="github" className="contact-icon" style={{backgroundColor:'white', borderRadius:'0.25rem'}}/>                    
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;