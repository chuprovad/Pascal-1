import axios from "axios";
import {GET_RESTS, SEARCH_OPTION, SELECT_OPTION, SET_RESTS} from "../types/rests.types";


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

export const optionAction = (city) => {
    return {
        type: SELECT_OPTION,
        payload: city
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
  console.log('restaurantsByCoord ******** ->', restaurantsByCoord);
}
