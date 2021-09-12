import React from 'react'
import userEvent from '@testing-library/user-event'
import TheHeader from '../../containers/TheHeader'
import { mount, ReactWrapper } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
// Before your test, do next setting
const middlewares = [] // If you are not using any middleware, leave the array empty or import it and put it in
const mockStore = configureStore(middlewares) // Setting of store based on the middlewares.
// Create the store to pass as prop in the <Provider>

describe('AccountDisplay display user', () => {
  let wrapperResult: ReactWrapper
  let store: any
  beforeEach(() => {
    const initState = {
      sidebar: {
        sidebarShow: 'responsive'
      }
    }

    store = mockStore(initState)
    wrapperResult = mount(
      <Provider store={store}>
        <TheHeader />
      </Provider>
    )
  })

  test('renders TheHeader without crashing', () => {
    expect(wrapperResult).toMatchSnapshot()
  })

  test('renders Account Management header', () => {
    expect(wrapperResult.text().includes('Account Management')).toBe(true)
  })

  test('toogleSidebar on header', () => {
    wrapperResult.find('.c-header-toggler').simulate('click')
    expect(store.getActions()).toEqual([{ type: 'sidebar/set', payload: false }])
  })
})
