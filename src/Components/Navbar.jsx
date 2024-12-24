import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <header className="text-gray-600 body-font border shadow-md">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl">Vito</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
     
     
      <Link to='/' className="mr-5 hover:text-gray-900">Home</Link>
      <Link className="mr-5 hover:text-gray-900">About</Link>
    </nav>
    <Link to='/signup'>
    <button className="inline-flex items-centerborder-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 bg-blue-500 p-10 text-white">Sign up
      
    </button>
    </Link>
  </div>
</header>
    </>
  )
}

export default Navbar