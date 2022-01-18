import axios from "axios";
import {GET_ALL_RESTAURANTS_APP, GET_RESTAURANTS_BY_COORD, GET_RESTS, SEARCH_OPTION, SELECT_OPTION, SET_RESTS} from "../types/rests.types";


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

// ****** Получение всех ресторанов в области видимости ******
export const allRestByCoord = (coord) => async (dispatch) => {
  const response = await axios.post('http://localhost:3002/api/restaurants/all', {
    coord
  })

  dispatch({
    type: GET_RESTAURANTS_BY_COORD,
    payload: response.data
  })
}

// ****** Получение всех ресторанов ******
export const THUNK_getAllRestaurantsFromDB = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3002/api/restaurants/allrests');
  // console.log('ACTION All Restaurants ----->', response.data);

  dispatch({
    type: GET_ALL_RESTAURANTS_APP,
    payload: response.data
  })
}
