import React from 'react';
import {useSelector} from "react-redux";

const OneRest = () => {

    const rests = useSelector(state => state.rests)

    return (
        <div>
            <li className='restaurants'>
                <h3>{rests.name}</h3>
                <h3>{rests.category}</h3>
            </li>
        </div>
    );
};

export default OneRest;