import { combineReducers } from 'redux'
import adminReducer from './adminReducer'
import restaurantsReducer from './restaurantsReducer'
import userinfoReducer from './userInfoReducer'


const rootReducer = combineReducers({
  ///
  userInfo: userinfoReducer,
  admin: adminReducer,
  restaurents: restaurantsReducer
})

export default rootReducer
