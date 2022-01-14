import { combineReducers } from 'redux'
import userinfoReducer from './userInfoReducer'


const rootReducer = combineReducers({
  userInfo: userinfoReducer,

})

export default rootReducer
