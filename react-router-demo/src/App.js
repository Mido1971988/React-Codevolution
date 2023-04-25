import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import { Navbar } from './components/NavBar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;