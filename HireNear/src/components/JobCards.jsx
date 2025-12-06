import React from 'react'

function JobCard() {
  return (
    <div className='grid grid-cols-2 marginr gap-30 mt-10'>
      <div className='flex flex-1 flex-row h-10 jobcards'>
        <div>
          <img src="account.png" alt="employer" className='h-20'/>
        </div>
        <div className='jdetails'>
          <p>Employer Name</p>
          <p>Job Name</p>
          <p>Short description</p>
        </div>
      </div>
      <div className='flex flex-1 flex-row h-10 jobcards'>
        <div>
          <img src="account.png" alt="employer" className='h-20'/>
        </div>
        <div className='jdetails'>
          <p>Employer Name</p>
          <p>Job Name</p>
          <p>Short description</p>
        </div>
      </div>

    </div>
  )
}

export default JobCard
