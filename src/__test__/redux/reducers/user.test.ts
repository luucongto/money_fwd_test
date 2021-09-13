import {reducer, actions, UserState } from '../../../redux/reducers/user'

const initialState = {
  data: null,
    error: null,
    fetching: false}
test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState
)
})

test('should handle userRequest', () => {
  const previousState = initialState

  expect(reducer(previousState, actions.userRequest({userId: 1}))).toEqual({
      data: null,
      error: null,
      fetching: true
  })
})

test('should handle userSuccess', () => {
  const previousState = {
    data: null,
    error: null,
    fetching: true
  }
  expect(reducer(previousState, actions.userSuccess({ userId: 1, accounts: [] }))).toEqual({
    data: { userId: 1, accounts: [] },
    error: null,
    fetching: false
  })
})


test('should handle userFailure', () => {
  const previousState = {
    data: null,
    error: null,
    fetching: true
  }
  expect(
    reducer(previousState, actions.userFailure('user_not_found'))
  ).toEqual({
    data:null,
    error: 'user_not_found',
    fetching: false
  })
})


test('should handle clear', () => {
  const previousState: UserState = {
    data: {
      userId: 1,
      accounts: []
    },
    error: null,
    fetching: false
  }
  expect(reducer(previousState, actions.clear())).toEqual(
    initialState
  )
})

test('should handle clearError', () => {
  const previousState = {
    data: null,
    error: 'user_not_found',
    fetching: false
  }
  expect(reducer(previousState, actions.clearError())).toEqual(
    initialState
  )
})


