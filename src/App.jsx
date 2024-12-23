import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Signup from './Components/Signup'

function App() {

  const [userData , setUserData] = useState([])

  return (
   <>
   <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home userData={userData} />}/>
      <Route path='/signup' element={<Signup userData={userData} setUserData={setUserData} />}/>
    </Routes>
    </BrowserRouter>
   </div>
   </>
   
  )
}

export default App