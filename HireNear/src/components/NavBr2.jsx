import React from 'react'
import { FiUser } from "react-icons/fi";
import { Link} from 'react-router-dom'

function NavBr2() {
  return (
    <div className='navbr'>
        <div className='p-2 flex justify-between w-screen mt-0'>
          <div className='logo grid grid-cols-2'style={{marginTop:'-2%'}}>
            <Link to='/'>
              <span className=' Name text-xl pt-1'>HireNear</span>
            </Link>
            <img src='logo.png' className='size-7 pt-1.5'></img>
          </div>
          <div className='flex w-auto gap-10'>
            <p className='l-1 text-blue-900 mt-0.5 '><Link to='/jobs'>Looking for a Job?</Link> / <Link to ='/applicants'>Looking to Hire?</Link></p>
            <Link to = '/WorkInProgress'>
                <FiUser size={24} color="#0f52ba" className='mr-9.5 acc1' />
            </Link>
          </div>
        </div>
    </div>
  )
}

export default NavBr2
