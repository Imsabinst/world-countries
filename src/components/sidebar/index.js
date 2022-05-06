import React, { useContext } from 'react'

import { AiOutlineLeft } from 'react-icons/ai'
import { HeaderContext } from '../../context/HeaderContext'
import { ThemeContext } from '../../context/ThemeContext'

import './sidebar.scss'

const Sidebar = () => {
  //const value = useContext(HeaderContext)
  const { handleToggleBars } = React.useContext(HeaderContext)

  const { theme, switchTheme } = useContext(ThemeContext)
  return (
    <div className="sidebar">
      <h2>Switch Themes</h2>
      <div className="sidebar__left">
        <AiOutlineLeft onClick={handleToggleBars} />
      </div>
      <div className="sidebar__themes">
        <button style={{ color: theme?.background }} onClick={switchTheme}>
          Switch Theme
        </button>
      </div>
    </div>
  )
}

export default Sidebar
