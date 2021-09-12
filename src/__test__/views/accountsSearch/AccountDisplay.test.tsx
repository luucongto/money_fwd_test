import { mount, ReactWrapper } from 'enzyme'
import React from 'react'
import { useAlert } from 'react-alert'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import createSagaMiddleware from 'redux-saga'
import AccountDisplay from '../../../views/accountsSearch/AccountDisplay'

const sagaMiddleware = createSagaMiddleware()
const mockStore = configureStore([sagaMiddleware])

jest.mock('react-alert', () => ({
  ...jest.requireActual('react-alert'),
  useAlert: () => ({
    show: jest.fn()
  })
}))

describe('AccountDisplay display user accounts', () => {
  let wrapperResult: ReactWrapper
  let store: any
  beforeEach(() => {
    const initState = {
      user: {
        error: null,
        fetching: false,
        data: null
      }
    }

    store = mockStore(initState)
    wrapperResult = mount(
      <Provider store={store}>
        <AccountDisplay match={{ params: { userId: 1 } }} />
      </Provider>
    )
  })

  test('renders AccountDisplay without crashing', () => {
    expect(wrapperResult).toMatchSnapshot()
    expect(wrapperResult.text().includes('UserId: 1')).toBe(true)
  })
})

describe('AccountDisplay display user', () => {
  let wrapperResult: ReactWrapper
  let store: any
  beforeEach(() => {
    const initState = {
      user: {
        error: 'User Not Found',
        fetching: false,
        data: null
      }
    }

    store = mockStore(initState)
    wrapperResult = mount(
      <Provider store={store}>
        <AccountDisplay />
      </Provider>
    )
  })

  test('renders AccountDisplay without error', () => {
    expect(store.getActions().length).toEqual(2)
    expect(store.getActions()[1].type).toEqual('user/clearError')
  })
})
