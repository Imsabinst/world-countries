import React, { useState } from 'react'
import { HeaderContext } from '../../context/HeaderContext'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import './header.scss'

const Header = () => {
  const [toggleBars, setToggleBars] = useState(false)

  const handleToggleBars = () => {
    setToggleBars((click) => !click)
  }

  return (
    <header className="header">
      <HeaderContext.Provider value={(toggleBars, handleToggleBars)}>
        <div
          className={` ${
            toggleBars ? 'header__sidebar' : 'header__sidebarClose'
          }`}
        >
          <Sidebar />
        </div>
        <div
          className={` header__navbar ${
            toggleBars ? 'header__navbarMove' : ''
          }`}
        >
          <Navbar />
        </div>
      </HeaderContext.Provider>
    </header>
  )
}

export default Header
