import React from 'react';
import CapacityProgressBar from "../UI/CapacityProgressBar/CapacityProgressBar";
import StarRating from "../UI/StarRating/StarRating";

const UserCard = ({userDataFromState}) => {




    return (
        <div>
            <h1>
                We are happy to welcome you here, {userDataFromState.name}!
            </h1>

            <h2>
                Your bookings:
            </h2>
            <ul>
                <li>
                    Restaurant name: </li>
                <li>Date and time of your booking:</li>

            </ul>
        </div>
    );
};

export default UserCard;