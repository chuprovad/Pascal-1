import { Routes, Route} from 'react-router-dom'
import './App.css';
import Map from './components/Map/Map';
import Restaurant from './pages/Restaurant/Restaurant';
import NavBar from "./components/UI/NavBar/NavBar";
import RestsList from "./components/common/RestsList/RestsList";

function App() {
    return (
        <div>
            <NavBar />

            <Routes>
                {/* TODO: change routing */}
                <Route path='/rests' element={<RestsList />}/>
                <Route path='/' element={<Map/>}/>
                <Route path='/restaurant/:id' element={<Restaurant />} />
            </Routes>
        </div>
    );
}

export default App;
