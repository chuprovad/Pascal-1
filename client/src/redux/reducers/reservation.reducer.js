
import initialState from "../initState";
import {DELETE_RESERVATION, GET_RESERVATION} from "../types/reservation.types";

const reservationReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_RESERVATION: {
            return action.payload
        }

        case DELETE_RESERVATION: {
            const newState = {
                ...state,
                reserv: state.reserv.filter(el => el.id !== action.payload)
            }

            return newState
        }

        default:
            return state
    }
}

export default reservationReducer
