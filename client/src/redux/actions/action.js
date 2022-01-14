import {GET_ALL} from "../types";

export const addManyTodos = (restsFromServer) => {
    return {
        type: GET_ALL,
        payload: restsFromServer
    }
}