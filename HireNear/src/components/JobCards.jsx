import React, { useState, useEffect } from 'react';

function JobCard() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [filters, setFilters] = useState({
    internship: false,
    partTime: false,
    fullTime: false,
    online: false,
    physical: false,
    rating5: false,
    rating4: false,
    rating3Below: false,
    noRating: false
  });
  const [activeFilters, setActiveFilters] = useState({
    internship: false,
    partTime: false,
    fullTime: false,
    online: false,
    physical: false,
    rating5: false,
    rating4: false,
    rating3Below: false,
    noRating: false
  });
  const ratings = [1, 2, 3, 4, 5];
  useEffect(() => {
    fetch("https://data.usajobs.gov/api/Search", {
      method: "GET",
      headers: {
        "Host": "data.usajobs.gov",
        "User-Agent": "medillin254@gmail.com",
        "Authorization-Key": "PhdRVJY6AeUFn+nvDT9ttumRXrmyOKIZ+9za88KJ9+M="
      }
    })
      .then(res => res.json())
      .then(data => setJobs(data.SearchResult.SearchResultItems))
      .catch(err => console.error("Error while fetching jobs:", err));
  }, []);


  const handleSearch = () => {
    setSearchTerm(inputValue);
    setActiveFilters(filters);
  };

  const handleFilterChange = (filterName) => {
    setFilters(prev => ({ ...prev, [filterName]: !prev[filterName] }));
  };
  const filteredJobs = jobs.filter((job) => {
    const details = job.MatchedObjectDescriptor;
    const title = details.PositionTitle.toLowerCase();
    const search = searchTerm.toLowerCase();
    const matchesSearch = title.includes(search);

    // For simplicity, since the API doesn't provide job type or location type, we'll skip those filters for now
    // Rating filter based on the mapped rating
    const index = jobs.indexOf(job);
    const rating = ratings[index % ratings.length];
    const matchesRating = (
      (!activeFilters.rating5 || rating === 5) &&
      (!activeFilters.rating4 || rating === 4) &&
      (!activeFilters.rating3Below || rating <= 3) &&
      (!activeFilters.noRating || rating === 0)
    );

    return matchesSearch && matchesRating;
    
  });
  if (!jobs) return <p className='text-red-50 text-center'>Loading available Jobs...</p>

  return (
    <div className="flex flex-row flex-1">
      <div className=" srchb2 w-1/4 h-screen sticky top-0 mb-2">
        <input type='search' placeholder='🔍 Search for your dream job.....' id='jobsearch' className='shadow-blue-950' onChange={(e) => setInputValue(e.target.value)} value={inputValue}></input>
        <button onClick={handleSearch} className='bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition duration-300 ml-2'>Search</button><br></br><br></br>
        <p className='underline'>Job Filter</p><br></br>
        <input type='checkbox' checked={filters.internship} onChange={() => handleFilterChange('internship')}></input><label>Internship</label><br></br><br></br>
        <input type='checkbox' checked={filters.partTime} onChange={() => handleFilterChange('partTime')}></input><label>Part-time</label><br></br><br></br>
        <input type='checkbox' checked={filters.fullTime} onChange={() => handleFilterChange('fullTime')}></input><label>Full-time</label><br></br><br></br>
        <input type='checkbox' checked={filters.online} onChange={() => handleFilterChange('online')}></input><label>Online</label><br></br><br></br>
        <input type='checkbox' checked={filters.physical} onChange={() => handleFilterChange('physical')}></input><label>Physical</label><br></br><br></br>
        <p className='underline'>Employer Rating</p><br></br>
        <input type='checkbox' checked={filters.rating5} onChange={() => handleFilterChange('rating5')}></input><label>⭐⭐⭐⭐⭐⭐</label><br></br><br></br>
        <input type='checkbox' checked={filters.rating4} onChange={() => handleFilterChange('rating4')}></input><label>⭐⭐⭐⭐</label><br></br><br></br>
        <input type='checkbox' checked={filters.rating3Below} onChange={() => handleFilterChange('rating3Below')}></input><label>Rating 3 & Below </label><br></br><br></br>
        <input type='checkbox' checked={filters.noRating} onChange={() => handleFilterChange('noRating')}></input><label>No Rating</label><br></br><br></br>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 marginr gap-10 mt-10 flex-1 overflow-y-auto p-4 ml-10">
        {filteredJobs.map((job, index) => {
          const details = job.MatchedObjectDescriptor;
          const randomRating = ratings[index % ratings.length];
          const stars = '⭐'.repeat(randomRating);
          return (
            <div key={job.MatchedObjectId} className="h-10 jobcards">
              <div className="jdetails">
                <p>{details.PositionTitle}</p>
                <p>{details.OrganizationName}</p>
                <p className="text-gray-500">{details.PositionLocation[0]?.LocationName}</p>
                <p className="text-gray-500">{details.PublicationStartDate}</p>
                <p className="text-yellow-500">{stars}</p>
                <a href={details.ApplyURI[0]} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 text-white px-3 py-0.5 rounded mt-2 hover:bg-blue-600 transition duration-300">
                    Apply →
                  </button>
                </a>
              </div>
            </div>
        );
      })}
      {filteredJobs.length === 0 && searchTerm && (
        <p className='text-gray-500 mt-4 centr'>❌No jobs found for the searched title and filters.</p>
      )}
    </div>
    </div>
  );
}

export default JobCard;
