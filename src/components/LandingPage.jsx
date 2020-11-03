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
                        <ul id="nav-mobile" className="right">
                            <li><a href="sass.html">Sign In</a></li>

                        </ul>
                    </div>
                </nav>

                <h1>Our Beautiful Study App</h1>
                <p>This is the description of our app and why we are making it and what problem it solves!</p>
                <div className="intro-wrapper">
                    <div className="card">
                        <img className="intro-images" src="http://placekitten.com/200/300" alt="" />
                        <h2>News</h2>
                        <p>A place for sharing news and resources about projects, tech, etc!</p>
                    </div>
                    <div className="card">
                        <img className="intro-images" src="http://placekitten.com/200/300" alt="" />

                        <h2>Flashcards</h2>
                        <p>Quiz yourself on JS, React, etc!
                </p>
                    </div>
                    <div className="card">
                        <img className="intro-images" src="http://placekitten.com/200/300" alt="" />

                        <h2>Test-Your-Skills</h2>
                        <p>live interactive coding exercises!</p>
                    </div>


                </div>
                <div className="intro-scroll">
                    <p>Scroll to learn more</p>
                </div>

                <div>
                    <div>
                        <h3>News</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo vel orci porttitor malesuada. Proin sed tempor eros, sit amet dapibus turpis. Praesent vitae elit quis nibh facilisis eleifend. In id viverra tellus, sed varius mauris. Suspendisse vel ultrices urna. Sed sit amet dui et nisl dapibus feugiat sed eget mi. Mauris nunc velit, pulvinar id augue eget, vulputate dapibus sapien. Vestibulum est felis, ornare a purus vitae, scelerisque vestibulum diam. Fusce vehicula mi eget velit posuere, quis condimentum mi finibus. Nullam maximus ex nec ex posuere elementum. Cras at efficitur erat. Curabitur sed mauris purus. Aliquam feugiat mi eget purus dapibus, a vulputate nisl feugiat. Fusce semper eu odio sit amet posuere. Morbi quis velit nisl. Nunc eget ante sagittis dui finibus facilisis at vitae nunc.</p>
                    </div>
                    <div>

                        <h3>Flashcards</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo vel orci porttitor malesuada. Proin sed tempor eros, sit amet dapibus turpis. Praesent vitae elit quis nibh facilisis eleifend. In id viverra tellus, sed varius mauris. Suspendisse vel ultrices urna. Sed sit amet dui et nisl dapibus feugiat sed eget mi. Mauris nunc velit, pulvinar id augue eget, vulputate dapibus sapien. Vestibulum est felis, ornare a purus vitae, scelerisque vestibulum diam. Fusce vehicula mi eget velit posuere, quis condimentum mi finibus. Nullam maximus ex nec ex posuere elementum. Cras at efficitur erat. Curabitur sed mauris purus. Aliquam feugiat mi eget purus dapibus, a vulputate nisl feugiat. Fusce semper eu odio sit amet posuere. Morbi quis velit nisl. Nunc eget ante sagittis dui finibus facilisis at vitae nunc.
                </p>
                    </div>
                    <div>

                        <h3>Test-Your-Skills</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo vel orci porttitor malesuada. Proin sed tempor eros, sit amet dapibus turpis. Praesent vitae elit quis nibh facilisis eleifend. In id viverra tellus, sed varius mauris. Suspendisse vel ultrices urna. Sed sit amet dui et nisl dapibus feugiat sed eget mi. Mauris nunc velit, pulvinar id augue eget, vulputate dapibus sapien. Vestibulum est felis, ornare a purus vitae, scelerisque vestibulum diam. Fusce vehicula mi eget velit posuere, quis condimentum mi finibus. Nullam maximus ex nec ex posuere elementum. Cras at efficitur erat. Curabitur sed mauris purus. Aliquam feugiat mi eget purus dapibus, a vulputate nisl feugiat. Fusce semper eu odio sit amet posuere. Morbi quis velit nisl. Nunc eget ante sagittis dui finibus facilisis at vitae nunc.</p>
                    </div>
                </div>



            </Route>
            <Route path="/signin">
                <Signin />
            </Route>
        </>
    )
}

export default LandingPage;
