import React from 'react'
import ProfileCards from './ProfileCards'
import NavBar from './NavBar'
import Snowfall from 'react-snowfall'
function Applicants() {
  return (
    <div>
      <div id='top1'>
        <NavBar/>
      </div>
      <section>
        {/* Scrollable profile cards */}
        <div className="flex-1 overflow-hidden p-4 p-div">
          <ProfileCards />
        </div>
      </section>
    <Snowfall style={{height:'100vh'}}wind={[-0.5, 2.0]} />
  </div>
  )
}

export default Applicants
