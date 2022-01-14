import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Selector from "../Selector/Selector";
import Search from "../Search/Search";
import './NavBar.css'
import OneRest from "../../common/OneResr/OneRest";
import {useSelector} from "react-redux";

const NavBar = () => {


    const [rests, setRests] = useState()

    const [options, setOptions] = useState('')


    const [searchQuery, setSearchQuery] = useState('')

    const filterRests = (value) => {
        setOptions(value)
        // setSelectedSort(value)
        // setSearchQuery('')
        // console.log({searchQuery,selectedSort})
    //      setRests([...rests].filter(el => {
    //        return  el.location = 'Novikov'
    // }))
    }





    return (
        <div className="navbar">
            Pascal

            <Selector
                value={options}
                onChange={filterRests}
                defaultValue="Cities"
                options={[
                    {value: 'Moscow', name: 'Moscow'},
                    {value: 'Togliatti', name: 'Togliatti'},
                    {value: 'Tver', name: 'Tver'},
                    {value: 'Samara', name: 'Samara'}
                ]}
            />

            <Search
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            placeholder='Search'
            />
            <Link className="nav-link" to={'/login'}>Sign in</Link>
            <Link className="nav-link" to={'/register'}>Sign up</Link>


</div>
    );
};

export default NavBar;

// <button onClick={getAllRests}  ></button>
// <div>
//     {rests && rests.map(rest => <OneRest id={rest.id} title={rest.title} />
//     )}
// </div>