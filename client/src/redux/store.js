import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
// import {rootReducer} from './reducers/root.reducer'
import { composeWithDevTools } from "redux-devtools-extension";



/* export const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer
}) */ // пример использования combineReducers - в аргументах объекты где ключ - срез, значение - редьюсер

const initialState = {
          //slice - срез состояний
}


export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
