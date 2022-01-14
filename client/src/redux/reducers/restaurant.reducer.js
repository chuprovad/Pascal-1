import initialState from "../initState";
import { GET_RESTAURANT } from "../types/restaurant.types";

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANT:
      return action.payload;
  
    default:
      return state;
  }
}
