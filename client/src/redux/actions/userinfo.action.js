import {DELETE_USER, GET_ADMIN, GET_RESERVATION, GET_USERINFO} from "../types/users.types"
import {GET_RESTAURANT} from "../types/restaurant.types";
import axios from "axios";
import {getRestaurantFromDB} from "./restaurant.action";

export const getUserInfo = (user) => ({
  type: GET_USERINFO,
  payload: user

})

export const getReservationInfo = (data) => ({
  type: GET_RESERVATION,
  payload: data
})


export const THUNK_getUserInfoFromDB = () => async (dispatch) => {
  const response = await axios.get(`http://localhost:3002/api/users/`);
  const userData = response.data;
  dispatch(getUserInfo(userData));
}

export const THUNK_getReservationInfoFromDB = (userId) => async (dispatch) => {
  // console.log('userid', userId)
  const response = await axios.get(`http://localhost:3002/api/users/${userId}/reservations`)
  // console.log(response)
  const resData = response.data;

  dispatch(getReservationInfo(resData))
}


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
    // navigate('/users/1')
  } else {
      // navigate('/auth/signup')
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
    navigate('/users/1')
  } else {
    // navigate('http://localhost:3000/auth/signin')
  }
}

// // проверка на авторизацию юзера Даша
// export const checkAuthUser = () => async (dispatch) => {
//   const response = await fetch('http://localhost:3002/api/auth/checkuser', {
//     credentials: 'include'
//   })
//   if (response.status === 200) {
//     const user = await response.json()
//     dispatch(getUserInfo(user))
//   }
// }


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
