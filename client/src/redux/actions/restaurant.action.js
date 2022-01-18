import axios from 'axios';
import { EDIT_RESTAURANT, GET_RESTAURANT, SET_RATING, SET_RESERVATION,  GET_ALL_RESTAURANTS } from "../types/restaurant.types"

export const getRestaurantFromDB = (restaurantData) => {
  return {
    type: GET_RESTAURANT,
    payload: restaurantData,
  }
}

export const THUNK_getRestaurantFromDB = (restaurantId) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3002/api/restaurants/${restaurantId}`);
  const restaurantData = response.data;
  dispatch(getRestaurantFromDB(restaurantData));
}

export const addRating = (rating) => {
  return {
    type: SET_RATING,
    payload: rating,
  }
}

export const THUNK_addRatingToDB = (payload) => async (dispatch) => {
  const { restaurantId, rating } = payload;
  const response = await axios.post(`http://localhost:3002/api/restaurants/${Number(restaurantId)}/rating`,
    {
      score: rating,
    },
    {
      withCredentials: true
    }
  )

  const updatedRatingFromDB = response.data;
  dispatch(addRating(updatedRatingFromDB));
}

export const addReservation = (updatedBookedTables) => {
  return {
    type: SET_RESERVATION,
    payload: updatedBookedTables,
  }
}

export const THUNK_addReservationToDB = (payload) => async (dispatch) => {
  const { restaurantId, booking } = payload;
  const response = await axios.put(`http://localhost:3002/api/restaurants/${Number(restaurantId)}/reservation`, {
    guestsQuantity: Number(booking.guestsQuantity),
  })
  const updatedBookedTablesFromDB = response.data;
  dispatch(addReservation(updatedBookedTablesFromDB));
}



export const editRestaurant = (restaurantData) => {
  return {
    type: EDIT_RESTAURANT,
    payload: restaurantData,
  }
}

export const THUNK_editRestaurant = (payload, restId) => async (dispatch) => {
  const response = await fetch('http://localhost:3001/api/', {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  const restaurant = await response.json()
  dispatch(editRestaurant(restaurant))
}

// ****** Получение адресов всех ресторанов ******
//добавила Катя
export const allRestaurants = () => async(dispatch) => {
  // console.log('***')
  const response = await axios.get('http://localhost:3002/api/restaurants/map')
  const allRest = await response.data
  // console.log('allRest', allRest.aresses.map(el => ({type:'Point', coordinates: [el.latitude, el.longitude]})))
  dispatch({
    type: GET_ALL_RESTAURANTS,
    payload: allRest.aresses.map(el => ({type:'Point', coordinates: [el.latitude, el.longitude]}))
  })
}
