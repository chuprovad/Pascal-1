import { Routes, Route} from 'react-router-dom'
import './App.css';
import Map from './components/Map/Map';

function App() {
  return (
    <div className="container py-5">
      <Routes> 
      <Route path='/' element={<Map/>}/>
      </Routes> 
    </div>
  );
}

export default App;
