import React from 'react'
import { Link} from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <div className='p-2 flex justify-between w-screen mt-0'>
          <div className='logo grid grid-cols-2'style={{marginTop:'-2.5%'}}>
            <span className=' Name text-xl pt-1'>HireNear</span>
            <img src='logo.png' className='size-7 pt-1.5'></img>
          </div>
          <div className='flex flex-right w-auto gap-10'>
            <p className='l-1 text-white mt-0.5 pr-7'><Link to='/jobs' className='Links'>Looking for a Job?</Link> / <Link to ='/hire'className='Links'>Looking to Hire?</Link></p>
            <button className='rounded-lg w-20.5 h-8 bg-blue-600 hover:bg-blue-900 '>
              <Link to = '/signup ' className='text-white'> SignUp</Link>
            </button>
          </div>
        </div>
    </div>
  )
}

export default NavBar
