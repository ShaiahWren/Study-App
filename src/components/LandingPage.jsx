import React from 'react'
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import { gsap } from 'gsap'

//Components
import AboutUs from './AboutUs';

const LandingPage = ({ users }) => {

    gsap.fromTo('div .card', { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, });

    return (
        <>

            <Route exact path="/">
                <nav>
                    <div className="nav-wrapper z-depth-0 blue-grey darken-3">
                        <a href="#" className="brand-logo center">j.DevSpace</a>
                        <ul id="nav-mobile" className="right">
                            <li><a href="/aboutus" className="waves-effect waves-light btn-small light-blue darken-2">About Us</a></li>
                            <li><a href="/dashboard" className="waves-effect waves-light btn-small light-blue darken-2">Dashboard</a></li>
                        </ul>
                    </div>
                </nav>
                <div className='intro'>
                    <h1>Our Beautiful Study App</h1>
                    <p>This is the description of our app and why we are making it and what problem it solves! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo vel orci porttitor malesuada. Proin sed tempor eros, sit amet dapibus turpis. Fusce semper eu odio sit amet posuere. Morbi quis velit nisl. Nunc eget ante sagittis dui finibus facilisis at vitae nunc.Fusce semper eu odio sit amet posuere. Morbi quis velit nisl. Nunc eget ante sagittis dui finibus facilisis at vitae nunc.</p>
                </div>
                <div className="intro-wrapper">
                    <div className="row">
                        <div className="col m6 l3">
                            <div className="card z-depth-0 blue-grey lighten-5">
                                <img className="intro-images" src="/images/flashcards.png" alt="" />
                                <h2>News</h2>
                                <p>A place for sharing news and resources about projects, tech, etc!</p>
                            </div>
                        </div>
                        <div className="col m6 l3">
                            <div className="card z-depth-0 blue-grey lighten-5">
                                <img className="intro-images" src="/images/flashcards.png" alt="" />
                                <h2>Flashcards</h2>
                                <p>Quiz yourself on JS, React, etc!</p>
                            </div>
                        </div>
                        <div className="col m6 l3">
                            <div className="card z-depth-0 blue-grey lighten-5">
                                <img className="intro-images" src="/images/flashcards.png" alt="" />
                                <h2>Videos</h2>
                                <p>Video tutorials and more</p>
                            </div>
                        </div>
                        <div className="col m6 l3">
                            <div className="card z-depth-0 blue-grey lighten-5">
                                <img className="intro-images" src="/images/flashcards.png" alt="" />
                                <h2>Jobs</h2>
                                <p>Job info for junior devs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro-scroll">
                    <div>
                        <div>
                            <h3>News</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo vel orci porttitor malesuada. Proin sed tempor eros, sit amet dapibus turpis. Praesent vitae elit quis nibh facilisis eleifend. In id viverra tellus, sed varius mauris. Suspendisse vel ultrices urna. Sed sit amet dui et nisl dapibus feugiat sed eget mi. Mauris nunc velit, pulvinar id augue eget, vulputate dapibus sapien. Vestibulum est felis, ornare a purus vitae, scelerisque vestibulum diam. Fusce vehicula mi eget velit posuere, quis condimentum mi finibus. Nullam maximus ex nec ex posuere elementum. Cras at efficitur erat. Curabitur sed mauris purus. Aliquam feugiat mi eget purus dapibus, a vulputate nisl feugiat. Fusce semper eu odio sit amet posuere. Morbi quis velit nisl. Nunc eget ante sagittis dui finibus facilisis at vitae nunc.</p>
                        </div>
                        <div>
                            <h3>Flashcards</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo vel orci porttitor malesuada. Proin sed tempor eros, sit amet dapibus turpis. Praesent vitae elit quis nibh facilisis eleifend. In id viverra tellus, sed varius mauris. Suspendisse vel ultrices urna. Sed sit amet dui et nisl dapibus feugiat sed eget mi. Mauris nunc velit, pulvinar id augue eget, vulputate dapibus sapien. Vestibulum est felis, ornare a purus vitae, scelerisque vestibulum diam. Fusce vehicula mi eget velit posuere, quis condimentum mi finibus. Nullam maximus ex nec ex posuere elementum. Cras at efficitur erat. Curabitur sed mauris purus. Aliquam feugiat mi eget purus dapibus, a vulputate nisl feugiat. Fusce semper eu odio sit amet posuere. Morbi quis velit nisl. Nunc eget ante sagittis dui finibus facilisis at vitae nunc.</p>
                        </div>
                        <div>
                            <h3>Videos</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo vel orci porttitor malesuada. Proin sed tempor eros, sit amet dapibus turpis. Praesent vitae elit quis nibh facilisis eleifend. In id viverra tellus, sed varius mauris. Suspendisse vel ultrices urna. Sed sit amet dui et nisl dapibus feugiat sed eget mi. Mauris nunc velit, pulvinar id augue eget, vulputate dapibus sapien. Vestibulum est felis, ornare a purus vitae, scelerisque vestibulum diam. Fusce vehicula mi eget velit posuere, quis condimentum mi finibus. Nullam maximus ex nec ex posuere elementum. Cras at efficitur erat. Curabitur sed mauris purus. Aliquam feugiat mi eget purus dapibus, a vulputate nisl feugiat. Fusce semper eu odio sit amet posuere. Morbi quis velit nisl. Nunc eget ante sagittis dui finibus facilisis at vitae nunc.</p>
                        </div>
                        <div>
                            <h3>Jobs</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo vel orci porttitor malesuada. Proin sed tempor eros, sit amet dapibus turpis. Praesent vitae elit quis nibh facilisis eleifend. In id viverra tellus, sed varius mauris. Suspendisse vel ultrices urna. Sed sit amet dui et nisl dapibus feugiat sed eget mi. Mauris nunc velit, pulvinar id augue eget, vulputate dapibus sapien. Vestibulum est felis, ornare a purus vitae, scelerisque vestibulum diam. Fusce vehicula mi eget velit posuere, quis condimentum mi finibus. Nullam maximus ex nec ex posuere elementum. Cras at efficitur erat. Curabitur sed mauris purus. Aliquam feugiat mi eget purus dapibus, a vulputate nisl feugiat. Fusce semper eu odio sit amet posuere. Morbi quis velit nisl. Nunc eget ante sagittis dui finibus facilisis at vitae nunc.</p>
                        </div>
                    </div>
                </div>
            </Route>
            <Route path="/aboutus">
                <AboutUs />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </>
    )
}

export default LandingPage;
