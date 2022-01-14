import {ADD_RESTS_FROM_SERVER, SEARCH_OPTION, SELECT_OPTION} from "../types";

export const addManyTodos = (restsFromServer) => {
    return {
        type: ADD_RESTS_FROM_SERVER,
        payload: restsFromServer
    }
}

export const optionAction = (city) => {
    return {
        type: SELECT_OPTION,
        payload: city
    }
}

export const searchAction = (title) => {
    return {
        type: SEARCH_OPTION,
        payload: title
    }
}

