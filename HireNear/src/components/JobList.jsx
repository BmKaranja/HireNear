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
          <JobCard />
    </div>
  )
}

export default JobList
