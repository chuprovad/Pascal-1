import { GET_ADMIN } from "../type"




const adminReducer = (state = null, action) => {
  const { type, payload } = action
  
  switch (type) {

    case GET_ADMIN:
      return payload



    default:
      return state
  }
}

export default adminReducer
