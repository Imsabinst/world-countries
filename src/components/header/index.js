import React, { useState } from 'react'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import './header.scss'

const Header = () => {
  const [toggleBars, setToggleBars] = useState(true)

  const handleToggleBars = () => {
    setToggleBars((click) => !click)
  }

  return (
    <header className="header">
      <div className={`header__sidebar ${toggleBars ? 'header__close' : ''}`}>
        <Sidebar onClick={handleToggleBars} toggle={toggleBars} />
      </div>
      <div className="header__navbar">
        <Navbar onClick={handleToggleBars} toggle={toggleBars} />
      </div>
    </header>
  )
}

export default Header
