import {DELETE_USER, GET_RESERVATION, GET_USERINFO} from "../types/users.types"

const userinfoReducer = (state = null, action) => {
  const { type, payload } = action

  switch (type) {

    case GET_USERINFO:
      return payload

    case DELETE_USER:
      return null
      
    default:
      return state
  }
}

export default userinfoReducer
