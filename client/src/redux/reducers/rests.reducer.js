import initialState from "../initState";
import {GET_ALL_RESTAURANTS_APP, GET_RESTAURANTS_BY_COORD, SEARCH_OPTION, SELECT_OPTION} from "../types/rests.types";

const restReducer = (state = initialState, action) => {

    switch (action.type) {
        case SELECT_OPTION: {
            return state.filter(el => el.categoryId === Number(action.payload));
        }

        case SEARCH_OPTION: {
            return state.filter(el => el.title.toLowerCase().includes(action.payload.toLowerCase()) )
        }

        case GET_RESTAURANTS_BY_COORD:
          return action.payload

        case GET_ALL_RESTAURANTS_APP:
          return action.payload

        default: {
            return state
        }
    }
}

export default restReducer
