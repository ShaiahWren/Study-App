import { Component } from 'react';
import { Route } from 'react-router-dom';

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
        this.getJobs(this.state.jobSearch)
    };



    getJobs = async (jobSearch) => {
        const data = await fetch(`https://data.usajobs.gov/api/search?Keyword=${jobSearch}`, {
            method: "GET",
            headers: {
                Host: host,
                "User-Agent": userAgent,
                "Authorization-Key": authKey
            }
        }).then((response) => response.json());
        console.log(data.SearchResult.SearchResultItems);
    };
    // loadData = async () => {

    //     const response = await fetch(
    //         `https://data.usajobs.gov/api/Search?Keyword=Software&apiKey=a/tkHYSdRszVgOLaiZYgZ3AxA3TIw6480RxWxWb0O0o=`);
    //    const data = await response.json();
    //     return data;
    // };







    render() {
        return (
            <>
                
                <div className="search-bar ui segment">

                    <form>
                        <div className="field container">
                            <label>
                                Job Search
                            </label>
                            <input type="text" placeholder='Search..' name='job-search'
                                onChange={(event) => this._handleChange(event.target.value)} />

                        </div>
                    </form>
                </div>
                <button className="waves-effect waves-light btn-small teal darken-1" type="button" onClick={this._handleSearch}>
                    Search Jobs
                </button>
                {this.state.jobName.map(article => {
                    return (<li>{Jobs}</li>
                    )
                }
                )}
            </>
        )

    };

};

export default Jobs;


