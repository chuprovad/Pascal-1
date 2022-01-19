import React, {useState} from 'react';
import CapacityProgressBar from "../UI/CapacityProgressBar/CapacityProgressBar";
import StarRating from "../UI/StarRating/StarRating";
import {useDispatch, useSelector} from "react-redux";
import ButtonCreate from "../UI/ButtonCreate/ButtonCreate";
import {deleteReservation, editReservation} from "../../redux/actions/reservation.action";
import {v4 as uuidv4} from "uuid";
import classes from "../../pages/UserProfile/UserProfile.module.css";

const UserCard = ({userDataFromState}) => {
    const reservation = useSelector(state => state.reservation)

    // const dispatch = useDispatch()
    //
    // const [isVisible, setIsVisible] = useState(false)
    // const [editReservationTitle, setEditReservationTitle] = useState('')
    // const [editReservationDate, setEditReservationDate] = useState('')
    //
    // const editReservationHandler = () => {
    //     setIsVisible(prev => !prev)
    // }
    //
    // const deleteReservationHandler = (e) => {
    //     e.preventDefault()
    //     dispatch(deleteReservation(reservation.id))
    // }
    //
    // const restaurantNameHandler = (e) => {
    //     e.preventDefault()
    //     setEditReservationTitle(e.target.value)
    // }
    //
    // const reservationDateHandler = (e) => {
    //     e.preventDefault()
    //     setEditReservationDate(e.target.value)
    // }
    //
    // const addNewReservationHandler = (e) => {
    //     e.preventDefault()
    //     const {id} = e.target.name
    //     dispatch(editReservation({id, editReservationDate, editReservationTitle}))
    // }


    return (
        <div>
            <h1>
                We are happy to welcome you here, {userDataFromState.name}!
            </h1>

            <h2>
                Your bookings:
            </h2>
            <ul className={classes["text"]}>
                {reservation?.reserv?.map(el =>
                    <li key={uuidv4()}>
                        Restaurant name: {el.title}
                        <br/>
                       Date of your booking: {el.createdAt.slice(0,10)}
                        <br/>
                        Time of your booking: {el.createdAt.slice(11,16)}
                    </li> )}
            </ul>

        </div>
    );
};

export default UserCard;
//
// <button type="button" onClick={editReservationHandler}>Edit your reservation</button>
// <button type="button" onClick={deleteReservationHandler}>Cancel your reservation</button>
// <div className={isVisible ? "d-block" : "d-none"}>
//     <form onSubmit={addNewReservationHandler}>
//         <input name='name' id={reservation.id} onChange={restaurantNameHandler} type="text"/>
//         <input onChange={reservationDateHandler} type="text"/>
//         <button onClick={editReservationHandler}>Save</button>
//     </form>
// </div>