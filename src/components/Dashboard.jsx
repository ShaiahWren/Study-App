import React from 'react'
import { Route, Link } from 'react-router-dom';

//Componenets
import Flashcards from './Flashcards';
import News from './News';
import QuizYourself from './QuizYourself';



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
                <a class="waves-effect waves-light btn-large dash-button side"><Link to="/dashboard/news">News</Link></a>
                <a class="waves-effect waves-light btn-large dash-button"><Link to="/dashboard/flashcards">Flashcards</Link></a>
                <a class="waves-effect waves-light btn-large dash-button side"><Link to="/dashboard/quizyourself">Other</Link></a>

            </div>

            <Route path="/dashboard/flashcards">
                <Flashcards />
            </Route>

            <Route path="/dashboard/news">
                <News />
            </Route>

            <Route path="/dashboard/quizyourself">
                <QuizYourself />
            </Route>


        </>
    )
} it

export default Dashboard;
