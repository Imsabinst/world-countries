import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
const { theme, switchTheme } = useContext(ThemeContext)

const Button = () => {
  return (
    <div>
      <button style={{ background: theme?.background }} onClick={switchTheme}>
        Change Themes
      </button>
    </div>
  )
}

export default Button
