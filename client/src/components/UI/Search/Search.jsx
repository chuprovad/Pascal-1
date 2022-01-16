import React, {useEffect, useState} from 'react';
import {getWords, optionAction, searchAction} from "../../../redux/actions/action";
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
    //         dispatch(getWords(searchQuery))
    //     }
    // }, [searchQuery]);  =====> заготовка для саги

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
                   // value={searchQuery} ==> заготовка для саги
            onChange={inputHandler}
            />
        </>
    );
};

export default Search;