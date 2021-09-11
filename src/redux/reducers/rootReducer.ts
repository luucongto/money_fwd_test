import { combineReducers } from 'redux'
import { reducer as userReducer } from './user'
import sidebarReducer from './sidebar'
const rootReducer = combineReducers({
  user: userReducer,
  sidebar: sidebarReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
