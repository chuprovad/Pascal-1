import {DELETE_RESERVATION, GET_RESERVATION} from "../types/users.types";
import initialState from "../initState";

const reservationReducer = (state = initialState, action) => {


    switch (action.type) {

        case GET_RESERVATION: {
            return action.payload
        }

        case DELETE_RESERVATION: {
            return state.filter(el => (el.id !== action.payload.id))

        }

        default:
            return state
    }
}

export default reservationReducer
