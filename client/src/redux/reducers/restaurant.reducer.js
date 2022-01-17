import initialState from "../initState";
import { GET_RESTAURANT, SET_RATING, SET_RESERVATION } from "../types/restaurant.types";

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANT:
      return action.payload;

    case SET_RATING:
      return {...state, rating: action.payload};

    case SET_RESERVATION:
      return {...state, bookedTables: action.payload};
  
    default:
      return state;
  }
}
