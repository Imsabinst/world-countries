import React from 'react'

import { AiOutlineLeft } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HeaderContext } from '../../context/HeaderContext'
import Button from '../button/Button'

import './header.scss'

const Header = () => {
  const { toggleBars, handleToggleBars } = React.useContext(HeaderContext)
  //const { theme, switchTheme } = useContext(ThemeContext)

  return (
    <header className="header">
      <div
        className={` ${
          toggleBars ? 'header__sidebar' : 'header__sidebarClose'
        }`}
      >
        <h2>Switch Themes</h2>
        <AiOutlineLeft
          onClick={handleToggleBars}
          className="header__sideClose"
        />
        <div className="header__sidebar__themes">
          {/*  <button
            style={{ background: theme?.background }}
            onClick={switchTheme}
          >
            Change Themes
          </button> */}
          <Button />
        </div>
      </div>
      {/* <div className="sidebar__themes">
        <button onClick={toggleFunction}>Light Mode</button>
        {toggle ? 'dark' : 'Light'}
      </div> */}

      <div
        className={` header__navbar ${toggleBars ? 'header__navbarClose' : ''}`}
      >
        <GiHamburgerMenu onClick={handleToggleBars} className="header__menu" />
        <h2>Countries</h2>
      </div>
    </header>
  )
}

export default Header
