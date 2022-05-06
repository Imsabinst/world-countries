import React, { useContext } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { HeaderContext } from '../../context/HeaderContext'

//import './navbar.scss'

const Navbar = () => {
  const value = useContext(HeaderContext)

  return (
    <nav className="navbar">
      <GiHamburgerMenu onClick={value} />
      <div className="navbar__Text">
        <h1>Countries</h1>
      </div>
    </nav>
  )
}

export default Navbar
