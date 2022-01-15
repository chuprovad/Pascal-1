import axios from 'axios';
import { GET_RESTAURANT, SET_RATING } from "../types/restaurant.types"

export const getRestaurantFromDB = (restaurantData) => {
  return {
    type: GET_RESTAURANT,
    payload: restaurantData,
  }
}

export const THUNK_getRestaurantFromDB = (restaurantId) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3001/restaurants/${restaurantId}`);
  // console.log(response.data);
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
  console.log('payload) ---> ', payload);
  const { restaurantId, rating } = payload;
  const response = await axios.post(`http://localhost:3001/restaurants/${Number(restaurantId)}/addRating`, {
    rating: rating,
  })

  const updatedRatingFromDB = response.data;
  dispatch(addRating(updatedRatingFromDB));
}
