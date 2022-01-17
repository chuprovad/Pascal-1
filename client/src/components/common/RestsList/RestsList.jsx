import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import OneRest from "../OneRest/OneRest";
import { v4 as uuidv4 } from 'uuid';

const RestsList = () => {

    const rests = useSelector(state => state.rests)
    const dispatch = useDispatch()

    return (
        <div>
        {rests &&
          rests.map(rest => <OneRest key={uuidv4()} id={rest.id} title={rest.title} />)
        }
        </div>
    );
};

export default RestsList;

// {rests &&
// rests.map(rest => <OneRest key={uuidv4()} id={rest.id} title={rest.title} category={rest.category} location={rest.location} />)
// }