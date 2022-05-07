import React, { useContext } from 'react'

import { FaAffiliatetheme } from 'react-icons/fa'

import { ThemeContext } from '../../context/ThemeContext'
import { Cart } from '../cart'

import './navbar.scss'

const Navbar = () => {
  const { theme, switchTheme } = useContext(ThemeContext)

  return (
    <nav
      style={{ background: theme?.background, color: theme.color }}
      className={`navbar navbar-${theme}`}
    >
      <div className="navbar__toggle">
        <FaAffiliatetheme onClick={switchTheme} />
        <h2>Countries</h2>
      </div>
      <div className="navbar__cart">
        <Cart />
      </div>
    </nav>
  )
}

export default Navbar
