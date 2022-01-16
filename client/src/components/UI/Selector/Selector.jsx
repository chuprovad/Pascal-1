import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {optionAction, searchAction} from "../../../redux/actions/action";
import classes from "../Selector/Selector.module.css";

const Selector = ({options, defaultValue, value}) => {
const [city, setCity] = useState('')
const dispatch = useDispatch()

    const onChange = (e) => {
        console.log('e.target.value',e.target.value)
    const data = e.target.value
        setCity(data)
        dispatch(optionAction(e.target.value))

    }

    return (
        <>



            <select value={value}
                    className={classes["selector"]}
            onChange={onChange}
            >
                <option selected value={defaultValue}>{defaultValue}</option>
                {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
                    )}
            </select>
        </>


    );
};

export default Selector;