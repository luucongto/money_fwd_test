import { createSlice } from '@reduxjs/toolkit'

/* ------------- Initial State ------------- */
interface UserAccount {
  id: number
  name: string
  balance: number
}
export interface User {
  userId: number | null
  accounts: UserAccount[]
}

interface UserState {
  data: null | User
  error: null | string
  fetching: boolean
}

const initialState: UserState = {
  data: null,
  error: null,
  fetching: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userRequest: (state, action) => {
      state.fetching = true
      state.data = null
      state.error = null
    },
    userSuccess: (state, action) => {
      state.fetching = false
      state.data = action.payload
      state.error = null
    },
    userFailure: (state, action) => {
      state.fetching = false
      state.data = null
      state.error = action.payload
    },
    clear: (state) => {
      state.data = null
      state.error = null
      state.fetching = false
    },
    clearError: (state) => {
      state.error = null
    }
  }
})

// Action creators are generated for each case reducer function
export const { reducer, actions } = userSlice
