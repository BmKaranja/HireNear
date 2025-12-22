import React from 'react'
import NavBar from './NavBar'
import { Link} from 'react-router-dom'
import Footer from './Footer'
import About from './About'

function LandingPage() {
  return (
    <div className='w-screen h-screen bar '>
        <section className=' mr-0 w-screen h-150 top '>
        <NavBar/>
        <article div className='mt-25 top1  flex text-center float-left'>
            <div className='div-1 pr-20 w-3/4'>
                <p className='text-7xl txt-1 pl-15 mr-20 text-white'>
                  HireNear — where
                  employers hire 
                  and seekers get hired
                  </p>
                <div className='flex float-left gap-4 flex-1 '>
                  <button className='bg-blue-600 hover:bg-blue-900 text-white font-semibold pl-3 pr-3 rounded-lg ml-20 mt-8 h-8 btns'>
                      <Link to='/jobs'>Job opportunities →</Link>
                  </button>
                  <button className='bg-white hover:bg-blue-900 hover:text-white text-blue-600 font-semibold rounded-lg ml-20 mt-8 pl-3 pr-3 btns'>
                      <Link to ='/hire'>Hire Talent →</Link>
                  </button>
                </div>
            </div>
        </article>
        </section>
        <About/>
      <Footer/>
    </div>
  )
}

export default LandingPage
