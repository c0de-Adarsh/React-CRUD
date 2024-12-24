import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Signup from './Components/Signup'

function App() {

  const [userData , setUserData] = useState([])

  const [form , setData] = useState({
    userName:"", 
    email:"",
    number:""
  })

  const [editIndex , setEditIndex] = useState(null)

  return (
   <>
   <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home userData={userData} setUserData={setUserData} form={form} setData={setData}   editIndex={editIndex} setEditIndex={setEditIndex}/>}/>
      <Route path='/signup' element={<Signup userData={userData} setUserData={setUserData} form={form} setData={setData} editIndex={editIndex} setEditIndex={setEditIndex}/>}/>
    </Routes>
    </BrowserRouter>
   </div>
   </>
   
  )
}

export default App