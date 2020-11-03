import React from 'react'
import { Route } from 'react-router-dom';

//Components
import Signin from './Signin';

const LandingPage = () => {
    return (
        <>

            <Route exact path="/">

                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo center">Logo</a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>
                </nav>

                <h1>Our Beautiful Study App</h1>
                <p>This is the description of our app and why we are making it and what problem it solves!</p>
                <div>
                    <h2>News</h2>
                    <p>A place for sharing news and resources about projects, tech, etc!</p>
                </div>
                <div>
                    <h2>Flashcards</h2>
                    <p>Quiz yourself on JS, React, etc!
                </p>
                </div>
                <div>
                    <h2>Test-Your-Skills</h2>
                    <p>live interactive coding exercises!</p>
                </div>

            </Route>
            <Route path="/signin">
                <Signin />
            </Route>
        </>
    )
}

export default LandingPage;
