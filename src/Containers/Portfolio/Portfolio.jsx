import React from 'react'
import './Portfolio.css'
import { Project } from '../../components'
import { Project1, Project2, Project3, Project4, Project5, Project6, aiart, comiccase, IDCWDYW, modernui, ReadmeGen, tdbtube } from './imports'

const Portfolio = () => {
    return (
        <div className='portfolio section-padding' id='Portfolio'>
            <div className='portfolio-heading'>
                <h2>Portfolio</h2>
            </div>
            <div className='project-container'>
                <Project title={Project1.title} image={aiart} description={Project1.description} deployed={Project1.deployed} repository={Project1.repository} />
                <Project title={Project2.title} image={tdbtube} description={Project2.description} deployed={Project2.deployed} repository={Project2.repository} />
                <Project title={Project3.title} image={modernui} description={Project3.description} deployed={Project3.deployed} repository={Project3.repository} />
                <Project title={Project4.title} image={comiccase} description={Project4.description} deployed={Project4.deployed} repository={Project4.repository} />
                <Project title={Project5.title} image={IDCWDYW} description={Project5.description} deployed={Project5.deployed} repository={Project5.repository} />
                <Project title={Project6.title} image={ReadmeGen} description={Project6.description} deployed={Project6.deployed} repository={Project6.repository} />
            </div>
        </div>
    )
}

export default Portfolio