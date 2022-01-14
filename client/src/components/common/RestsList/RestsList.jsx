import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addManyTodos} from "../../../redux/actions/action";
import axios from "axios";
import OneRest from "../OneResr/OneRest";

const RestsList = () => {

    const rests = useSelector(state => state.rests)
    const dispatch = useDispatch()


    const downloadHandler = async(e) => {
        e.preventDefault()
        const response = await axios('https://jsonplaceholder.typicode.com/todos')
        const restsFromServer = await response.data
        dispatch(addManyTodos(restsFromServer))
    }



    return (
        <div>
            <button onClick={downloadHandler} >Download todos</button>

            {rests && rests.map(rest => <OneRest id={rest.id} title={rest.title} category={rest.category} />
                )}
        </div>
    );
};

export default RestsList;