import React from 'react';
import {useSelector} from "react-redux";

const OneRest = ({id, title, category, location}) => {

    const rests = useSelector(state => state.rests)

    return (
        <div>
            <li className='restaurants'>
                <h3>{id}</h3>
                <h3>{title}</h3>
                <h4>{category}</h4>
                <h4>{location}</h4>
            </li>
        </div>
    );
};

export default OneRest;