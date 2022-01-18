import initialState from "../initState";
import {ALL_RESTS, SEARCH_OPTION, SELECT_OPTION} from "../types/rests.types";
import { GET_RESTAURANTS_BY_COORD } from "../types/rests.types";
import {GET_ALL} from "../types/search.types";

const restReducer = (state = initialState, action) => {

    switch (action.type) {
        case SELECT_OPTION: {
            console.log(action.payload)
            console.log(state)
            return state.filter(el => el.categoryId === Number(action.payload))
        }

        case SEARCH_OPTION: {
            console.log(action.payload)
            return state.filter(el => el.title.toLowerCase().includes(action.payload.toLowerCase()) )
        }

        case GET_RESTAURANTS_BY_COORD:
          return action.payload

        case ALL_RESTS: {
            return action.payload
        }

        default: {
            return state
        }
    }
}

export default restReducer
