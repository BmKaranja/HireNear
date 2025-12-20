import React , {useState, useEffect}from 'react'
import { Link } from 'react-router-dom';

function ProfileCard() {
  const [users, setUsers]=useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [inputValue, setInputValue] = useState('')
useEffect(() => {
    fetch("https://randomuser.me/api/?results=21")
      .then((res) => res.json())
      .then((data) => setUsers(data.results))
      .catch((err) => console.log("Error encountered:", err));
  }, []);
  if (!users) return <p>
    Loading....
  </p>
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
  const filteredUsers = users.map((user, idx) => ({ user, job: joblists[idx % joblists.length] })).filter(({ job }) => job.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const handleSearch = () => {
    setSearchTerm(inputValue);
  };
  return (
    <div>
      <input type='search' placeholder='🔍 Search for applicants.....' id='appsearch' className='shadow-blue-950 lg:100 h-10 sm:w-10 md:w-75' onChange={(e) => setInputValue(e.target.value)} value={inputValue}></input>
      <button onClick={handleSearch} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ml-2'>Search</button><br></br><br></br>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredUsers.map(({ user, job }) => (
          <div
            className='mt-4 mb-4 ml-6 mr-4 p-5 border rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-gray-100'
            key={user.login.uuid}
          >
              <div className='flex items-center'>
                <img src={user.picture.large} className='shadows' id='prof' />
                <div>
                  <p className='font-bold '>
                    {user.name.first} {user.name.last}
                  </p>
                  <p className='text-gray-600 mb-4'>
                    {job.title}
                  </p>
                </div>
              </div>
            <Link
              to={`/profiles/${user.login.uuid}`}
              state={{ user }}
              className="bg-blue-500 text-white px-3 py-0.5 rounded hover:bg-blue-600 transition duration-300"
            >
              View Profile →
            </Link>

          </div>
        ))}
      </div>
      {filteredUsers.length === 0 && searchTerm && (
        <p className='text-center text-gray-500 mt-4'>No applicants found for the searched job title.</p>
      )}
    </div>

  )
}

export default ProfileCard
