import axios from "axios";
import {
    ALL_RESTS,
    GET_RESTAURANTS_BY_COORD,
    GET_RESTS,
    SEARCH_OPTION,
    SELECT_OPTION,
    SET_RESTS
} from "../types/rests.types";


export const getRests = (value) => {
    return {
        type: GET_RESTS,
        payload: value
    }
}

export const setRests = (value) => {
    return {
        type: SET_RESTS,
        payload: value
    }
}

export const getAllRestaurants = (data) => async(dispatch) => {
    const response = await fetch('http://localhost:3002/api/')
}

export const optionAction = (categoryId) => {
    return {
        type: SELECT_OPTION,
        payload: categoryId
    }
}

export const searchAction = (input) => {
    return {
        type: SEARCH_OPTION,
        payload: input
    }
}

export const allRestByCoord = (coord) => async (dispatch) => {
  // console.log('%%%', coord)
  const response = await axios.post('http://localhost:3002/api/restaurants/all', {
    coord
  })

  const restaurantsByCoord = response.data;
  // console.log('restaurantsByCoord ******** ->', restaurantsByCoord);
  dispatch({
    type: GET_RESTAURANTS_BY_COORD,
    payload: response.data
  })
}

export const getAllRests = () => async(dispatch) => {
    const response = await axios(`http://localhost:3002/api/restaurants/1`)
    dispatch({
        type: ALL_RESTS,
        payload: response.data
    })
}