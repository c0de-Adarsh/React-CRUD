import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home({userData,setUserData,setData, editIndex, setEditIndex}) {
  
  const navigate = useNavigate()
  
  const handleDelete = (id) =>{
     
    const filterData = userData.filter((item,i)=>(
        i != id
    ))
    setUserData(filterData)
  }

  const handleEdit = (item,index) =>{
     
    setData(item)
    setEditIndex(index)
    navigate('/signup')
  }
  return (
   <>
   <div className='  flex justify-center h-[300px] mt-24  items-center'>
    <div className='max-w-2xl mx-auto'>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
           <tr>
          <th scope='col' className='px-6 py-3'>Name</th>
          <th scope='col' className='px-6 py-3'>Email</th>
          <th scope='col' className='px-6 py-3'>Phone Number</th>
          <th scope='col' className='px-6 py-3'>Action</th>
           </tr>
          </thead>
          <tbody>
     {
      userData.map((item,i)=>(
        // <div key={i} className='border-b-2'>
        //  <p>{item.userName}</p>
        //  <p>{item.email}</p>
        //  <p>{item.number}</p>
        //  <button className='border-b px-2 py-2' onClick={()=> handleDelete(i)}>Delete</button>
        // </div>
        <tr key={i} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
         <th scope='row' className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
           {item.userName}
         </th>
         <td className='px-6 py-4'>{item.email}</td>
         <td className='px-6 py-4'>{item.number}</td>
         <td className='px-6 py-4 text-right'>
           <a href="#" className='font-medium text-blue-600 dark:text-blue-500 hover:underline
           ' 
           onClick={()=> handleDelete(i)}>

            Delete
           </a>
           <a href="#" className='font-medium text-blue-600 dark:text-blue-500 hover:underline ml-3
           ' 
           onClick={()=> handleEdit(item,i)}>

            Edit
           </a>
         </td>
        </tr>
      ))
     }
     </tbody>
     </table>
     </div>
     </div>
   </div>
   </>
  )
}

export default Home