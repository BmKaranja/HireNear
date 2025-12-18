import React from 'react'
import SearchBar1 from './SearchBar1'
import NavBr2 from './NavBr2'
import ProfileCards from './ProfileCards'
function Applicants() {
  return (
    <div>
      <div id='top1'>
      <NavBr2/>
      </div>
        <section>
          {/* Scrollable profile cards */}
          <div className="flex-1 overflow-y-auto p-4">
            <ProfileCards />
          </div>
        </section>
    </div>
  )
}

export default Applicants
