import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import './sidebar.scss'

const Sidebar = ({ onClick, toggle }) => {
  return (
    <div className="sidebar">
      <h2>Switch Themes</h2>
      <div className="sidebar__close">
        <AiOutlineLeft onClick={onClick} />
      </div>

      <div className="sidebar__toggle">{toggle && 'Toggle Clicked'}</div>
    </div>
  )
}

export default Sidebar
