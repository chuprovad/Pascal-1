import { GET_RESTAURANT } from "../type"



const restaurantsReducer = (state = null, action) => {
  const { type, payload } = action
  
  switch (type) {

    case GET_RESTAURANT:
      return payload



    default:
      return state
  }
}

export default restaurantsReducer
