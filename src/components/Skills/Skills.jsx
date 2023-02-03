import React from 'react'
import './Skills.css'
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from 'react-icons/io'
import { SiMysql, SiMongodb, SiReact, SiExpress, SiBootstrap, SiBulma } from 'react-icons/si'
import { FaNode } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
// skill component using React Icons to showcase skillset
const Skills = () => {
    return (
        <div className='skills-parent' id='Resume'>
            <div className="skills-container">
                <div className="skills-heading">
                    <h3>Skills</h3>
                </div>
                <div className="skills-icons">
                    <div className='icon-box'><IconContext.Provider value={{ color: 'blue', size: 72}} ><IoLogoCss3 /></IconContext.Provider>CSS</div>
                    <div className='icon-box'><IconContext.Provider value={{ color: 'orange', size: 72}} ><IoLogoHtml5 /></IconContext.Provider>HTML</div>
                    <div className='icon-box'><IconContext.Provider value={{ color: 'yellow', size: 72}} ><IoLogoJavascript /></IconContext.Provider>JavaScript</div>
                    <div className='icon-box'><IconContext.Provider value={{ color: 'lightpurple', size: 72}} ><SiBootstrap /></IconContext.Provider>Bootstrap</div>
                    <div className='icon-box'><IconContext.Provider value={{ color: 'lightgreen', size: 72}} ><SiBulma /></IconContext.Provider>Bulma</div>
                    <div className='icon-box'><IconContext.Provider value={{ color: 'white', size: 72}} ><SiExpress /></IconContext.Provider>Express</div>
                    <div className='icon-box'><IconContext.Provider value={{ color: 'green', size: 72}} ><SiMongodb /></IconContext.Provider>MongoDB</div>
                    <div className='icon-box'><IconContext.Provider value={{ color: 'white', size: 72}} ><SiMysql /></IconContext.Provider>Mysql</div>
                    <div className='icon-box'><IconContext.Provider value={{ color: 'lightblue', size: 72}} ><SiReact /></IconContext.Provider>REACT</div>
                    <div className='icon-box'><IconContext.Provider value={{ color: 'darkgreen', size: 72}} ><FaNode /></IconContext.Provider>NODE</div>
                </div>
            </div>
        </div>
    )
}

export default Skills