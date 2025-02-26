import React, {useState, useEffect, useRef} from "react";
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
        {
            title: "Yesterday Stories",
            image: "/images/yesterday_stories.png",
            description: "This was my final year project during my Bachelor's degree. As the team leader, I was responsible for understanding the client's needs through discussions, designing the UI/UX, and ensuring the team worked effectively towards a successful outcome.",
            links: {
              figma: "https://www.figma.com/design/H5X5NqUe9hBVsJ5Bx2zJmK/Yesterday-Stories?node-id=0-1&t=VnG148VuRWyea42c-1",
            },
          },     
    ];

    const workProjects = [
        {
            title: "MathsMarker",
            image: "/images/mathsmarker.com_.png",
            description: "A landing page that introduces MathsMarker, showcases our founders, captures user interest through a registration form, and includes a contact form popup for direct communication.",
            links: {
              website: "https://mathsmarker.com",
              figma: "https://www.figma.com/proto/Kp8hB6Xjgv3tmLqRjzBRqM/Maths-Maker-Landing-Page?page-id=0%3A1&node-id=1-2&p=f&viewport=279%2C422%2C0.07&t=OOLjB9107wZ8V00t-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2",
            },
          },
          {
            title: "Why Documentaries",
            image: "/images/culture_app.png",
            description: "This app is designed to help individuals with dementia connect with their cultural heritage by providing them with videos related to their country of origin, including traditional festivals, music, and other cultural content. Aimed primarily at Italian and Polish customers, the app aims to enhance emotional well-being and provide comfort through familiar, nostalgic content. Due to non-disclosure agreements, the app’s branding and logo are currently not publicly visible.",
            links: {
                figma: "https://www.figma.com/proto/FvRmTodfIjRKggeyVW7yOt/Ipad?node-id=12-8&t=LtM4ChYOVYXB6T5Y-1"
            }
          }
    ]

    const [selectedProject, setSelectedProject] = useState(null);
    const popupRef = useRef();
    const showPopup = (project) => {
        setSelectedProject(project);
    };

    const closePopup = () => {
        setSelectedProject(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (popupRef.current && !popupRef.current.contains(event.target)) {
            closePopup();
          }
        };
    
        // Add event listener
        document.addEventListener('mousedown', handleClickOutside);
    
        // Clean up the event listener on component unmount
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return(
        <div className="portfolio-page">
            <div className="portfolio-intro">
                <h1 className={`portfolio-header`} style={{marginBottom: '1rem'}}>My <span className="cyan-text">Portfolio</span></h1>
                <p>
                    Welcome to my portfolio! Here, you can explore a selection of my 
                    <span className="cyan-text"> personal and work projects</span> that 
                    showcase my skills in <span className="cyan-text">UI/UX design </span> 
                    and <span className="cyan-text">web development</span>. I am constantly updating this page as I 
                    complete new projects, so feel free to check back for updates!
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
                            <p className="project-description">
                                {project.description.length > 50
                                ? `${project.description.slice(0, 50)}...`
                                : project.description}
                            </p>
                            <a
                                href="javascript:void(0);"
                                className="read-more"
                                onClick={() => showPopup(project)}
                            >
                                {project.description.length > 50 ? 'Read more...' : ''}
                            </a>
                            <div className="project-links">
                                {project.links.website && <a href={project.links.website} target="_blank" className="project-btn">Website</a>}
                                {project.links.figma && <a href={project.links.figma} target="_blank" className="project-btn">Figma</a>}
                                {project.links.github && <a href={project.links.github} target="_blank" className="project-btn">GitHub</a>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="section-divider"></div>
            <div className="projects-display">
                <div style={{display:'flex', flexDirection: 'column', alignItems:'flex-end', marginBottom:'1rem'}}>
                    <h2 className={`portfolio-header`}>Work Projects</h2>
                    <hr/>
                </div>
                <p>
                    Here are some of the <span className="cyan-text">professional </span> 
                    projects I have completed as part of my work experience. 
                    These projects showcase my ability to 
                    <span className="cyan-text"> collaborate with clients and teams</span>
                    , while delivering <span className="cyan-text">functional, 
                    user-centric, and visually appealing solutions</span>. I bring 
                    <span className="cyan-text"> creativity and practicality </span> 
                    together to solve real-world problems.
                </p>
                <div className="project-card-container">
                    {workProjects.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">
                                {project.description.length > 50
                                ? `${project.description.slice(0, 50)}...`
                                : project.description}
                            </p>
                            <a
                                href="javascript:void(0);"
                                className="read-more"
                                onClick={() => showPopup(project)}
                            >
                                {project.description.length > 50 ? 'Read more...' : ''}
                            </a>
                            <div className="project-links">
                                {project.links.website && <a href={project.links.website} target="_blank" className="project-btn">Website</a>}
                                {project.links.figma && <a href={project.links.figma} target="_blank" className="project-btn">Figma</a>}
                                {project.links.github && <a href={project.links.github} target="_blank" className="project-btn">GitHub</a>}
                            </div>
                        </div>
                    ))}
                </div>
                {selectedProject && (
                    <div className="popup">
                        <div className="popup-content" ref={popupRef}>
                            <img src={selectedProject.image} alt={selectedProject.title} className="project-image" />
                            <h3 className="project-title">{selectedProject.title}</h3>
                            <p className="project-description">{selectedProject.description}</p>
                            <div className="project-links">
                                {selectedProject.links.website && <a href={selectedProject.links.website} target="_blank" className="project-btn">Website</a>}
                                {selectedProject.links.figma && <a href={selectedProject.links.figma} target="_blank" className="project-btn">Figma</a>}
                                {selectedProject.links.github && <a href={selectedProject.links.github} target="_blank" className="project-btn">GitHub</a>}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Portfolio;