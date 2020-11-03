import React from 'react'
import { Route, Link } from 'react-router-dom';


const Dashboard = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">Logo</a>
                    <ul id="nav-mobile" className="right">
                        <li><a href="/" className="waves-effect waves-light btn-small">Sign Out</a></li>

                    </ul>
                </div>
            </nav>

            <div className="dashboard-links">
                <a class="waves-effect waves-light btn-large dash-button side">News</a>
                <a class="waves-effect waves-light btn-large dash-button">Flashcards</a>
                <a class="waves-effect waves-light btn-large dash-button side">Other</a>

            </div>




        </>
    )
}

export default Dashboard;
