import React, { useState, useEffect } from 'react'

function JobCard() {
  const [jobs, setJobs] =useState()
  useEffect(()=>(
    fetch ('https://findwork.dev/api/jobs/')
    .then(res =>res.json())
    .then(data => setJobs(data.results))
  ))
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 marginr gap-10 mt-10'>
      {jobs.map((job)=>(
      <div className='flex flex-1 flex-row h-10 jobcards'>
        <div className='pl-4 pr-4'>
          <img src={jobs.logo} alt="employer" className='h-20 w-20 mt-5 mr-2'/>
        </div>
        <div className='jdetails'>
          <p>{job.role}</p>
          <p>{job.company_name}</p>
          <p className='text-gray-500'>{job.location}</p>
          <p className='text-gray-500'>{job.date_posted}</p>
          <button className='bg-blue-500 text-white px-3 py-0.5 rounded mt-1 hover:bg-blue-600 transition duration-300'>Apply →</button>
        </div>
      </div>
))}
</div>
  )
}

export default JobCard
