import React, {useState} from 'react';
import {optionAction, searchAction} from "../../../redux/actions/action";
import {useDispatch} from "react-redux";

const Search = ({value}) => {



    const [data, setData] = useState('')
    const dispatch = useDispatch()

    const onClick = (e) => {
        console.log(e)
        const data = e.target.value
        setData(data)
        dispatch(searchAction(e.target.value))

    }

    return (
        <>
            <input type="text"
            onClick={onClick}
            />
        </>
    );
};

export default Search;