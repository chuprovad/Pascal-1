import {initState} from "../initState/initState";
import {GET_ALL} from "../types";

const restReducer = (state = initState, action) => {

    switch (action.type) {

        case GET_ALL: {
            return [...state]
        }


        default: {
            return state
        }
    }


}

export default restReducer