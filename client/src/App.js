import { Routes, Route} from 'react-router-dom'
import './App.css';
import Map from './components/Map/Map';
import Restaurant from './pages/Restaurant/Restaurant';

function App() {
  return (
    <div>
      <Routes>
        {/* TODO: change routing */}
        <Route path='/' element={<Map/>}/>
        <Route path='/restaurant/:id' element={<Restaurant />} />
      </Routes> 
    </div>
  );
}

export default App;
