import React from 'react'

function JobCard() {
  return (
    <div className='grid grid-cols-2 marginr gap-50 mt-10'>
      <div className='flex flex-1 flex-row h-10 jobcard'>
        <div>
          <img src="account.png" alt="employer" className='h-20'/>
        </div>
        <div>
          <p>Employer Name</p>
          <p>Job Name</p>
          <p>Short description</p>
          <p>Rating</p>
        </div>
      </div>
            <div className='flex flex-1 flex-row h-10 shadow-amber-500'>
        <div>
          <img src="account.png" alt="employer" className='h-20'/>
        </div>
        <div>
          <p>Employer Name</p>
          <p>Job Name</p>
          <p>Short description</p>
          <p>Rating</p>
        </div>
      </div>

    </div>
  )
}

export default JobCard
