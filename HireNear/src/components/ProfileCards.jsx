import React from 'react'

function ProfileCard() {
  return (
    <div className='grid grid-cols-3'>
      <div className='mt-4 mb-4 ml-6 mr-4 p-10 border rounded-lg shadow-lg hover:shadow-2xl transition duration-300'>
        <img src='pexels-cottonbro-5989928.jpg' id='prof'></img>
        <h2 className='text-xl font-bold mb-2'>John Doe</h2>
        <p className='text-gray-600 mb-4'>Software Engineer</p>
        <button className='bg-blue-500 text-white px-10 py-2 rounded hover:bg-blue-600 transition duration-300'>View Profile</button>
      </div>
      <div className='m-4 p-10 border rounded-lg shadow-lg hover:shadow-2xl transition duration-300'>
        <h2 className='text-xl font-bold mb-2'>Jane Smith</h2>
        <p className='text-gray-600 mb-4'>Product Manager</p>
        <button className='bg-blue-500 text-white px-10 py-2 rounded hover:bg-blue-600 transition duration-300'>View Profile</button>
      </div>
      <div className='m-4 p-10 border rounded-lg shadow-lg hover:shadow-2xl transition duration-300'>
        <h2 className='text-xl font-bold mb-2'>Jane Smith</h2>
        <p className='text-gray-600 mb-4'>Product Manager</p>
        <button className='bg-blue-500 text-white px-10 py-2 rounded hover:bg-blue-600 transition duration-300'>View Profile</button>
      </div>
    </div>
  )
}

export default ProfileCard
