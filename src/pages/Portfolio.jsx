import React from "react";
import './Portfolio.css';

function Portfolio(){

    const personalProjects = [
        {
          title: "My Portfolio",
          image: "/images/portfolio-screenshot.png",
          description: "A showcase of my work, skills, and experience. You're currently viewing this portfolio!",
          links: {
            figma: "https://www.figma.com/design/TVeLi4DdBsYRiCMzvGPt7L/My-webpage?node-id=0-1&t=eJRGTxOEAEetccEW-1",
            github: "https://github.com/yuin321/YuinProfile",
          },
        },
        
    ];

    const workProjects = [
        {
            title: "MathsMarker",
            image: "/images/logo-black-text.svg",
            description: "An education platform for interactive math worksheets.",
            links: {
              website: "https://mathsmarker.com",
              figma: "https://figma.com/example2",
            },
          },
    ]

    return(
        <div className="portfolio-page">
            <div className="portfolio-intro">
                <h1 className={`portfolio-header`} style={{marginBottom: '1rem'}}>My <span className="cyan-text">Portfolio</span></h1>
                <p>
                    Welcome to my portfolio! Here, you can explore a selection of my 
                    <span className="cyan-text">personal and work projects</span> that 
                    showcase my skills in <span className="cyan-text">UI/UX design</span> 
                    and <span className="cyan-text">web development</span>. I am constantly updating this page as I 
                    complete new projects, so feel free to check back for updates.
                </p>
            </div>
            <div className="section-divider"></div>
            <div className="projects-display">
                <div style={{display:'flex', flexDirection: 'column', alignItems:'flex-end', marginBottom:'1rem'}}>
                    <h2 className={`portfolio-header`}>Personal Projects</h2>
                    <hr/>
                </div>
                <p>
                    In this section, I highlight projects that I have worked on in my 
                    own time. These projects reflect my <span className="cyan-text">personal 
                    interests, creative exploration, and passion for technology</span>. I often use 
                    these projects as opportunities to experiment with new tools, techniques, and 
                    design concepts.
                </p>
                <div className="project-card-container">
                    {personalProjects.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-links">
                            {project.links.website && <a href={project.links.website} target="_blank" className="project-btn">Website</a>}
                            {project.links.figma && <a href={project.links.figma} target="_blank" className="project-btn">Figma</a>}
                            {project.links.github && <a href={project.links.github} target="_blank" className="project-btn">GitHub</a>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;