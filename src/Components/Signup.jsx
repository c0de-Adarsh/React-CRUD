import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup({userData,setUserData,form, setData, editIndex, setEditIndex}) {

  
  
  const navigate = useNavigate()
 

  const changeHandler = (e) =>{
   
    setData({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
     e.preventDefault()
     if(editIndex !== null){
      const updateUser = userData.map((item,i) => i === editIndex? form : item)
      setUserData(updateUser)
      setEditIndex(null)
     } else{
      setUserData([...userData, form])
      console.log(userData)
     
     }

    
     navigate('/')
  }

   
  return (
    <>
      <div className='grid gap-8 justify-center h-[100vh] xl:h-full'>
        <div className='bg-gradient-to-r from-blue-500 to-purple-500 rounded-[20px] m-4'>
          <div className='border-[20px] border-transparent rounded-[20px] dark:text-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 md:p-10 sm:p-2 m-2 '>
            {
              editIndex === null? <h1 className='pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default'>
              Sign Up
            </h1>: <h1 className='pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default'>
             update
            </h1>
            }
           
            <form action="#" method='post' className='space-y-4'>
              <div>
                <label className='mb-2 dark:text-gray-400 text-lg'>
                  Name
                </label>
                <input type="text" placeholder='Your Name' className='border mb-2 dark:bg-indigo-700 p-3 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:*:scale-105 ease-in-out duration-300' name='userName' value={form.userName} onChange={changeHandler}/>
              </div>
              <div>
                <label className='mb-2 dark:text-gray-400 text-lg'>
                  Email
                </label>
                <input type="email" placeholder='Your Email' className='border mb-2 dark:bg-indigo-700 dark:text-gray-300 p-3 dark:border-gray-700 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:*:scale-105 ease-in-out duration-300' name='email' value={form.email} onChange={changeHandler}/>
              </div>
              
              <div>
                <label className='mb-2 dark:text-gray-400 text-lg'>
                  Mobile Number
                </label>
                <input type="text" placeholder='Your Number' className='border mb-2 p-3 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:*:scale-105 ease-in-out duration-300' name='number' value={form.number} onChange={changeHandler}/>
              </div>

              {
                editIndex === null? <button className='bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg p-2 mt-4 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out' onClick={handleSubmit}>
                Sign Up
              </button>: <button className='bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg p-2 mt-4 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out' onClick={handleSubmit}>
                update
              </button>
              }
             
            </form>
            <div className='flex flex-col mt-4 items-center justify-center text-sm'>
              <h3>
                <span className='cursor-default dark:text-gray-300'>
                   Have an account?
                </span>
              <Link className='group text-blue-400 transition-all duration-100 ease-in-out' to='/login'>
               <span className='bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] transition-all duration-500 ease-out'>
                 Login
               </span>
              </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup