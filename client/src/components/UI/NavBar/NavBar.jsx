import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Selector from "../Selector/Selector";
import Search from "../Search/Search";
import { useNavigate } from "react-router"
import classes from './NavBar.module.css'
import id from './NavBar.module.css'
import OneRest from "../../common/OneRest/OneRest";
import { useDispatch, useSelector } from "react-redux";
import { getWords } from "../../../redux/actions/rests.action";
import { signOut } from '../../../redux/actions/userinfo.action';

const NavBar = () => {

  const user = useSelector(state => state.userInfo)
  const dispatch = useDispatch()
  const [rests, setRests] = useState()

  const [options, setOptions] = useState('')


  const [searchQuery, setSearchQuery] = useState('')

  const filterRests = (value) => {
    console.log(value)
    setOptions(value)
    // setSelectedSort(value)
    // setSearchQuery('')
    // console.log({searchQuery,selectedSort})
    //      setRests([...rests].filter(el => {
    //        return  el.location = 'Novikov'
    // }))
  }

  const navigate = useNavigate()
  const all = useSelector(state => state)
    function deleteUser() {
      dispatch(signOut())
      // navigate('/')
  console.log(all);
    }
  return (


    <div className={classes["navbar"]}>

      <Link className={classes["home-link"]} to={'/'}>Pascal</Link>


      <Selector
        value={options}
        onChange={filterRests}
        defaultValue={"Choose city"}
        options={[
          { value: 'Moscow', name: 'Moscow' },
          { value: 'Togliatti', name: 'Togliatti' },
          { value: 'Tver', name: 'Tver' },
          { value: 'Samara', name: 'Samara' }
        ]}
      />

      <Search
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />




      {user && (

        <>
          {user.isAdmin && (
            <Link className={classes["other-link"]} to={`/admin/${user.id}`}>Admin Profile</Link>

          )}
          {!user.isAdmin && (
            <Link className={classes["other-link"]} to={`/users/${user.id}`}>User Profile</Link>

          )}
          <Link onClick={deleteUser} className={classes["other-link"]} to={'/'}>Sign out</Link>
        </>


      )}

      {!user && (
        <>

          <Link className={classes["other-link"]} to={'/signin'}>Sign in</Link>
          <Link className={classes["other-link"]} to={'/signup'}>Sign up</Link>

        </>
      )}



      {/* {
        user ?
          <>
            <Link className={classes["other-link"]} to={`/users/${user.id}`}>User Profile</Link>
            <Link className={classes["other-link"]} to={'/signout'}>Sign out</Link>
          </>
          :
          <>

            <Link className={classes["other-link"]} to={'/signin'}>Sign in</Link>
            <Link className={classes["other-link"]} to={'/signup'}>Sign up</Link>

          </>
      } */}
    </div>

  );
};

// add /auth inside to in the begining

export default NavBar;

// <button onClick={getAllRests}  ></button>
// <div>
//     {rests && rests.map(rest => <OneRest id={rest.id} title={rest.title} />
//     )}
// </div>
