import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducer/rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import initState from './initState'


const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk)))

export default store
