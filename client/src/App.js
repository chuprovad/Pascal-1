import './App.css';
import Map from './components/Map/Map';
import Restaurant from './pages/Restaurant/Restaurant';
import NavBar from "./components/UI/NavBar/NavBar";
import RestsList from "./components/common/RestsList/RestsList";
import Reg from './components/Reg/Reg';
import SingIn from './components/SingIn/SingIn';
import SignOut from './components/SignOut/SingOut';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <NavBar />
            <RestsList />

            <Routes>
                {/* TODO: change routing */}
                {/*<Route path='/rests' element={<RestsList />}/>*/}
                <Route path='/' element={<Map/>}/>
                <Route path='/restaurants/:id' element={<Restaurant />} />
                <Route path='/signin' element={<SingIn />} />
                <Route path='/signup' element={<Reg />} />
                <Route path='/signout' element={<SignOut />} />

            </Routes>
        </div>
    );
}

export default App;
