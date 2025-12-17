import React, { useState, useEffect } from 'react';

function JobCard() {
  const [jobs, setJobs] = useState([]);

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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 marginr gap-10 mt-10">
      {jobs.map((job) => {
        const details = job.MatchedObjectDescriptor;
        return (
          <div key={job.MatchedObjectId} className="h-10 jobcards">
            <div className="jdetails">
              <p>{details.PositionTitle}</p>
              <p>{details.OrganizationName}</p>
              <p className="text-gray-500">{details.PositionLocation[0]?.LocationName}</p>
              <p className="text-gray-500">{details.PublicationStartDate}</p>
              <a href={details.ApplyURI[0]} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 text-white px-3 py-0.5 rounded mt-1 hover:bg-blue-600 transition duration-300">
                  Apply →
                </button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default JobCard;
