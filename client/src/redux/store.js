import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from './reducers/root.reducer';
import initialState from './initState';

export const store = createStore(rootReducer, initialState(), composeWithDevTools(applyMiddleware(thunk)));

