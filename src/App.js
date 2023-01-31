import React from 'react'
import './App.css'
import { BackgroundAnimation } from './components'
import { Header, AboutMe, Portfolio, Contact, Resume, Footer } from './Containers'

const App = () => {
    return (
        <div>
            <Header />
            <AboutMe />
            <Portfolio />
            <Contact />
            <Resume />
            <Footer />
            <BackgroundAnimation />
        </div>
    )
}

export default App