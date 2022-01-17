import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import OneRest from "../OneRest/OneRest";
import { v4 as uuidv4 } from 'uuid';

const RestsList = () => {

    const rests = useSelector(state => state.rests)
    const dispatch = useDispatch()
    

    return (
        <div>
          <h1>Lorem Ipsum</h1>
        {rests &&
          rests.map(rest => <OneRest key={uuidv4()} id={rest.id} title={rest.title} category={rest.category} location={rest.location} />)
        }
        </div>
    );
};

export default RestsList;
