import React from 'react'
import './App.css'
import { BackgroundAnimation } from './components'
import { Header, AboutMe, Portfolio, Contact, Resume, Footer } from './Containers'

const App = () => {
    return (
        <div>
            <div className='App'>
                <div className='gradient__text'>
                    <Header />
                </div>
            
                <div className='aboutSection'>
                    <AboutMe />
                    <BackgroundAnimation />
                </div>
                <Portfolio />
                <Contact />
                <Resume />
                <Footer />
            </div>
        </div>
    )
}

export default App