import ReservedReducer from './ReservedReducer'
import {combineReducers} from 'redux'
import usernameReducer from './usernameReducer'

const rootReducer = combineReducers({
  user: usernameReducer,
  showtime: ReservedReducer,
})

export default rootReducer