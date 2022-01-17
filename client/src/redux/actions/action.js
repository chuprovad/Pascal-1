import {GET_RESTS, SEARCH_OPTION, SELECT_OPTION, SET_RESTS} from "../types/rest.types";


export const getRests = (value) => {
    return {
        type: GET_RESTS,
        payload: value
    }
}

export const setRests = (value) => {
    return {
        type: SET_RESTS,
        payload: value
    }
}

export const getAllRestaurants = (data) => async(dispatch) => {
    const response = await fetch('http://localhost:3002/api/')
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

