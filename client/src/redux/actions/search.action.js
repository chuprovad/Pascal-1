import {CHANGE, GET_ALL} from "../types/search.types";
import axios from "axios";

export const getAllRests = (rests) => {
    return {
        type: GET_ALL,
        payload: rests
    }
}

export const changeInputAction = (input) => {
    return {
        type: CHANGE,
        payload: input
    }
}