import { Component, useState, useEffect } from "react";
import { Route } from "react-router-dom";

const authKey = "a/tkHYSdRszVgOLaiZYgZ3AxA3TIw6480RxWxWb0O0o=";
const host = "data.usajobs.gov";
const userAgent = "agamble9@student.gsu.edu";

class Jobs extends Component {
  state = {
    jobSearch: "",
    jobName: [],
  };

  _handleChange = (newText) => {
    this.setState({
      jobSearch: newText,
    });
  };

  _handleSearch = async () => {
    // const searchData = await this.loadData();
    // this.setState({
    //     jobName: [...this.state.jobName, searchData]
    // });
    this.getJobs(this.state.jobSearch);
  };

  getJobs = async (jobSearch) => {
    const data = await fetch(
      `https://data.usajobs.gov/api/search?Keyword=${jobSearch}`,
      {
        method: "GET",
        headers: {
          Host: host,
          "User-Agent": userAgent,
          "Authorization-Key": authKey,
        },
      }
    ).then((response) => response.json());
    console.log(data.SearchResult.SearchResultItems);
  };


  render() {
    return (
      <>
        <Route>
          <h1>Jobs</h1>
        </Route>
        <form>
          <lable>
            Loading job data...
            <input
              type="text"
              onChange={(event) => this._handleChange(event.target.value)}
            />
          </lable>
        </form>
        <button type="button" onClick={this._handleSearch}>
          Search Jobs
        </button>
        {this.state.jobName.map((article) => {
          return <li>{Jobs}</li>;
        })}
      </>
    );
  }
}

export default Jobs;
