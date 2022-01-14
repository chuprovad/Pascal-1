import {ADD_RESTS_FROM_SERVER, SELECT_OPTION} from "../types";

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

