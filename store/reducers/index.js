import counter from './counter'
import login from './login'
import { combineReducers } from 'redux'

export default combineReducers({
  counter,
  login,
})
