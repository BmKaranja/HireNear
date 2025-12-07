import React from 'react'

function JobCard() {
  return (
    <div className='grid grid-cols-2 marginr gap-20 mt-10'>
      <div className='flex flex-1 flex-row h-10 jobcards gap-2'>
        <div className='pl-4'>
          <img src="account.png" alt="employer" className='h-20 w-100 mt-3'/>
        </div>
        <div className='jdetails'>
          <p>Job Name</p>
          <p>Employer Name</p>
          <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo atque exercitationem quod quo, itaque voluptates omnis illo voluptatibus ipsum commodi saepe magni iste eos, cumque consequatur voluptas. Nobis, deserunt fugit.</p>
        </div>
      </div>
      <div className='flex flex-1 flex-row h-10 jobcards gap-1'>
        <div className='pl-4'>
          <img src="account.png" alt="employer" className='h-20 w-100 mt-3'/>
        </div>
        <div className='jdetails'>
          <p>Job Name</p>
          <p>Employer Name</p>
          <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo atque exercitationem quod quo, itaque voluptates omnis illo voluptatibus ipsum commodi saepe magni iste eos, cumque consequatur voluptas. Nobis, deserunt fugit.</p>
        </div>
      </div>

    </div>
  )
}

export default JobCard
