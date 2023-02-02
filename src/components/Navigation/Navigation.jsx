import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navigation.css';


const Menu = () => (
    <>
    <p><a href='#AboutMe'>About Me</a></p>
    <p><a href='#Portfolio'>Portfolio</a></p>
    <p><a href='#Contact'>Contact</a></p>
    <p><a href='#Resume'>Resume</a></p>
    </>
)

const Navigation = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="portfolio-navbar">
            <div className="portfolio-navbar-links">
                <div className="portfolio-navbar-links_logo">
                    <a href='#home'><img src='/images/onikumalogo.png' alt='home logo'/></a>
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