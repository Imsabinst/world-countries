import React from 'react'
import ReactDOM from 'react-dom'
//import { Provider } from 'react-redux'
//import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'

import App from './App'
import { ToggleProvider } from './context/HeaderContext'
import { themes } from './types'
import { ThemeContext } from './context/ThemeContext'
//import store from './redux/store'

/* const WithProvider = () => (
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(<WithProvider />, document.getElementById('root')) */
const [context, setContext] = React.useState({
  theme: themes.light,
  switchTheme: () => {
    setContext((current) => ({
      ...current,
      theme: current.theme === themes.light ? themes.dark : themes.light,
    }))
  },
})

ReactDOM.render(
  <ThemeContext.Provider value={context}>
    <ToggleProvider>
      <App />
    </ToggleProvider>
  </ThemeContext.Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister()
