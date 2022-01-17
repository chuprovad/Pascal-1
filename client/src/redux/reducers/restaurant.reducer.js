import initialState from "../initState";
import { GET_RESTAURANT, SET_RATING, SET_RESERVATION, GET_ALL_RESTAURANTS } from "../types/restaurant.types";

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANT:
      return action.payload;

    case SET_RATING:
      return {...state, rating: action.payload};

    case SET_RESERVATION:
      return {...state, bookedTables: action.payload};
    // katya was here
    case GET_ALL_RESTAURANTS:
      // console.log('---------____',action.payload)
      return action.payload

    default:
      return state;
  }
}
