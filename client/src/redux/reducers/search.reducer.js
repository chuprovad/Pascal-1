import {CHANGE, GET_ALL} from "../types/search.types";

export const searchReducer = (state = '', action) => {
    switch (action.type) {



        case CHANGE: {
            return action.payload
        }

        default : {
            return state
        }
    }
}