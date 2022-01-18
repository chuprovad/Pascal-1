import React, {useEffect, useState} from 'react';
import {getRests, optionAction, searchAction} from "../../../redux/actions/rests.action";
import {useDispatch} from "react-redux";
import classes from './Search.module.css'


const Search = ({value}) => {


    const [searchQuery, setSearchQuery] = useState('')
    const [data, setData] = useState('')
    const dispatch = useDispatch()

    // const inputHandler = (e) => {
    //     console.log(e)
    //     setSearchQuery(e.target.value)
    //
    //
    // }
    //
    // useEffect(()=> {
    //     if (searchQuery) {
    //         dispatch(getRests(searchQuery))
    //     }
    // }, [searchQuery]);  // =====> заготовка для саги

    const inputHandler = (e) => {
        console.log(e)
        const data = e.target.value
        setData(data)
        dispatch(searchAction(e.target.value))

    }

    return (
        <>
            <input type="text"
                   className={classes["search"]}
                   placeholder="Type here..."
                   // value={searchQuery} for saga use
            onChange={inputHandler}
            />
        </>
    );
};

export default Search;
