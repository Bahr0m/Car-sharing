import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import Home from './Home-page/home.jsx';
import Cars from './Cars/cars';
import Seco from './Seco/Seco';
import Third from './Third/Third';


const App = () =>{
  return(
    <div className='container'>
     <Navbar /> 
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Cars' element={<Cars/>}/> 
      <Route path='/Seco' element={<Seco/>}/>
      <Route path='/Third' element={<Third/>}/>
    </Routes>

    </div>
    )
}


export default App;
