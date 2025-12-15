import React , {useState, useEffect}from 'react'

function ProfileCard() {
  const [users, setUsers]=useState([])
useEffect(() => {
    fetch("https://randomuser.me/api/?results=18")
      .then((res) => res.json())
      .then((data) => setUsers(data.results))
      .catch((err) => console.log("Error encountered:", err));
  }, []);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
      {users.map((user)=>(
        <div className='mt-4 mb-4 ml-6 mr-4 p-10 border rounded-lg shadow-lg hover:shadow-2xl transition duration-300' key={user.login.uuid}>
          <img src={user.picture.large} className='shadows'id='prof'></img>
          <span className='font-bold mb-2'>{user.name.first} {user.name.last}</span>
          <p className='text-gray-600 mb-4'>Software Engineer</p>
          <button className='bg-blue-500 text-white px-3 py-0.5 rounded hover:bg-blue-600 transition duration-300'>View Profile →</button>
        </div>
      ))}
    </div>
  )
}

export default ProfileCard
