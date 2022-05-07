import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const Button = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div>
      <button style={{ background: theme?.background, color: theme.color }}>
        Change Themes
      </button>
    </div>
  )
}

export default Button
