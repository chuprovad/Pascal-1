import { combineReducers } from 'redux';
import { restaurantReducer } from './restaurant.reducer';
import restReducer from './restReducer';
import userinfoReducer from './userInfoReducer';

export const rootReducer = combineReducers({
    restaurant: restaurantReducer,
    rests: restReducer,
    userInfo: userinfoReducer,
});
