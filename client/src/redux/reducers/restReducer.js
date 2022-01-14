import {initState} from "../initState/initState";
import {ADD_RESTS_FROM_SERVER, SEARCH_OPTION, SELECT_OPTION} from "../types";

const restReducer = (state = initState, action) => {

    switch (action.type) {

        case ADD_RESTS_FROM_SERVER: {
            return [...state, ...action.payload]
        }

        case SELECT_OPTION: {
            console.log(action.payload)
            return state.filter(el => el.location === action.payload)

        }

        case SEARCH_OPTION: {
            return state.filter(el => el.title === action.payload)
        }




        default: {
            return state
        }
    }


}

export default restReducer