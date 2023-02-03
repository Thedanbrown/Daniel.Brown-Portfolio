import React from 'react'
import './App.css'
import { Header, AboutMe, Portfolio, Contact, Resume, Footer } from './Containers'

const App = () => {
    return (
        <div>
            <div className='App'>
                <div className='gradient__text'>
                    <Header />
                </div>
            <div className='everythingElse'>
                <AboutMe />
                <Portfolio />
                <Contact />
                <Resume />
                <Footer />
            </div>
                
            </div>
        </div>
    )
}

export default App