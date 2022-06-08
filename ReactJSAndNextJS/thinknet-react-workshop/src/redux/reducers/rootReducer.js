import counterReducer from './counterReducer'
import {combineReducers} from 'redux'
import usernameReducer from './usernameReducer'
import questionReducer from './questionReducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  user: usernameReducer,
  question: questionReducer,
})

export default rootReducer