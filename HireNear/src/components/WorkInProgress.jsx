import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'
function WorkInProgress() {
  return (
    <div className='mt-14'>
      <div  style={{display:'flex', flexDirection:'column', gap:10,justifyContent:'center', alignItems:'center',alignContent:'center'}}>
      <img src='OIP-removebg-preview.png'></img>
      <button className='bg-blue-800 rounded-xl pr-4 pl-4 text-white mt-8 pt-3 pb-3'>
        <Link to ='/landingpage'>
        Back to Home →
        </Link>
      </button>
      </div>
      <Footer/>
    </div>
  )
}

export default WorkInProgress
