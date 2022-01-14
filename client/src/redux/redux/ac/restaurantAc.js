import { GET_RESTAURANT } from "../type";





export const getAdmin = (rest) => ({
  type: GET_RESTAURANT,
  payload: rest


})


export const signUpRest = (payload, navigate) => async (dispatch) => {
  const response = await fetch('http://localhost:3001/api/admin/signup', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  if (response.status === 200) {
    const rest = await response.json()
    dispatch(getAdmin(rest))
    // navigate('/api/main') 
  } else {
    //   navigate('/auth/signup')
  }
}
