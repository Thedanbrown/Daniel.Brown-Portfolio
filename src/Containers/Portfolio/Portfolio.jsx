import React from 'react'
import './Portfolio.css'
import { Project } from '../../components'
import { projects, responsive } from './imports'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const projectCard = projects.map((item) => (
    <Project
    title={item.title}
    imageurl={item.imageurl}
    description={item.description}
    deployed={item.deployed}
    repository={item.repository}
    />
));

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


