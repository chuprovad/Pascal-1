import { Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from "./components/UI/NavBar/NavBar";
import RestsList from "./components/common/RestsList/RestsList";

function App() {
  return (
    <div className="container py-5">
        <NavBar/>
        <RestsList />
      <Routes> 
      {/*<Route path='/' />*/}
      </Routes> 
    </div>
  );
}

export default App;
