import initialState from "../initState";
import {GET_RESTS, SEARCH_OPTION, SELECT_OPTION, SET_RESTS} from "../types/rest.types";

const restReducer = (state = initialState, action) => {

    switch (action.type) {

        // case SET_RESTS: {
        //     return action.payload
        // }


        case SELECT_OPTION: {
            console.log(action.payload)
            return state.filter(el => el.location === action.payload)

        }

        case SEARCH_OPTION: {
            return state.filter(el => el.title.toLowerCase().includes(action.payload.toLowerCase()) )
        }




        default: {
            return state
        }
    }


}

export default restReducer
