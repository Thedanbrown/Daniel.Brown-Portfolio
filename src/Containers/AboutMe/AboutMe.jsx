import React from 'react'
import profileIMG from '../../Assets/dan.jpg'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className='about-container' id='aboutMe'>
      <div className='about-bio'>
        <img className='profileImg' alt='' src={profileIMG} />
        <div className='aboutTxt'>
        <h2 className='gradient__text'>Daniel.M.Brown</h2>
        <p>Former executive chef turned fullstack web development bootcamp graduate with a passion for technology and a desire to learn. Proven ability to apply attention to detail, adaptability and problem-solving skills to web development projects. Confident in designing and building high-quality web applications.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe