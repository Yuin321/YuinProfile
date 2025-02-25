import React, {useState, useRef, useEffect} from 'react';
import logo from '/images/Yuin-light.svg';
import './Header.css'
import { FiMenu, FiX } from "react-icons/fi";
function Header(){
    const menuRef = useRef(null);
    const pages = ['Home', 'About Me', 'Portfolio', 'Skills', 'Resume'];
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
        };

        if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        } else {
        document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);
    return(
        <div className='header'>
            <img src={logo} alt='logo with light text'/>
            
            <nav  ref={menuRef} className={`navigation ${isOpen ? "open" : ""}`}>
                <ul className="nav-list">
                {pages.map((page) => (
                    <li key={page} className="nav-item" onClick={toggleMenu}>
                    <a href={`#${page.toLowerCase()}`} className="nav-link">
                        {page}
                    </a>
                    </li>
                ))}
                </ul>
            </nav>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <button className="menu-button" onClick={toggleMenu}>
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
                <button className='contact-button'>Contact</button>
            </div>
            
        </div>            
    )
}

export default Header;