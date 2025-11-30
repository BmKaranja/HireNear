import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import JobList from './JobList'

function NavBar() {
  return (
    <div>
        <div className='nav-bar mt-2 mb-2 p-2 flex justify-between items-center border-b-2 border-gray-300'>
            <img src='Copilot_20251127_183403.png' alt='HireNear Logo' className='flex float-left 'style={{height:30}} />
            <p><Link to='/jobs'>Looking for a Job?</Link> / <Link to ='/hire'>Looking to Hire?</Link></p>
        </div>
        <Routes>
            <Route path='/jobs' element={<JobList />} />
        </Routes>
    </div>
  )
}

export default NavBar
