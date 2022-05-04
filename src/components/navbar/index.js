import React from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'

import './navbar.scss'

const Navbar = ({ onClick, toggle }) => {
  return (
    <nav className={`navbar ${toggle ? 'close_navbar' : ''}`}>
      <GiHamburgerMenu onClick={onClick} />
      <div className="navbar__Text">
        <h1>Countries</h1>
      </div>
    </nav>
  )
}

export default Navbar
