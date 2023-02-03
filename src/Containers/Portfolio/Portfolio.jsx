import React from 'react'
import './Portfolio.css'
import { Project } from '../../components'
import { projects, responsive } from './imports'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// takes in constants data to generate project cards in the portfolio carousel for each given project
const projectCard = projects.map((item) => (
    <Project
    title={item.title}
    imageurl={item.imageurl}
    description={item.description}
    deployed={item.deployed}
    repository={item.repository}
    />
));
// fully functional carousel containing cards that link to other existing projects.
const Portfolio = () => {
    return (
        <div className='portfolio section-padding' id='Portfolio'>
            <h2 className='portfolio-heading'>Portfolio</h2>
            <Carousel showDots={true} responsive={responsive} infinite={true} containerClass='carousel-container'>
                {projectCard}
            </Carousel>
        </div>
    )
}

export default Portfolio


