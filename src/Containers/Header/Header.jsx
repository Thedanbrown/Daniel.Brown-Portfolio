import React from 'react'
import { Navigation } from '../../components'
// header that contains the navbar component
const Header = () => {
  return (
    <div className='header-container section-padding'>
      <div className='nav-container'>
        <Navigation />
      </div>
    </div>
  )
}

export default Header