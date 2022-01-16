import {GET_WORDS, SET_WORDS} from "../types/rest.types";
import {setWords} from "../actions/action";
import axios from "axios";
import { call, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects'

const getWordsFromBack = (word) => {
    return axios.post('http://localhost:3001/', {word})
        .then( res => res.data.words)
}

function* wordsSagaWorker(action) {
    try {
        const words = yield call(getWordsFromBack, action.payload);
        yield put(setWords(words));
    } catch (e) {
        yield put({type: SET_WORDS, payload: [{id:1, word:'server is death'}]});
    }
}

function* wordsSagaWatcher() {
    yield throttle(2000, GET_WORDS, wordsSagaWorker);
}


export default wordsSagaWatcher;