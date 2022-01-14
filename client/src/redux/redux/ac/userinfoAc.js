import { GET_USERINFO } from "../type";




export const getUserInfo = (user) => ({
  type: GET_USERINFO,
  payload: user


})

export const signUp = (payload, navigate) => async (dispatch) => {
  const response = await fetch('http://localhost:3001/api/auth/signup', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  if (response.status === 200) {
    const user = await response.json()
    dispatch(getUserInfo(user))
    // navigate('/api/main') 
  } else {
    //   navigate('/auth/signup')
  }
}


export const signIn = (payload, navigate, from) => async (dispatch) => {
  const response = await fetch('http://localhost:3001/api/auth/signin', {
    method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(payload)
  })
  if (response.status === 200) {
    const user = await response.json()
    console.log(user);
    dispatch(getUserInfo(user))
    // navigate('/cat')
  } else {
    // navigate('http://localhost:3000/auth/signin')
  }
}
