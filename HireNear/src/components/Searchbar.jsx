import React from 'react'

function Searchbar() {
  return (
    <div className='w-90'>
      <input type='search' placeholder='🔍 Search for your dream job.....' id='jobsearch' className='shadow-blue-950'></input><br></br><br></br>
      <p className='underline'>Job Filter</p><br></br>
      <input type='checkbox'></input><label>Part-time</label><br></br><br></br>
      <input type='checkbox'></input><label>Full-time</label><br></br><br></br>
      <input type='checkbox'></input><label>Online</label><br></br><br></br>
      <input type='checkbox'></input><label>Physical</label><br></br><br></br>
      <p className='underline'>Employer Rating</p><br></br>
      <input type='checkbox'></input><label>Rating 5</label><br></br><br></br>
      <input type='checkbox'></input><label>Rating above 3</label><br></br><br></br>
      <input type='checkbox'></input><label>Rating Below 3</label><br></br><br></br>
      <input type='checkbox'></input><label>No Rating</label><br></br><br></br>
    </div>
  )
}

export default Searchbar
