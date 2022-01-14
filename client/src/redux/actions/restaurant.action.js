import axios from 'axios';
import { GET_RESTAURANT } from "../types/restaurant.types"

export const getRestaurantFromDB = (restaurantData) => {
  return {
    type: GET_RESTAURANT,
    payload: restaurantData,
  }
}

export const THUNK_getRestaurantFromDB = (restaurantId) => async (dispatch) => {
  console.log('TECЕ =========>');
  const response = await axios.get(`http://localhost:3001/restaurants/${restaurantId}`);
  console.log(response.data);

  const restaurantData = response.data;
  dispatch(getRestaurantFromDB(restaurantData))
}
