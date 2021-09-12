import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
// Before your test, do next setting
const middlewares = [] // If you are not using any middleware, leave the array empty or import it and put it in
const mockStore = configureStore(middlewares) // Setting of store based on the middlewares.
const initState = {
  sidebar: {
    sidebarShow: 'responsive'
  }
}
// Create the store to pass as prop in the <Provider>
const store = mockStore(initState)

test('renders Account Management header', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const header = screen.getByText(/Account Management/i)
  expect(header).toBeInTheDocument()
})
