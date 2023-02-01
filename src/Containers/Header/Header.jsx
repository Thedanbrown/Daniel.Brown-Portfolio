import React from 'react'
import { Navigation } from '../../components'

const Header = () => {
  return (
    <div className='header-container section-padding' id='home'>
      <div className='nav-container'>
        <Navigation />
      </div>
    </div>
  )
}

export default Header