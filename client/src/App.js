import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Reg from './components/Reg/Reg';
import SingIn from './components/SingIn/SingIn';
import SignOut from './components/SignOut/SingOut';

function App() {
  // const dispatch = useDispatch()
  // useEffect(() =>{
  //   const lol =[null,null,null,null,null,null,null,null,null]
  //   dispatch(getGame(lol))
  // }, [])



  return (
    <>
      <Router>
        <Reg />
        <SingIn />
        <SignOut />
      </Router>
    </>
  );
}

export default App;
