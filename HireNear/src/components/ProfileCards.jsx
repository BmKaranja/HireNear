import React , {useState, useEffect}from 'react'
import SearchBar1 from './SearchBar1';

function ProfileCard() {
  const [users, setUsers]=useState([])
useEffect(() => {
    fetch("https://randomuser.me/api/?results=18")
      .then((res) => res.json())
      .then((data) => setUsers(data.results))
      .catch((err) => console.log("Error encountered:", err));
  }, []);
  const joblists = [
    { id: 1, title: "Software Engineer", rating: 4.5 },
    { id: 2, title: "Product Manager", rating: 4.2 },
    { id: 3, title: "UX Designer", rating: 4.8 },
    { id: 4, title: "Data Analyst", rating: 4.1 },
    { id: 5, title: "DevOps Engineer", rating: 4.6 },
    { id: 6, title: "QA Engineer", rating: 4.3 },
    { id: 7, title: "Marketing Manager", rating: 4.7 },
    { id: 8, title: "Sales Executive", rating: 4.4 },
    { id: 9, title: "HR Specialist", rating: 4.9 },
    { id: 10, title: "Financial Analyst", rating: 4.6 },
    { id: 11, title: "Business Analyst", rating: 4.5 },
    { id: 12, title: "Content Writer", rating: 4.3 },
    { id: 13, title: "Graphic Designer", rating: 4.4 },
    { id: 14, title: "Project Manager", rating: 4.2 },
    { id: 15, title: "Customer Support Lead", rating: 4.8 },
    { id: 16, title: "Operations Manager", rating: 4.7 }
  ]
  return (
    <div>
      <SearchBar1/>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2'>
        {users.map((user, indx) => (
          <div
            className='mt-4 mb-4 ml-6 mr-4 p-10 border rounded-lg shadow-lg hover:shadow-2xl transition duration-300'
            key={user.login.uuid}
          >
            <img src={user.picture.large} className='shadows' id='prof' />
            <span className='font-bold mb-2'>
              {user.name.first} {user.name.last}
            </span>
            <p className='text-gray-600 mb-4'>
              {joblists[indx % joblists.length].title}
            </p>
            <button className='bg-blue-500 text-white px-3 py-0.5 rounded hover:bg-blue-600 transition duration-300'>
              View Profile →
            </button>
          </div>
        ))}
      </div>
      </div>

  )
}

export default ProfileCard
