import { GET_USERINFO } from "../type"



const userinfoReducer = (state = null, action) => {
  const { type, payload } = action
  
  switch (type) {

    case GET_USERINFO:
      return payload

    default:
      return state
  }
}

export default userinfoReducer
