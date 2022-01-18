import {GET_ADMIN_INFO} from "../types/admin.types";


export const getAdmin = (user) => ({
    type: GET_ADMIN_INFO,
    payload: user
})

// проверка на авторизацию админа Даша
export const checkAuthAdmin = () => async (dispatch) => {
    const response = await fetch('http://localhost:3002/api/auth/checkadmin', {
        credentials: 'include'
    })
    if (response.status === 200) {
        const admin = await response.json()
        dispatch(getAdmin(admin))
    }
}