import React from 'react'
import { Skills } from '../../components'
import './Resume.css'

const Resume = () => {
  return (
    <div className='resume-parent'>
      <div className="skills">
        <Skills />
      </div>
      <div className="resume-container">
        <div className="resume-header">
          <h3>Resume</h3>
        </div>
        <div className="resume-link">
          <a href="https://www.dropbox.com/s/b3zyvabwn708vtt/Daniel%20Brown%20Resume%202023.pdf?dl=1" target='_blank' rel='noreferrer' className="resume-download">Download</a>
        </div>
      </div>

    </div>
  )
}

export default Resume