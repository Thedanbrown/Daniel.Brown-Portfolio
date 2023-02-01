import React from 'react'
import './Project.css'


const Project = ({ title, description, image, deployed, repository }) => {
  return (
    <div className='project-container'>
      <div className='project-content'>
        <div className='project-title'>
          <h3>{title}</h3>
        </div>
        <div className='project-image'>
          <img src={image} alt='project screenshot' />
        </div>
        <div className='project-list'>
          
            <p>{description}</p>
            <p><a href={deployed}>Deployement</a></p>
            <p><a href={repository}>Repository</a></p>
          
        </div>
      </div>
    </div>
  )
}

export default Project