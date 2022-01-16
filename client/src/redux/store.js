import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from './reducers/root.reducer';
import initialState from './initState'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, initialState(), composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(rootSaga)