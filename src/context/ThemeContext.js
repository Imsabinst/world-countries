import React from 'react'

import { themes } from '../types'

// Context has been created
export const ThemeContext = React.createContext({
  theme: themes.light,
  switchTheme: () => {},
})
