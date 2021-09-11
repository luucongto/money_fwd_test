import 'react-app-polyfill/ie11' // For IE 11 support
import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import store from './redux/store'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
// optional configuration
const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '60px',
  transition: transitions.SCALE
}
ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
)
