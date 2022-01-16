import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addManyTodos} from "../../../redux/actions/action";
import axios from "axios";
import OneRest from "../OneResr/OneRest";
import { v4 as uuidv4 } from 'uuid';

const RestsList = () => {

    const rests = useSelector(state => state.rests)
    const dispatch = useDispatch()

    return (
        <div>
            {rests && rests.map(rest => <OneRest key={uuidv4()} id={rest.id} title={rest.title} category={rest.category} />
                )}
        </div>
    );
};

export default RestsList;
