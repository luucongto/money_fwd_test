import React from 'react'
import AccountsSearch from '../../../views/accountsSearch/AccountsSearch'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn()
  })
}))

test('renders AccountsSearch without crashing', () => {
  const wrapperResult = shallow(
    <Provider store={store}>
      <AccountsSearch />
    </Provider>
  )
  expect(wrapperResult).toMatchSnapshot()
})

test('render AccountsSearch has Search Button', () => {
  render(
    <Provider store={store}>
      <AccountsSearch />
    </Provider>
  )
  const search = screen.getByText(/Search/i)
  expect(search).toBeInTheDocument()
  userEvent.click(search)
})
describe('AccountsSearch input', () => {
  let input: Element
  beforeEach(() => {
    render(
      <Provider store={store}>
        <AccountsSearch />
      </Provider>
    )
    input = screen.getByPlaceholderText(/Enter the userID/i)
  })

  test('render AccountsSearch has input', () => {
    expect(input).toBeInTheDocument()
    userEvent.type(input, '1')
  })

  test('render AccountsSearch has input with enter key', () => {
    userEvent.type(input, '1{enter}')
  })
})
