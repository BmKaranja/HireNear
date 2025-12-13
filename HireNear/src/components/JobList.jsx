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
      <div className='flex flex-1 flex-row gap-4'>
        <div className='bg-gray-200' style={{marginLeft:'-3vw', backgroundColor:'whitesmoke'}} >
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
