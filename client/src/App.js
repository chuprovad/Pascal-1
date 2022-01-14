import { Routes, Route} from 'react-router-dom'
import './App.css';
import Restaurant from './pages/Restaurant/Restaurant';

function App() {
  return (
    <div>
      <Routes>
        {/* TODO: change routing */}
        <Route path='/' element={<Restaurant />} /> 
        {/* <Route path='/restaurant/:id' element={<Restaurant />} /> */}
      </Routes> 
    </div>
  );
}

export default App;
