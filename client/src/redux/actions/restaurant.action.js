import axios from 'axios';
import { GET_RESTAURANT, SET_RATING, SET_RESERVATION, GET_ALL_RESTAURANTS } from "../types/restaurant.types"

export const getRestaurantFromDB = (restaurantData) => {
  return {
    type: GET_RESTAURANT,
    payload: restaurantData,
  }
}

export const THUNK_getRestaurantFromDB = (restaurantId) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3002/restaurants/${restaurantId}`);
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
  const response = await axios.post(`http://localhost:3002/api/restaurants/${Number(restaurantId)}/addRating`, {
    rating: rating,
  })

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
  const response = await axios.post(`http://localhost:3002/api/restaurants/${Number(restaurantId)}/reservation`, {
    guestsQuantity: Number(booking.guestsQuantity),
  })
  const updatedBookedTablesFromDB = response.data;
  dispatch(addReservation(updatedBookedTablesFromDB));
}
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

export const allRestByCoord = (coord) => async(dispatch) => {
  console.log('%%%', coord)
  const response = await axios.post('http://localhost:3002/api/restaurants/all', {
    guestsQuantity: coord
  })
  // const allRest = await response.data
}
