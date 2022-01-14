import React from 'react';
import {Link} from "react-router-dom";
import Selector from "../Selector/Selector";
import Search from "../Search/Search";

const NavBar = () => {
    return (
        <div className="navbar">
            Pascal
            <Selector />
            <Search />
            <Link className="nav-link" to={'/login'}>Sign in</Link>
            <Link className="nav-link" to={'/register'}>Sign up</Link>
        </div>
    );
};

export default NavBar;