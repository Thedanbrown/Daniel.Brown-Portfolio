import React from 'react'
import { BackgroundAnimation } from '../../components'
import './AboutMe.css'
// component for the about me section. contains picture short bio and an svg background animation component
const AboutMe = () => {
  return (
    <div className='about-container' id='AboutMe'>
      <div className='about-bio'>
        <img className='profileImg' alt='' src='./images/dan.jpg' />
        <div className='aboutTxt'>
        <h2 className='gradient__text'>Daniel.M.Brown</h2>
        <p>Former executive chef turned fullstack web development bootcamp graduate with a passion for technology and a desire to learn. Proven ability to apply attention to detail, adaptability and problem-solving skills to web development projects. Confident in designing and building high-quality web applications.</p>
        </div>
      </div>
      <BackgroundAnimation />
    </div>
  )
}

export default AboutMe