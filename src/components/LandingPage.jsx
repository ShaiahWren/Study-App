import React from 'react'
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';

//Components
import Signin from './Signin';

const LandingPage = ({ users }) => {
    return (
        <>

            <Route exact path="/">

                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo center">Logo</a>
                        <ul id="nav-mobile" className="right">
                            <li><a href="/signin" className="waves-effect waves-light btn-small">Sign In</a></li>

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
                    {users.map(user => {
                        return <p>{user.email}, {user.password}</p>
                    })}

                        <p>Quiz yourself on JS, React, etc!</p>

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

                <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>



            </Route>
            <Route path="/signin">
                <Signin />
            </Route>
            <Route path="/dashboard">
                <Dashboard/>
            </Route>
        </>
    )
}

export default LandingPage;
