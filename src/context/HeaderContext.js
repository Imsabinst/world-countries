import React, { useState } from 'react'

//export const HeaderContext = createContext(null)
const HeaderContext = React.createContext(false)

const ToggleProvider = ({ children }) => {
  const [toggleBars, setToggleBars] = useState(false)

  const handleToggleBars = () => {
    setToggleBars((toggleBars) => !toggleBars)
  }

  return (
    <HeaderContext.Provider value={{ toggleBars, handleToggleBars }}>
      {children}
    </HeaderContext.Provider>
  )
}
export { HeaderContext, ToggleProvider }
