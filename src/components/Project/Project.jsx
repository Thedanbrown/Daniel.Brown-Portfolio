import React from 'react'
import './Project.css'


const Project = (props) => {
  console.log(props)
  return (
    <div className='project-container'>
      <div className='project-content'>
        <div className='project-title'>
          <h3>{props.title}</h3>
        </div>
        <div className='project-image'>
          <img src={props.imageurl} alt='project screenshot' />
        </div>
        <div className='project-list'>
          
            <p>{props.description}</p>
            <p><a href={props.deployed} className='project-link'>Deployement</a></p>
            <p><a href={props.repository} className='project-link'>Repository</a></p>
          
        </div>
      </div>
    </div>
  )
}

export default Project