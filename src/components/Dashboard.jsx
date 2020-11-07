import React from 'react'
import { Route, Link } from 'react-router-dom';
import M from 'materialize-css';

//Componenets
import Flashcards from './Flashcards';
import News from './News';
import YouTube from './YouTube/YouTube';
import Jobs from './Jobs'

let instance = M.Tabs.init();

const Dashboard = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper z-depth-0 blue-grey darken-3">
                    <a href="#" className="brand-logo center">j.DevSpace</a>
                    <ul id="nav-mobile" className="right">
                        <li><a href="/aboutus" className="waves-effect waves-light btn-small light-blue darken-2">About Us</a></li>
                        <li><a href="/" className="waves-effect waves-light btn-small light-blue darken-2">Home</a></li>

                    </ul>
                </div>
            </nav>

                <div className='col s12'>
                    <ul className="tabs dashboard-links blue-grey darken-3">
                        <li className="tab col s3"><Link className='blue-grey-text text-lighten-5' to="/dashboard">News</Link></li>
                        <li className="tab col s3"><Link className='blue-grey-text text-lighten-5' to="/dashboard/flashcards">Flashcards</Link></li>
                        <li className="tab col s3"><Link className='blue-grey-text text-lighten-5' to="/dashboard/video">Videos</Link></li>
                        <li className="tab col s3"><Link className='blue-grey-text text-lighten-5' to="/dashboard/jobs">Jobs</Link></li>
                    </ul>
                </div>

            <Route exact path="/dashboard">
                <News />
            </Route>
            
            <Route path="/dashboard/flashcards">
                <Flashcards />
            </Route>

            <Route path="/dashboard/video">
                <YouTube />
            </Route>

            <Route path="/dashboard/jobs">
                <Jobs />
            </Route>


        </>
    )
}

export default Dashboard;
