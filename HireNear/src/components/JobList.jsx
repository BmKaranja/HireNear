import React from 'react'
import NavBr2 from './NavBr2'
import Searchbar from './Searchbar'
import JobCard from './JobCards'

function JobList() {
  return (
    <div>
      <div id='top1'>
        <NavBr2/>
      </div>
      <div className='flex flex-1 flex-row bg-gray-200'>
        <div>
          <Searchbar/>
        </div>
        <div>
          <JobCard/>
        </div>
      </div>
    </div>
  )
}

export default JobList
