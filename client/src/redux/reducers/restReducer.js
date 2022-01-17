import initialState from "../initState";
import {ADD_RESTS_FROM_SERVER, SEARCH_OPTION, SELECT_OPTION} from "../types/rest.types";

const restReducer = (state = initialState, action) => {

    switch (action.type) {


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
