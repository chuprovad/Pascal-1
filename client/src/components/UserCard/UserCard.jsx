import React, {useState} from 'react';
import CapacityProgressBar from "../UI/CapacityProgressBar/CapacityProgressBar";
import StarRating from "../UI/StarRating/StarRating";
import {useDispatch, useSelector} from "react-redux";
import ButtonCreate from "../UI/ButtonCreate/ButtonCreate";
import {deleteReservation, editReservation} from "../../redux/actions/reservation.action";

const UserCard = ({userDataFromState, id}) => {

    const reservation = useSelector(state => state.reservation)
    console.log(reservation)

    const dispatch = useDispatch()

    const [isVisible, setIsVisible] = useState(false)
    const [editReservationTitle, setEditReservationTitle] = useState('')
    const [editReservationDate, setEditReservationDate] = useState('')

    const editReservationHandler = () => {
        setIsVisible(prev => !prev)
    }

    const deleteReservationHandler = (e) => {
        e.preventDefault()
        dispatch(deleteReservation({id}))
    }

    const restaurantNameHandler = (e) => {
        e.preventDefault()
        setEditReservationTitle(e.target.value)
    }

    const reservationDateHandler = (e) => {
        e.preventDefault()
        setEditReservationDate(e.target.value)
    }

    const addNewReservationHandler = (e) => {
        e.preventDefault()
        const {id} = e.target.name
        dispatch(editReservation({id, editReservationDate, editReservationTitle}))
    }


    return (
        <div>
            <h1>
                We are happy to welcome you here, {userDataFromState.name}!
            </h1>

            <h2>
                Your bookings:
            </h2>
            <ul>
                {reservation?.reserv.map(el => <li>
                    Restaurant name: {el.title}
                    <br/>
                   Date and time of your booking: {el.createdAt}</li> )}
            </ul>
            <button type="button" onClick={editReservationHandler}>Edit your reservation</button>
            <button type="button" onClick={deleteReservationHandler}>Cancel your reservation</button>
            <div className={isVisible ? "d-block" : "d-none"}>
                <form onSubmit={addNewReservationHandler}>
                    <input name='name' id={id} onChange={restaurantNameHandler} type="text"/>
                    <input onChange={reservationDateHandler} type="text"/>
                    <button onClick={editReservationHandler}>Save</button>
                </form>
            </div>
        </div>
    );
};

export default UserCard;