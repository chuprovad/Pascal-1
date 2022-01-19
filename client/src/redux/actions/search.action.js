import {CHANGE, GET_ALL} from "../types/search.types";
import axios from "axios";



export const changeInputAction = (input) => {
    return {
        type: CHANGE,
        payload: input
    }
}