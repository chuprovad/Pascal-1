import initialState from "../initState";
import { SEARCH_OPTION, SELECT_OPTION } from "../types/rests.types";
import { GET_RESTAURANTS_BY_COORD } from "../types/rests.types";

const restReducer = (state = initialState, action) => {

    switch (action.type) {
        case SELECT_OPTION: {
            console.log(action.payload)
            return state.filter(el => el.location === action.payload)
        }

        case SEARCH_OPTION: {
            return state.filter(el => el.title.toLowerCase().includes(action.payload.toLowerCase()) )
        }

        case GET_RESTAURANTS_BY_COORD:
          return action.payload

        default: {
            return state
        }
    }
}

export default restReducer
