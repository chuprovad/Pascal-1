import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addManyTodos} from "../../../redux/actions/action";
import axios from "axios";
import OneRest from "../OneResr/OneRest";

const RestsList = () => {

    const rests = useSelector(state => state.rests)
    const dispatch = useDispatch()



    return (
        <div>


            {rests && rests.map(rest => <h3>rest.name</h3>
                )}
        </div>
    );
};

export default RestsList;