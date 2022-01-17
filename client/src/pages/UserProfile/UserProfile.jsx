import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import UserCard from "../../components/UserCard/UserCard";
import {THUNK_getReservationInfoFromDB, THUNK_getUserInfoFromDB} from "../../redux/actions/userinfo.action";


const UserProfile = () => {

    const userDataFromState = useSelector(state => state.userInfo);
    const dispatch = useDispatch()

    // Получить данные одного юзера с бэка при монтировании компонента
    useEffect(() => {
        dispatch(THUNK_getUserInfoFromDB());
        dispatch(THUNK_getReservationInfoFromDB(userDataFromState.id));

    }, [])




    return (
        <div>
df
            {/*<UserCard userDataFromState={userDataFromState}/>*/}
        </div>
    );
};

export default UserProfile;