import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import { FaRegCommentDots } from "react-icons/fa";

function NavBar() {
  const Loggedin = localStorage.getItem('Loggedin') === 'true'
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div>
      <div className='p-2 flex justify-between w-screen mt-0'>
        {/* Logo Section */}
        <div className='logo grid grid-cols-2' style={{ marginTop: '-2%' }}>
          <Link to='/'>
            <span className='Name text-xl pt-1'>HireNear</span>
          </Link>
          <img src='/logo.png' className='size-7 pt-1.5' alt="logo" />
        </div>

        {/* Conditional Rendering */}
        {Loggedin ? (
          <div className='flex flex-right w-auto gap-10'>
            <p className='l-1 text-white pr-7'>
              <Link to='/jobs' className='Links'>Looking for a Job?</Link> / 
              <Link to='/applicants' className='Links'>Looking to Hire?</Link>
            </p>

            {/* Dropdown */}
              <Link to='/WorkInProgress'>
                <span className="text-white text-2xl"> <FaRegCommentDots /></span>
              </Link>
              <div className='relative'>
              <button id='dropdown'
                onClick={() => setDropdownOpen(prev => !prev)} 
                className="text-white text-2xl">
                <FiUser size={24} color="white" className='mr-6.5 acc' />
              </button>
              {dropdownOpen && (
                <div className='menu absolute bg-gray-800 text-white p-2 rounded shadow-lg'>
                  <Link to='/WorkInProgress' className=' hover:bg-gray-500'>Settings</Link><br></br>
                  <Link to='/WorkInProgress' className=' hover:bg-gray-500'>Account details</Link><br></br>
                  <Link to='/LandingPage' className=' hover:bg-gray-500'>LogOut</Link>
                </div>
              )}
              </div>
            </div>
        ) : (
          <div className='flex flex-right w-auto gap-10'>
            <p className='l-1 text-white mt-0.5 pr-7'>
              <Link to='/jobs' className='Links'>Looking for a Job?</Link> / 
              <Link to='/applicants' className='Links'>Looking to Hire?</Link>
            </p>
            <Link 
              to='/signup' 
              className='rounded-lg w-20.5 h-8 bg-blue-600 hover:bg-blue-900 mr-6.5 btns text-white flex items-center justify-center'
            >
              SignUp
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
