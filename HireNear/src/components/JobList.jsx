import React from 'react'
import JobCard from './JobCards'
import NavBar from './NavBar'
import Snowfall from 'react-snowfall'

function JobList() {
  return (
    <div>
      <div id='top1'>
        <NavBar />
      </div>        
          <JobCard />
      <Snowfall style={{height:'100vh'}}wind={[-0.5, 2.0]} />
    </div>
  )
}

export default JobList
