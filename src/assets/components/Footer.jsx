import React from "react";
import './Footer.css';

function Footer(){
    return(
        <div className="footer">
            <img src="/images/Yuin-dark.svg" alt="logo-light"/>
            <div className="contact-methods">
                <a href="https://www.linkedin.com/in/xe-yuin-chong" target="_blank" rel="noopener noreferrer">
                    <img src="/images/linkedin.svg" alt="linkedin" className="contact-icon"/>                    
                </a>
                <a href="https://github.com/Yuin321" target="_blank" rel="noopener noreferrer">
                    <img src="/images/email.svg" alt="email" className="contact-icon"/>                    
                </a>
                <a href="mailto:yuin321@gmail.com">
                    <img src="/images/github.svg" alt="github" className="contact-icon"/>                    
                </a>
            </div>
        </div>
    )
}

export default Footer;