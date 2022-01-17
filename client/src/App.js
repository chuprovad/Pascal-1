import './App.css';
import Map from './components/Map/Map';
import Restaurant from './pages/Restaurant/Restaurant';
import NavBar from "./components/UI/NavBar/NavBar";
import RestsList from "./components/common/RestsList/RestsList";
import Reg from './components/Reg/Reg';
import SingIn from './components/SingIn/SingIn';
import SignOut from './components/SignOut/SingOut';


import { checkAuth, THUNK_getUserInfoFromDB } from './redux/actions/userinfo.action';

import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuthUser } from "./redux/actions/userinfo.action";
import { checkAuthAdmin } from "./redux/actions/admin.action";
import UserProfile from "./pages/UserProfile/UserProfile";


function App() {
  // const dispatch = useDispatch()
  //
  // useEffect(() => {
  //     dispatch(checkAuthUser())
  //     dispatch(checkAuthAdmin())
  // }, [])
  //
  // const user = useSelector(state => state.userInfo)
  // console.log(user)
  //
  // const admin = useSelector(state => state.admin)
  // console.log(admin)

  // function RequireAuthUser({ children, redirectTo }) {
  //     return user ? children : <Navigate to={redirectTo} />;
  // }
  //
  // function RequireAuthAdmin({ children, redirectTo }) {
  //     return admin ? children : <Navigate to={redirectTo} />;
  // }
  //
  // function RequireUnauthUser({children, redirectTo}) {
  //     return user ? <Navigate to={redirectTo} /> : children;
  // }
  //
  // function RequireUnauthAdmin({children, redirectTo}) {
  //     return admin ? <Navigate to={redirectTo} /> : children;
  // }
  const user = useSelector(state => state.userInfo)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [])

  return (
    <div>
      <NavBar />
      {/*<RestsList />*/}

      <Routes>
        {/* TODO: change routing */}
        {/* <Route path='/rests' element={<RestsList />}/> */}
        <Route path='/' element={<Map />} />
        <Route path='/restaurants/:id' element={<Restaurant />} />
        <Route path='/users/:id' element={<UserProfile />} />
        <Route path='/signin' element={<SingIn />} />
        <Route path='/signup' element={<Reg />} />
        <Route path='/signout' element={<SignOut />} />
      </Routes>
    </div>
  );
}

export default App;
