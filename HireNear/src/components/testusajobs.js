// testUsaJobs.js
// If you're on Node v18+, fetch is built-in. If you're on Node v16, run: npm install node-fetch@2
// and then: const fetch = require("node-fetch");

const url = "https://data.usajobs.gov/api/Search?Keyword=react&LocationName=Washington";

async function testUsaJobs() {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Host": "data.usajobs.gov",
        "User-Agent": "medillin254@gmail.com", // your registered email
        "Authorization-Key": "PhdRVJY6AeUFn+nvDT9ttumRXrmyOKIZ+9za88KJ9+M=" // your API key
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Total results:", data.SearchResult.SearchResultCount);

    // Print the first 5 jobs
    data.SearchResult.SearchResultItems.slice(0, 20).forEach((job, index) => {
      const details = job.MatchedObjectDescriptor;
      console.log(`\nResult #${index + 1}`);
      console.log("Title:", details.PositionTitle);
      console.log("Agency:", details.OrganizationName);
      console.log("Location:", details.PositionLocation[0]?.LocationName);
      console.log("Date Posted:", details.PublicationStartDate);
      console.log("Apply Link:", details.ApplyURI[0]);
    });
  } catch (err) {
    console.error("Error while fetching jobs:", err);
  }
}

testUsaJobs();
