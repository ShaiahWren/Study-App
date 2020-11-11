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

const getJavascriptJobs = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=javascript&location=us",
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then(function (response) {
        setJobsData(response.data)
      });
}
const getReactJobs = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=react&location=us",
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then(function (response) {
        setJobsData(response.data)
      });
}
const getPythonJobs = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=us",
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then(function (response) {
        setJobsData(response.data)
      });
}
const getFullStackJobs = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=full&stack&location=us",
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then(function (response) {
        setJobsData(response.data)
      });
}
const getFrontEndJobs = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=front&end&location=us",
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then(function (response) {
        setJobsData(response.data)
      });
}
const getBackEndJobs = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=back&end&location=us",
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then(function (response) {
        setJobsData(response.data)
      });
}

  return (
    <div>
    <button onClick={getJavascriptJobs}>JavaScript Jobs</button>
    <button onClick={getReactJobs}>React Jobs</button>
    <button onClick={getPythonJobs}>Python Jobs</button>
    <button onClick={getFullStackJobs}>Full-Stack Jobs</button>
    <button onClick={getBackEndJobs}>Back End Jobs</button>
    <button onClick={getFrontEndJobs}>Front End Jobs</button>
      { jobsData.map((job) => {
                return <div>
                    <p>{job.title}</p>
                    <p>{job.location}</p>
                    <p>{job.type}</p>
                    <p>{job.comapny}</p>
                    <a href={job.company_url} target='_blank'>Link to Job</a>
                    
                </div>
            })}
    </div>
  );
}
