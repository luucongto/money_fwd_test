import React from 'react'
import TheSidebar from '../../containers/TheSidebar'
import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme'
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
test('renders TheSidebar without crashing', () => {
  const wrapperResult = shallow(
    <Provider store={store}>
      <TheSidebar />
    </Provider>
  )
  expect(wrapperResult).toMatchSnapshot()
})
