import { GET_ADMIN } from "../type";




export const getAdmin = (user) => ({
  type: GET_ADMIN,
  payload: user


})

export const signUpAdmin = (payload, navigate) => async (dispatch) => {
  const response = await fetch('http://localhost:3001/api/admin/signup', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  if (response.status === 200) {
    const user = await response.json()
    dispatch(getAdmin(user))
    // navigate('/api/main') 
  } else {
    //   navigate('/auth/signup')
  }
}
