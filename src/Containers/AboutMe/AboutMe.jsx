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
        <p>Georgia Institute of Technology Full Stack Web Development Bootcamp graduate offering the strategic thinking, planning, time and business management skills honed from 10+ years of experience as an Executive Chef.</p>
        </div>
      </div>
      <BackgroundAnimation />
    </div>
  )
}

export default AboutMe