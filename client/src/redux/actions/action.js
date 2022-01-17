import {ADD_RESTS_FROM_SERVER, GET_WORDS, SEARCH_OPTION, SELECT_OPTION, SET_WORDS} from "../types/rest.types";


export const getWords = (value) => {
    return {
        type: GET_WORDS,
        payload: value
    }
}

export const setWords = (value) => {
    return {
        type: SET_WORDS,
        payload: value
    }
}

export const optionAction = (city) => {
    return {
        type: SELECT_OPTION,
        payload: city
    }
}

export const searchAction = (input) => {
    return {
        type: SEARCH_OPTION,
        payload: input
    }
}

