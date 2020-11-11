import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

// loadData = async () => {
//     const response = await fetch(
//       `https://jobs.github.com/positions.json?description=software&engineer&location=sf`
//     );
//     const data = await response.json();
//     console.log('Jobs data >>>>', data);
//     return data;
//   };

export default function JobsApi() {
	const [ jobsData, setJobsData ] = useState([]);

	const getJavascriptJobs = () => {
		axios
			.get(
				'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=javascript&location=us',
				{ headers: { 'Access-Control-Allow-Origin': '*' } }
			)
			.then(function(response) {
				setJobsData(response.data);
			});
	};
	const getReactJobs = () => {
		axios
			.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=react&location=us', {
				headers: { 'Access-Control-Allow-Origin': '*' }
			})
			.then(function(response) {
				setJobsData(response.data);
			});
	};
	const getPythonJobs = () => {
		axios
			.get(
				'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=us',
				{ headers: { 'Access-Control-Allow-Origin': '*' } }
			)
			.then(function(response) {
				setJobsData(response.data);
			});
	};

	return (
		<div>
			<button className="btn-small teal darken-1" onClick={getJavascriptJobs}>
				JavaScript Jobs
			</button>
			<button className="btn-small teal darken-1" onClick={getReactJobs}>
				React Jobs
			</button>
			<button className="btn-small teal darken-1" onClick={getPythonJobs}>
				Python Jobs
			</button>
			{jobsData.map((job) => {
				return (
					<div className="jobsCard card z-depth-0">
						<h5>{job.title}</h5>
						<p>
							<strong>{job.company}</strong>
						</p>
						<p>
							{job.location} - {job.type}
						</p>
						<a href={job.company_url} target="_blank">
							<button className="btn-small teal darken-1 jobBtn">Link to Job</button>
						</a>
					</div>
				);
			})}
		</div>
	);
}
