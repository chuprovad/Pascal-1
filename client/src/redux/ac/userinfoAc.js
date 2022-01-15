import { DELETE_USER, GET_ADMIN, GET_USERINFO } from "../type";





export const getUserInfo = (user) => ({
  type: GET_USERINFO,
  payload: user


})

export const getAdmin = (user) => ({
  type: GET_ADMIN,
  payload: user


})

export const deleteUser = () => ({
  type: DELETE_USER
})

export const signUp = (payload, navigate) => async (dispatch) => {
  const response = await fetch('http://localhost:3002/api/auth/signup', {
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
  const response = await fetch('http://localhost:3002/api/auth/signin', {
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
    // if (user.isAdmin) {
    //   dispatch(getAdmin(user))
    // } else {

      dispatch(getUserInfo(user))
    // }
    // navigate('/cat')
  } else {
    // navigate('http://localhost:3000/auth/signin')
  }
}


export const signUpAdmin = (payload, navigate) => async (dispatch) => {
  const response = await fetch('http://localhost:3002/api/auth/admin', {
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

export const signOut = () => async (dispatch) => {
  const response = await fetch('http://localhost:3002/api/auth/signout', {
    credentials: 'include'
  })
  if (response.status === 200) {
    dispatch(deleteUser())
  }
} 
