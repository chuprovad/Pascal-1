import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {initState} from "./initState/initState";
import rootReducer from "./reducers/root.reducer";



const store = createStore(rootReducer, initState(), composeWithDevTools(applyMiddleware(thunk)))

export default store
