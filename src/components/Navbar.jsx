import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";


const Navbar = () => {
    useEffect(() => {
        var sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav, { edge: "right" });
    }, []);
    return (
        <>
            <nav>
                <div className="nav-wrapper z-depth-0 ">
                    <a href="/" target="_blank"><img className='logo' src='/images/jdevspace-logo.png' alt='logo'></img></a>
                    <a href="/" className="brand-logo center">j.DevSpace</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/dashboard" className="waves-effect waves-light btn-small light-blue darken-2">Dashboard</Link></li>
                        <li><Link to="/aboutus" className="waves-effect waves-light btn-small light-blue darken-2">Team</Link></li>
                        <li><Link to="/" className="waves-effect waves-light btn-small light-blue darken-2">Home</Link></li>
                    </ul>
                </div>
            </nav>

            <ul id="mobile-demo" className="sidenav">
                <li><Link to="/dashboard" className="waves-effect waves-light btn-small light-blue darken-2">Dashboard</Link></li>
                <li><Link to="/aboutus" className="waves-effect waves-light btn-small light-blue darken-2">Team</Link></li>
                <li><Link to="/" className="waves-effect waves-light btn-small light-blue darken-2">Home</Link></li>

            </ul>

        </>
    )
}

export default Navbar;
