import React from 'react'

function JobCard() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 marginr gap-10 mt-10'>
      <div className='flex flex-1 flex-row h-10 jobcards'>
        <div className='pl-4 pr-4'>
          <img src="account.png" alt="employer" className='h-20 w-20 mt-5 mr-2'/>
        </div>
        <div className='jdetails'>
          <p>Job Name</p>
          <p>Employer Name</p>
          <p className='text-gray-500'>Location</p>
          <p className='text-gray-500'>Rating</p>
          <button className='bg-blue-500 text-white px-3 py-0.5 rounded mt-1 hover:bg-blue-600 transition duration-300'>Apply →</button>
        </div>
      </div>
      <div className='flex flex-1 flex-row h-10 jobcards'>
        <div className='pl-4 pr-4'>
          <img src="account.png" alt="employer" className='h-20 w-20 mt-5 mr-2'/>
        </div>
        <div className='jdetails'>
          <p>Job Name</p>
          <p>Employer Name</p>
          <p className='text-gray-500'>Location</p>
          <p className='text-gray-500'>Rating</p>
          <button className='bg-blue-500 text-white px-3 py-0.5 rounded mt-1 hover:bg-blue-600 transition duration-300'>Apply →</button>
        </div>
      </div>

      <div className='flex flex-1 flex-row h-10 jobcards gap-1'>
        <div className='pl-4 pr-4'>
          <img src="account.png" alt="employer" className='h-20 w-20 mt-5 mr-2'/>
        </div>
        <div className='jdetails'>
          <p>Job Name</p>
          <p>Employer Name</p>
          <p className='text-gray-500'>Location</p>
          <p className='text-gray-500'>Rating</p>
          <button className='bg-blue-500 text-white px-3 py-0.5 rounded mt-1 hover:bg-blue-600 transition duration-300'>Apply →</button>
        </div>
      </div>

    </div>
  )
}

export default JobCard
