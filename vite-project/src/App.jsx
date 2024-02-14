import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signin' element={<Signin/>}/>
     <Route path='/signup' element={<Signup/>}/>



    </Routes>
    
    
    </BrowserRouter>


    
    </>
  )
}

export default App