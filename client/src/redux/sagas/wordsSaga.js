import {GET_RESTS, SET_RESTS} from "../types/rest.types";
import axios from "axios";
import { call, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects'
import {setRests} from "../actions/action";

const getRestsFromBack = (rest) => {
    return axios.post('http://localhost:3002/', {rest})
        .then( res => res.data.rests)
}

function* wordsSagaWorker(action) {
    try {
        const rests = yield call(getRestsFromBack, action.payload);
        yield put(setRests(rests));
    } catch (e) {
        yield put({type: SET_RESTS, payload: [{id:1, word:'server is death'}]});
    }
}

function* wordsSagaWatcher() {
    yield throttle(2000, GET_RESTS, wordsSagaWorker);
}


export default wordsSagaWatcher;