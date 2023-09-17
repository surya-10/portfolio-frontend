import logo from './logo.svg';
import './App.css';
import Base from './components/base';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Skills from './components/skills';
import Projects from './components/projects';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
     {/* <i class="fa-solid fa-house"><small className='ms-2'>home</small></i> */}
     {/* <Base/> */}
    </div>
  );
}

export default App;
