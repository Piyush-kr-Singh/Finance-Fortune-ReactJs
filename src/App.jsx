import './App.css'
import Navbar from './components/Navbar';
import React, {useState} from 'react';
import Exchanges from './components/Exchanges';
import Coins from './components/Coins';
import Home from './components/Home';
import About from './components/About';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CoinDetails from './components/CoinDetails';

function App() {
  const [darkMode, setDarkMode]= useState('light');  //Whether dark mode is enabled or not.
  const[text,setText]=useState('Dark');

  const [bg,setBg]=useState('white');
  const[color,setColor]=useState('black');

  const toggleMode=()=>
  {
    if(darkMode=='light')
    {
      setDarkMode('dark');
      setText('Light');
      setBg('rgba(0, 0, 0, 0.698)');
      setColor('white');
      document.body.style.backgroundColor='rgba(0, 0, 0, 0.822)';
      document.body.style.color='white';
    }
    else
    {
      setDarkMode('light');
      setText('Dark');
      setBg('white');
      setColor('black');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar  title="FinanceFortune" aboutText="About" mode={darkMode} text={text} toggleMode={toggleMode}/>
      {/* <Navbar /> */}

      <Routes>
      <Route path='/' element={<Home />}/>
      <Route exact path="/about" element={<About mode={darkMode}/>}/> 
      </Routes>
      
      
    <div className="container my-3">
    <Routes>
    
      
      <Route path='/exchanges' element={<Exchanges mode={bg} text={color}/>}/>
      <Route path='/coins' element={<Coins mode={bg} text={color}/>}/>
      <Route path="/coin/:id" element={<CoinDetails />} />
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App
