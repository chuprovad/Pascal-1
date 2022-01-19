
import axios from "axios";
import {DELETE_RESERVATION, EDIT_RESERVATION, GET_RESERVATION} from "../types/reservation.types";


export const getReservationInfo = (data) => ({
    type: GET_RESERVATION,
    payload: data
})

export const THUNK_getReservationInfoFromDB = (userId) => async (dispatch) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}/reservations`)
    const resData = response.data;

    dispatch(getReservationInfo(resData))
}

export const deleteReservation = (id) => {

    return {
        type: DELETE_RESERVATION,
        payload: id
    }
}

export const THUNK_deleteReservationInfoFromDB = (restId) => async (dispatch) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/restaurants/${Number(restId)}/delReservation`,
        {
            withCredentials: true
        })
    dispatch(deleteReservation(restId))
}

export const editReservation = (reservation) => {
    return {
        type: EDIT_RESERVATION,
        payload: reservation
    }
}