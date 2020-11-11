import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import axios from "axios";

// loadData = async () => {
//     const response = await fetch(
//       `https://jobs.github.com/positions.json?description=software&engineer&location=sf`
//     );
//     const data = await response.json();
//     console.log('Jobs data >>>>', data);
//     return data;
//   };

export default function JobsApi() {
  const [jobsData, setJobsData] = useState([]);

const getJobs = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=javascript",
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then(function (response) {
        setJobsData(response.data)
      });
}

  return (
    <div>
      { jobsData.map((job) => {
                return <div>
                    <p>{job.title}</p>
                    <ReactMarkdown source={job.description} escapeHtml={false}/>
                </div>
            })}
            <button onClick={getJobs}>Get Jobs</button>
      <h1>Hello?</h1>
    </div>
  );
}
