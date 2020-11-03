import React from 'react';
import { Route, Link } from 'react-router-dom';


const Signin = () => {
    return (
        <>
            <Route path="/signin">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo center">Logo</a>
                        <ul id="nav-mobile" className="right">
                            <li><a href="/">Home</a></li>

                        </ul>
                    </div>
                </nav>

                <div className="card-wrapper">
                    <div className="sign-up-card">
                        <h1>Signup</h1>
                        <label >
                            <input type="email" placeholder="cardib@hotmail.com" />
                        </label>

                        <label >
                            <input type="password" placeholder="*************" />

                        </label>
                        <label >
                            <button><Link to="/dashboard">
                                Submit
                            </Link></button>
                        </label>


                    </div>

                    <p>or</p>

                    <div className="sign-up-card">
                        <h1>Signup</h1>
                        <label >
                            <input type="email" placeholder="cardib@hotmail.com" />
                        </label>

                        <label >
                            <input type="password" placeholder="*************" />

                        </label>
                        <label >
                            <button><Link to="/dashboard">
                                Submit
                            </Link></button>
                        </label>

                    </div>


                </div>

            </Route>


        </>
    )
};

export default Signin;
