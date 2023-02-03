import React from 'react'
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-icons-container">
        <div className='icon-box'><a href='https://github.com/Thedanbrown' target='_blank' rel='noreferrer'><IconContext.Provider value={{ color: 'grey', size: 72}} ><FaGithubSquare/></IconContext.Provider></a></div>
        <div className='icon-box'><a href='https://www.linkedin.com/in/the-danbrown/' target='_blank' rel='noreferrer'><IconContext.Provider value={{ color: 'grey', size: 72}} ><FaLinkedin/></IconContext.Provider></a></div>
        <div className='icon-box'><a href='https://www.instagram.com/danclerksbrown/' target='_blank' rel='noreferrer'><IconContext.Provider value={{ color: 'grey', size: 72}} ><FaInstagramSquare/></IconContext.Provider></a></div>
      </div>
    </div>
  )
}

export default Footer