import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addManyTodos} from "../../../redux/actions/action";
import axios from "axios";
<<<<<<< HEAD
import OneRest from "../OneRest/OneRest";
=======
import OneRest from "../OneResr/OneRest";
import { v4 as uuidv4 } from 'uuid';
>>>>>>> dev

const RestsList = () => {

    const rests = useSelector(state => state.rests)
    const dispatch = useDispatch()

    return (
        <div>
<<<<<<< HEAD
            <button onClick={downloadHandler} >Download todos</button>

            {rests && rests.map(rest => <OneRest id={rest.id} title={rest.title} category={rest.category} location={rest.location} />
=======
            {rests && rests.map(rest => <OneRest key={uuidv4()} id={rest.id} title={rest.title} category={rest.category} />
>>>>>>> dev
                )}
        </div>
    );
};

export default RestsList;
