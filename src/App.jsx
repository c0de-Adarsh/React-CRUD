import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Signup from './Components/Signup'

function App() {
  return (
   <>
   <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup />}/>
    </Routes>
    </BrowserRouter>
   </div>
   </>
   
  )
}

export default App