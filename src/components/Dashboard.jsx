import React from 'react'
import { Route, Link } from 'react-router-dom';

//Componenets
import Flashcards from './Flashcards';
import News from './News';
import YouTube from './YouTube';
import Jobs from './Jobs'



const Dashboard = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper blue-grey darken-3">
                    <a href="#" className="brand-logo center">Logo</a>
                    <ul id="nav-mobile" className="right">
                        <li><a href="/" className="waves-effect waves-light btn-small light-blue darken-2">Sign Out</a></li>

                    </ul>
                </div>
            </nav>

            <div className="dashboard-links">
                <a class="waves-effect waves-light btn-large dash-button side light-blue darken-2"><Link to="/dashboard">News</Link></a>
                <a class="waves-effect waves-light btn-large dash-button side light-blue darken-2"><Link to="/dashboard/flashcards">Flashcards</Link></a>
                <a class="waves-effect waves-light btn-large dash-button side light-blue darken-2"><Link to="/dashboard/video">Videos</Link></a>
                <a class="waves-effect waves-light btn-large dash-button side light-blue darken-2"><Link to="/dashboard/jobs">Jobs</Link></a>

            </div>

            <Route path="/dashboard/flashcards">
                <Flashcards />
            </Route>

            <Route exact path="/dashboard">
                <News />
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
