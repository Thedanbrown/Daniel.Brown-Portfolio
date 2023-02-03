import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navigation.css';


const Menu = () => {
    const [activePage, setActivePage] = useState('about');
    return (
    <>
    <p className={`about ${activePage==='about' && 'active'}`}><a href='#AboutMe' onClick={() => setActivePage('about')}>About Me</a></p>
    <p className={`port ${activePage==='port' && 'active'}`}><a href='#Portfolio' onClick={() => setActivePage('port')}>Portfolio</a></p>
    <p className={`contact ${activePage==='contact' && 'active'}`}><a href='#Contact' onClick={() => setActivePage('contact')}>Contact</a></p>
    <p className={`resume ${activePage==='resume' && 'active'}`}><a href='#Resume' onClick={() => setActivePage('resume')}>Resume</a></p>
    </>
)}

const Navigation = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="portfolio-navbar">
            <div className="portfolio-navbar-links">
                <div className="portfolio-navbar-links_logo">
                    <a href='#AboutMe'><img src='./images/onikumalogo.png' alt='home logo'/></a>
                </div>
                <div className="portfolio-navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="portfolio-navbar-menu">
                {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
            <div className="portfolio-navbar-menu_container scale-up-center">
                <div className="portfolio-navbar-menu_container-links">
                    <Menu />
                </div>
            </div>
            )}
            </div>
        </div>
    );
}

export default Navigation