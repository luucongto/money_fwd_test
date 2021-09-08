import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
interface SidebarStatus {
  sidebarShow: boolean | '' | 'responsive' | undefined
}

const initialState: SidebarStatus = {
  sidebarShow: 'responsive'
}
export const sidebar = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    set: (state, action) => {
      state.sidebarShow = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { set } = sidebar.actions
export const selectSidebarShow = (
  state: RootState
): boolean | '' | 'responsive' | undefined => state.sidebar.sidebarShow

export default sidebar.reducer
