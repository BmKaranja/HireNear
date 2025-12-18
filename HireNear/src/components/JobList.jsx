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
      <section className="flex flex-row flex-1">
          {/* Sidebar with sticky search bar */}
          <div className="w-1/4 h-screen sticky top-0" style={{marginLeft:'-3vw'}} >
            <Searchbar/>
          </div>

          {/* Scrollable profile cards */}
          <div className="flex-1 overflow-y-auto p-4 ml-10">
            <JobCard />
          </div>
        </section>

    </div>
  )
}

export default JobList
