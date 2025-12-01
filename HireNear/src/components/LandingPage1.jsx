import React from 'react'
import NavBar1 from './NavBar1'

function LandingPage() {
  return (
    <div className='w-screen h-screen bar '>
        <section className=' mr-0 w-screen h-130 top ' style={{marginRight:-20}}>
        <NavBar1/>
        <article div className='grid grid-cols-2 gap-20 mt-20'>
            <div className='div-1'>
                <p className='text-6xl txt-1 pl-15'>
                  HireNear — where
                  employers hire 
                  and seekers get hired
                  </p>
                <div className='flex float-left gap-8'>
                  <button className='bg-blue-600 hover:bg-blue-900 text-white font-semibold py-1.5 px-6 rounded-lg ml-20 mt-8'>
                      <Link to='/jobs'>Job opportunities →</Link>
                  </button>
                  <button className='bg-white hover:bg-blue-900 text-blue-600 font-semibold py-1.5 px-4 rounded-lg ml-20 mt-8'>
                      <Link to ='/hire'>Hire Talent →</Link>
                  </button>
                </div>
            </div>
            <img src='Job_searching-removebg-preview.png' className='h-90' id='searching'></img>
        </article>
        </section>
    </div>
  )
}

export default LandingPage
