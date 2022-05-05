import React, { useContext } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { HeaderContext } from '../../context/HeaderContext'
import './sidebar.scss'

const Sidebar = () => {
  const value = useContext(HeaderContext)

  return (
    <div className="sidebar">
      <h2>Switch Themes</h2>
      <div className="sidebar__left">
        <AiOutlineLeft onClick={value} />
      </div>
    </div>
  )
}

export default Sidebar
