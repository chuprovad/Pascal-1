import { combineReducers } from 'redux';
import { restaurantReducer } from './restaurant.reducer';
import restReducer from './restReducer';

export const rootReducer = combineReducers({
    restaurant: restaurantReducer,
    rests: restReducer
});
