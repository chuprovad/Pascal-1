import {DELETE_RESERVATION, EDIT_RESERVATION} from "../types/users.types";

export const deleteReservation = (id) => {
    console.log('=====>delete reservation',id)
    return {
        type: DELETE_RESERVATION,
        payload: id
    }
}

export const editReservation = (reservation) => {
    return {
        type: EDIT_RESERVATION,
        payload: reservation
    }
}