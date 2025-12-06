import React from 'react'

function Searchbar() {
  return (
    <div>
      <input type='search' placeholder='🔍 Search for your dream job.....' id='jobsearch' className='shadow-blue-950'></input><br></br><br></br>
      <p className='underline'>Job Filter</p><br></br>
      <input type='checkbox'></input><label> Boy</label><br></br><br></br>
    </div>
  )
}

export default Searchbar
