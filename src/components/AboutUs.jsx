import React from 'react';
import { gsap } from 'gsap'

const Signin = () => {

    gsap.to('.card-wrapper', {y:200, duration:3});

    return (
        <>
                <nav>
                    <div className="nav-wrapper z-depth-0 blue-grey darken-3">
                        <a href="#" className="brand-logo center">j.DevSpace</a>
                        <ul id="nav-mobile" className="right">
                            <li><a href="/" className="waves-effect waves-light btn-small light-blue darken-2">Home</a></li>
                            <li><a href="/dashboard" className="waves-effect waves-light btn-small light-blue darken-2">Dashboard</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="card-wrapper">
                    <h1>About Us</h1>
                </div>

        </>
    )
};

export default Signin;
