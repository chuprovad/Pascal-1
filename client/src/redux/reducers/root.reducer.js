import {combineReducers} from "redux";
import restReducer from "./restReducer";

const rootReducer = combineReducers({
    rests: restReducer

})

export default rootReducer